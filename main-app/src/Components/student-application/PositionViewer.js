import React, {useState, useEffect, useRef} from 'react';
import Warning from '../Warning';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheckCircle} from "@fortawesome/free-solid-svg-icons";

export default function PositionViewer({position}) {
	console.log(position);
	const [positionState, updatePositionState] = useState({
		selected: false,
		overflow: false,
		expanded: false
	})	

	function toggleSelected (e) {
		updatePositionState({
			...positionState,
			selected: !positionState.selected
		})
	}

	const description = useRef(null);
	const otherInformation = useRef(null);
	useEffect(() => {
		if (description.current.offsetHeight + otherInformation.current.offsetHeight > 160) {
			updatePositionState({
				...positionState,
				overflow: true
			})
		}
	}, [])

	function handleExpand () {
		if (!positionState.overflow) return;
		updatePositionState({
			...positionState,
			expanded: !positionState.expanded
		})
	}
	
	return (
		<div className={`position-container ${positionState.expanded ? 'expanded' : ''}`}>		
			<div className='position-body'>
				<div className={`${positionState.overflow ? 'overflow' : ''} ${positionState.expanded ? 'expanded' : ''} position-left`} onClick={handleExpand}>
					<div>
						<h2>{position.companyName}</h2>
						<h3>{position.discipline}</h3>
						<p>{`${position.city}, ${position.state}`}</p>
					</div>
					<div className={`${positionState.expanded ? 'expanded' : ''} position-info`}>
						<p ref={description}>{position.description}</p>
						<p ref={otherInformation}>{position.otherInformation}</p>
					</div>
					{ positionState.overflow
						? <h6>{positionState.expanded ? 'Less...' : 'More...'}</h6>
						: null
					}
				</div>
				<div className='position-right'>
					<div className='position-right-section'>
						<h4 className='supervising-engineer-label'>Supervising Engineer</h4>
						<h4 className='supervising-engineer'>{`${position.supervisorFname} ${position.supervisorLname}`}</h4>
					</div>
					<div className='position-right-section'>
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
						<button onClick={toggleSelected} className={`${positionState.selected ? 'applied' : null}`}>Apply
							{
								positionState.selected
								? <FontAwesomeIcon
									icon={faCheckCircle}
									size="1x"
									style={{marginLeft: '10px', color: 'white'}}
			          				/>
		          				: null
		          			}
						</button>
					</div>
				</div>
			</div>						
		</div>
	)
}