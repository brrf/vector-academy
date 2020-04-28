import React, {useState, useEffect} from 'react';
import Warning from '../Warning';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheckCircle} from "@fortawesome/free-solid-svg-icons";

export default function PositionViewer({position, updateSelectedPositions}) {

	const [expanded, toggleExpanded] = useState(false)
	return (
		<div className='applied-position-container' onClick={() => toggleExpanded(!expanded)}>		
			<div className='position-body'>
				<div className='position-left'>
					<div>
						<h2>{position.companyName}</h2>
						<h3>{position.discipline}</h3>
						<p>{`${position.city}, ${position.state}`}</p>
					</div>
					{ expanded
					? <div style={{margin: '8px'}}>
						<p>{position.description}</p>
						<p>{position.otherInformation}</p>
					</div>
					: null
					}
					<h6>{expanded ? 'Less...' : 'More...'}</h6>
				</div>
				<div className='position-right'>
					<div className='position-right-section'>
						<h4 className='supervising-engineer-label'>Supervising Engineer</h4>
						<h4 className='supervising-engineer'>{`${position.supervisorFname} ${position.supervisorLname}`}</h4>
					</div>
					{ expanded
					? <div className='position-right-section'>
						<h4 className='position-courses-label'>Onboarding Courses</h4>
						<ul>
							{
								position.requestedSkills.map((skill, index) => {
									return (
										<h4 className='position-course' key={index}>{skill}</h4>
									)
								})
							}
						</ul>
					</div>
					: null
				}
				</div>
			</div>						
		</div>
	)
}