'use client';
import { useContext } from 'react';
import { AppContext } from '../AppContext';

function Welcome() {
	const { siteTitle, jobs } = useContext(AppContext);
	return (
		<>
			<p>This is the welcome page for the site "{siteTitle}".</p>
			{jobs.length > 0 && (
				<p>
					This site has{' '}
					<span className="text-yellow-400">{jobs.length}</span> jobs.
				</p>
			)}
		</>
	);
}

export default Welcome;
