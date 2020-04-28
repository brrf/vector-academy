import React, {useState, useEffect, useRef} from 'react';
import {connect} from 'react-redux';
import Warning from '../Warning';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheckCircle} from "@fortawesome/free-solid-svg-icons";

class PositionViewer extends React.Component {
	constructor(props) {
		super(props);

		this.description = React.createRef();
		this.otherInformation = React.createRef();

		this.state = {
			selected: false,
			overflow: false,
			expanded: false
		}
		this.toggleSelected = this.toggleSelected.bind(this);
		this.handleExpand = this.handleExpand.bind(this);
	}

	//determine if position already selected on servers
	componentDidMount() {
		if (this.props.appliedPositions.includes(this.props.position._id)) {
				this.setState({
				selected: true
			}, function() {this.props.updateCounter(this.props.counter + 1)});
			//;
		}
		if (this.description.current.offsetHeight + this.otherInformation.current.offsetHeight > 160) {
			this.setState({
				overflow: true
			})
		}
	};

	componentDidUpdate() {
		// if (this.props.appliedPositions.includes(this.props.position._id)) {
		// 	this.props.updateCounter(this.props.counter + 1);
		// }
		// if (this.state.selected)
		// const updatedSelectedPositions = [...this.props.selectedPositions];
		// 	updatedSelectedPositions.push(this.props.position._id);
		// 	console.log(updatedSelectedPositions);
		// 	this.props.updateSelectedPositions(updatedSelectedPositions);
	}

	toggleSelected() {
		this.setState({
			selected: !this.state.selected
		})
		const updatedSelectedPositions = [...this.props.selectedPositions];
		if (this.props.selectedPositions.indexOf(this.props.position._id) !== -1) {	
			updatedSelectedPositions.splice([this.props.selectedPositions.indexOf(this.props.position._id)], 1);
		} else {
			updatedSelectedPositions.push(this.props.position._id)
		}
		this.props.updateSelectedPositions(updatedSelectedPositions);
	}

	// //determine if height of descriptions exceeds 160px
	// const description = useRef(null);
	// const otherInformation = useRef(null);

	handleExpand() {
		if (!this.state.overflow) return;
		this.setState({
			expanded: !this.state.expanded
		})
	};

	render () {
		const {position, selectedPositions, updateSelectedPositions, appliedPositions} = this.props;
		return (
			<div className={`position-container ${this.state.expanded ? 'expanded' : ''}`}>	
				<div className='position-body'>
					<div className={`${this.state.overflow ? 'overflow' : ''} ${this.state.expanded ? 'expanded' : ''} position-left`} onClick={this.handleExpand}>
						<div>
							<h2>{position.companyName}</h2>
							<h3>{position.discipline}</h3>
							<p>{`${position.city}, ${position.state}`}</p>
						</div>
						<div className={`${this.state.expanded ? 'expanded' : ''} position-info`}>
							<p ref={this.description}>{position.description}</p>
							<p ref={this.otherInformation}>{position.otherInformation}</p>
						</div>
						{ this.state.overflow
							? <h6>{this.state.expanded ? 'Less...' : 'More...'}</h6>
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
							<button onClick={this.toggleSelected} className={`${this.state.selected ? 'applied' : null}`}>Apply
								{
									this.state.selected
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
	};
}

function mapStateToProps(state) {
	return {
		appliedPositions: state.application.applicationStatus.application.positions
	}
};

export default connect(mapStateToProps)(PositionViewer);



