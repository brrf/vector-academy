import React, {useState} from 'react';
import {Player, ControlBar, ReplayControl, ForwardControl, PlaybackRateMenuButton} from 'video-react';
import "../../node_modules/video-react/dist/video-react.css";
import '../css/courses.css';



export default function Courses () {

	//const rate, changeRate = useState(1);
	return (
		<div className='video-player-container'>
			<Player
		      playsInline
		      src="https://intro-to-solidworks-video.s3.us-east-2.amazonaws.com/test-capture.mov"
		      fluid={true}
		    >
		    	<ControlBar autoHide={false}>
			        <ReplayControl seconds={30} order={2.1}/>
			        <ForwardControl seconds={30} order={2.2} />
			        <PlaybackRateMenuButton rates={[2, 1.5, 1.25, 1, 0.75]} order={7} />
			    </ControlBar>
			</Player>
	     </div>
	)
}