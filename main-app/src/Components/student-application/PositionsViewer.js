import React, {useState, useEffect} from 'react';
import Select from 'react-select'
import Warning from '../Warning';
import PositionViewer from './PositionViewer';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheckCircle} from "@fortawesome/free-solid-svg-icons";

export default function PositionsViewer({positions}) {
	const [selectedCompanies, updateSelectedCompanies] = useState([]);
	const [appliedFilters, updateAppliedFilters] = useState({
		location: null,
		discipline: null,
		company: null
	});
	const [renderedPositions, updateRenderedPositions] = useState(positions)
	const [availableFilters, updateAvailableFilters] = useState({
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
	}

	useEffect(renderPositions, [positions, appliedFilters, availableFilters]);
	function renderPositions() {
		if (!positions || !availableFilters || !appliedFilters) return;
		let locations = [], disciplines = [], companies = [];

		//convert filters to 1D arrays;
		if (!appliedFilters.location) {
			locations = availableFilters.location.map(location => location.label)
		} else {
			appliedFilters.location.forEach(location => locations.push(location.label))
		}
		if (!appliedFilters.discipline) {
			disciplines = availableFilters.discipline.map(discipline => discipline.label)
		} else {
			appliedFilters.discipline.forEach(discipline => disciplines.push(discipline.label))
		}
		if (!appliedFilters.company) {
			companies = availableFilters.company.map(company => company.label)
		} else {
			appliedFilters.company.forEach(company => companies.push(company.label))
		}

		//console.log({companies});
		let filteredPositions = positions
			.filter(position => disciplines.includes(position.discipline))
			.filter(position => companies.includes(position.companyName))
			.filter(position => locations.includes(`${position.city}, ${position.state}`))

			updateRenderedPositions(filteredPositions);
	}


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
		updateAvailableFilters({
			discipline: availableDisciplines,
			company: availableCompanies,
			location: availableLocations
		})
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
					? renderedPositions.map((position, index) => <PositionViewer key={index} position={position} /> )
					: <p>No current positions</p>
			}
		</React.Fragment>
	)
}