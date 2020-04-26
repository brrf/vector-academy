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
	const [availableFilters, updateAvailableFilters] = useState({
		location: [
			{
			label: 'Mechanical Engineering',
			value: 'mechanical-engineering'
			}
		],
		discipline: [
			{
			label: 'Mechanical Engineering',
			value: 'mechanical-engineering'
			}
		],
		company: [
			{
			label: 'Mechanical Engineering',
			value: 'mechanical-engineering'
			}
		]
	})

	//menu, placeholder
	const customStyles = {
	  menu: (provided, state) => ({
	    ...provided,
	    width: '40vw',
	    maxWidth: '300px'
	  }),
	}


	useEffect(populateFilters, []);
	function populateFilters() {
		console.log('populated')
	}




	return (
		<React.Fragment>
			<div>
				<h3>Filters</h3>
				<div className='position-filter-container'>
					<Select
						className='position-filter'
						value={appliedFilters.location}
						options={availableFilters.location}
						isMulti={true}
						styles={customStyles}
						placeholder='Location'
					/>
					<Select
						className='position-filter'
						value={appliedFilters.discipline}
						options={availableFilters.discipline}
						styles={customStyles}
						placeholder='Discipline'
						isMulti={true}
					/>
					<Select
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
				positions && positions.length > 0 
					? positions.map((position, index) => <PositionViewer key={index} position={position} /> )
					: <p>No current positions</p>
			}
		</React.Fragment>
	)
}