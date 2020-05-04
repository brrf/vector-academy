import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import Select from 'react-select'
import Warning from '../Warning';
import PositionViewer from './PositionViewer';
import CollapsedPositionViewer from './CollapsedPositionViewer';
import {SubmitButtonsNoForm, ApplicationEditButtons} from './ApplicationButtons';
import hydratePositions from '../../../utils/hydrate-positions';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheckCircle} from "@fortawesome/free-solid-svg-icons";

function PositionsViewer({positions, handleSubmit, handleApplicationStep, complete, appliedPositions}) {
	const [selectedPositions, updateSelectedPositions] = useState([]);
	useEffect(() => {
		if (appliedPositions && appliedPositions.length !== 0) {
			updateSelectedPositions(appliedPositions)
		}
	}, [appliedPositions]);


	const [errors, updateErrors] = useState([]);
	const [edit, updateEdit] = useState(complete);
	const [counter, updateCounter] = useState(0);

	//all filters; static & derived from positions
	const [allFilters, updateAllFilters] = useState({
		location: [],
		discipline: [],
		company: []
	});
	//currently active filters
	const [appliedFilters, updateAppliedFilters] = useState({
		location: [],
		discipline: [],
		company: []
	});
	//positions that meet filter criteria
	const [renderedPositions, updateRenderedPositions] = useState(positions)
	
	// style for Select component
	const customStyles = {
	  menu: (provided, state) => ({
	    ...provided,
	    width: '30vw'
	  }),
	};

	useEffect(populateFilters, [positions]);
	function populateFilters() {
		let addedDisciplines = [];
		let addedCompanies = [];
		let addedLocations = [];

		positions.forEach(position => {
			// add unique disciplines
			if (!addedDisciplines.includes(position.discipline)) {
				addedDisciplines.push(position.discipline)
			}
			//add unique companies
			if (!addedCompanies.includes(position.companyName)) {
				addedCompanies.push(position.companyName)
			}
			//add unique locations
			const location = `${position.city}, ${position.state}`;
			if (!addedLocations.includes(location)) {
				addedLocations.push(location);
			}
		});

		const allDisciplines = addedDisciplines.map(discipline => (
			{
				label: discipline,
				value: discipline
			}
		))
		const allCompanies = addedCompanies.map(company => (
			{
				label: company,
				value: company
			}
		))	
		const allLocations = addedLocations.map(location => (
			{
				label: location,
				value: location
			}
		))
		
		updateAllFilters({
			discipline: allDisciplines,
			company: allCompanies,
			location: allLocations
		});
	}

	useEffect(renderPositions, [allFilters, appliedFilters]);
	function renderPositions() {
		if (!positions || !appliedFilters) return;
		
			let filteredPositions = returnFilteredPositions();
			updateRenderedPositions(filteredPositions);
	};

	function returnFilteredPositions () {
		let locations = [], disciplines = [], companies = [];

		//convert filters to 1D arrays;
		if (!appliedFilters.location || appliedFilters.location.length === 0) {
			locations = allFilters.location.map(location => location.label)
		} else {
			appliedFilters.location.forEach(location => locations.push(location.label))
		}
		if (!appliedFilters.discipline || appliedFilters.discipline.length === 0) {
			disciplines = allFilters.discipline.map(discipline => discipline.label)
		} else {
			appliedFilters.discipline.forEach(discipline => disciplines.push(discipline.label))
		}
		if (!appliedFilters.company || appliedFilters.company.length === 0) {
			companies = allFilters.company.map(company => company.label)
		} else {
			appliedFilters.company.forEach(company => companies.push(company.label))
		}

		return positions
			.filter(position => disciplines.includes(position.discipline))
			.filter(position => companies.includes(position.companyName))
			.filter(position => locations.includes(`${position.city}, ${position.state}`))
	}

	function handleUpdateAppliedFilters(e, field) {
		updateAppliedFilters({
			...appliedFilters,
			[field]: e
		})
	};

	if (edit && appliedPositions) { 
		return (
			<React.Fragment>
				<h3>{`Selected Positions: ${appliedPositions.length}`}</h3>
				{
					hydratePositions(appliedPositions, positions).map(position => {
						return <CollapsedPositionViewer key={position._id} position={position} />
					})
				}
				<button onClick={(edit) => updateEdit(!edit)} className='application-complete-edit'>Edit</button>
				<ApplicationEditButtons handleApplicationStep={handleApplicationStep}/>
			</React.Fragment>
		)
	}

	return (
		<React.Fragment>
			<Warning errors={errors} />
			<div>
				<h3>Filters</h3>
				<div className='position-filter-container'>
					<Select
						onChange={(e) => handleUpdateAppliedFilters(e, 'location')}
						className='position-filter'
						value={appliedFilters.location}
						options={allFilters.location}
						isMulti={true}
						styles={customStyles}
						placeholder='Location'
					/>
					<Select
						onChange={(e) => handleUpdateAppliedFilters(e, 'discipline')}
						className='position-filter'
						value={appliedFilters.discipline}
						options={allFilters.discipline}
						styles={customStyles}
						placeholder='Discipline'
						isMulti={true}
					/>
					<Select
						onChange={(e) => handleUpdateAppliedFilters(e, 'company')}
						className='position-filter'
						value={appliedFilters.company}
						options={allFilters.company}
						styles={customStyles}
						isMulti={true}
						placeholder='Company'
					/>
				</div>
			</div>
			{
				renderedPositions && renderedPositions.length > 0 
					? renderedPositions.map((position) => <PositionViewer updateCounter={updateCounter} counter={counter} key={position._id} position={position} selectedPositions={selectedPositions} updateSelectedPositions={updateSelectedPositions}/> )
					: <p>No current positions</p>
			}
			<div className='selected-position-counter'>{selectedPositions.length}</div>
			<SubmitButtonsNoForm handleSubmit={handleSubmit} handleApplicationStep={handleApplicationStep} selectedPositions={selectedPositions} updateErrors={updateErrors} />
		</React.Fragment>
	)
}

function mapStateToProps(state) {
	const complete = state.application.applicationStatus.application.positions ? true : false
	return {
		complete,
		appliedPositions: state.application.applicationStatus.application.positions,
	}
};

export default connect(mapStateToProps)(PositionsViewer);
