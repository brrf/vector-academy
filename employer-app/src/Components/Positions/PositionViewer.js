import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTimesCircle, faCheckCircle, faQuestionCircle} from "@fortawesome/free-solid-svg-icons";
import '../../css/position.css';
import PositionDecisionDashBoard from './PositionDecisionDashBoard';
import RevisionsView from './RevisionsView';
import Warning from '../Warning';

function PositionViewer({positions, clearance}) {
	const [errors, updateErrors] = useState(null);
	useEffect(() => {
		if (positions) {
			let newErrors = positions.map((position) => {
				return ([]);
			})
			updateErrors(newErrors);
		}
	}, [positions]);

	return (
		<React.Fragment>
		{
			positions && positions.length > 0 
				? positions.map((position, index) => {
					return (
						<div key={index} className='position-container'>
							{ errors !== null 
									? <Warning errors={errors[index]} />
									: null
							}
							<div className='position-body'>
								<div className='position-left'>
									<div>
										<h2>{position.companyName}</h2>
										<h3>{position.discipline}</h3>
										<p>{`${position.city}, ${position.state}`}</p>
									</div>
									<div className='position-info'>
										<p>{position.description}</p>
										<p>{position.otherInformation}</p>
									</div>
									{
										position.revisions.length > 0
											? <RevisionsView revisions={position.revisions}/>
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
									</div>
									{
										clearance === 2
											? <PositionDecisionDashBoard position={position} updateErrors={updateErrors} index={index} errors={errors}/>
											: null
									}
									
								</div>
							</div>
							{
								position.revisions.length > 0
								? <button className='application-complete-edit'><Link to={`/pendingpositions/${position._id}`}>Edit</Link></button>
								: null
							}
							
						</div>
					)
				})
				: <p>No current positions</p>
		}
		</React.Fragment>
	)
}

function mapStateToProps(state) {
  return {
  	clearance: state.user.user.clearance
  };
}

export default connect(mapStateToProps)(PositionViewer);
