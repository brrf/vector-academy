import React from 'react';

export default function RevisionsView({revisions}) {
	return (
		<div className='requested-revision-container'>
			<h3>Requested Revisions</h3>
			{
				revisions.map(revision => {
					return (
						<div key={revision.label}>
							<h4>{revision.label}</h4>
							<div>{revision.message}</div>
						</div>
					)
				})
			}
		</div>
	)
}