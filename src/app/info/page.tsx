'use client';
import { useContext } from 'react';
import { AppContext } from '../../AppContext';

function Info() {
	const { siteTitle, jobs } = useContext(AppContext);

	return (
		<div className="page pageInfo">
			<div>This is the info page for the site "{siteTitle}".</div>
			<div className="content">
				<div className="jobs">
					<h2>{jobs.length} Jobs</h2>
					{jobs.map((job) => {
						return (
							<div className="job" key={job.id}>
								<div className="title">{job.title}</div>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
}

export default Info;
