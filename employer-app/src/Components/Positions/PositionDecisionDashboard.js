import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {setPositions} from '../../actions/positions';
import getPositions from '../../../utils/getPositions';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTimesCircle, faCheckCircle, faQuestionCircle} from "@fortawesome/free-solid-svg-icons";
import '../../css/position.css';


function PositionReview({clearance, errors, updateErrors, index, position, dispatch}) {

	const [redirectUrl, triggerRedirect] = useState(false)

	function acceptPosition () {
		const accept = confirm('Are you sure you want to accept this position?');
		if (accept) {
			fetch(`${PROTOCOL}${DOMAIN}/newposition`, {
		      method: "PUT",
		      body: JSON.stringify({
		      	companyId: position.company,
		      	positionId: position._id,
		      	approved: 2
		      }),
		      headers: { 
		        "Content-Type": "application/json",
		        "Access-Control-Allow-Origin": "http://localhost:3000" 
		      },
		      mode: "cors",
		      credentials: "include"
		    })
			.then(res => res.json())
			.then(resObject => {
				if (resObject.errors) {
					let newErrors = [...errors];
					newErrors[index] = []
					resObject.errors.forEach(error => {
					newErrors[index].push(error);
					});
					updateErrors(newErrors);
				} else {
					getPositions()
					.then(positions => dispatch(setPositions(positions)));
				}
			});
		}
	}

	if (redirectUrl) {
		return <Redirect to={redirectUrl} />
	}

	return (
		<React.Fragment>
			<div className='position-right-section'>
				<FontAwesomeIcon
					icon={faTimesCircle}
					className='position-review reject'
				/>
				<Link to={{
					pathname: `/pendingpositions/${position._id}`,
					state: {
						position
					}
				}}>
					<FontAwesomeIcon
						icon={faQuestionCircle}
						className='position-review revise'
					/>
				</Link>
				<FontAwesomeIcon
					icon={faCheckCircle}
					className='position-review accept'
					onClick={acceptPosition}
				/>
			</div>
		</React.Fragment>
	)
}

function mapStateToProps(state) {
  return {
  	clearance: state.user.user.clearance
  };
}

export default connect(mapStateToProps)(PositionReview);