import React, {useState, useEffect, useRef} from 'react';
import Select from 'react-select'
import Warning from '../Warning';
import PositionViewer from './PositionViewer';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheckCircle} from "@fortawesome/free-solid-svg-icons";

export default function PositionsViewer({positions}) {
	const [selectedCompanies, updateSelectedCompanies] = useState([]);
	const [appliedFilters, updateAppliedFilters] = useState({
		location: [],
		discipline: [],
		company: []
	});
	const [renderedPositions, updateRenderedPositions] = useState(positions)
	const [availableFilters, updateAvailableFilters] = useState({
		location: [],
		discipline: [],
		company: []
	})
	const [allFilters, updateAllFilters] = useState({
		location: [],
		discipline: [],
		company: []
	})

	// style for Select component
	const customStyles = {
	  menu: (provided, state) => ({
	    ...provided,
	    width: '40vw',
	    maxWidth: '300px'
	  }),
	};

	const firstRenderRef = useRef(true)

	useEffect(populateFilters, [positions, appliedFilters]);
	function populateFilters() {
		let addedDisciplines = [];
		let addedCompanies = [];
		let addedLocations = [];

		let positionsToTest;

		if (availableFilters.location.length === 0 || availableFilters.discipline.length === 0 || availableFilters.company.length === 0) {
			positionsToTest = positions
		} else {
			positionsToTest = returnFilteredPositions();
		}

		positionsToTest.forEach(position => {
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



		let availableDisciplines = addedDisciplines.map(discipline => (
			{
				label: discipline,
				value: discipline
			}
		))
		let availableCompanies = addedCompanies.map(company => (
			{
				label: company,
				value: company
			}
		))	
		let availableLocations = addedLocations.map(location => (
			{
				label: location,
				value: location
			}
		))

		if (allFilters.location.length === 0 || allFilters.discipline.length === 0 || allFilters.company.length === 0) {
			updateAllFilters({
				discipline: availableDisciplines,
				company: availableCompanies,
				location: availableLocations
			})
		}
		
		updateAvailableFilters({
			discipline: availableDisciplines,
			company: availableCompanies,
			location: availableLocations
		})
	}

	useEffect(renderPositions, [availableFilters, appliedFilters]);
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
	}



	return (
		<React.Fragment>
			<div>
				<h3>Filters</h3>
				<div className='position-filter-container'>
					<Select
						onChange={(e) => handleUpdateAppliedFilters(e, 'location')}
						className='position-filter'
						value={appliedFilters.location}
						options={availableFilters.location}
						isMulti={true}
						styles={customStyles}
						placeholder='Location'
					/>
					<Select
						onChange={(e) => handleUpdateAppliedFilters(e, 'discipline')}
						className='position-filter'
						value={appliedFilters.discipline}
						options={availableFilters.discipline}
						styles={customStyles}
						placeholder='Discipline'
						isMulti={true}
					/>
					<Select
						onChange={(e) => handleUpdateAppliedFilters(e, 'company')}
						className='position-filter'
						value={appliedFilters.company}
						options={availableFilters.company}
						styles={customStyles}
						isMulti={true}
						placeholder='Company'
					/>
				</div>
			</div>
			{
				renderedPositions && renderedPositions.length > 0 
					? renderedPositions.map((position) => <PositionViewer key={position._id} position={position} /> )
					: <p>No current positions</p>
			}
		</React.Fragment>
	)
}