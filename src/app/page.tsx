'use client';
import { useContext } from 'react';
import { AppContext } from '../AppContext';

function Welcome() {
	const { siteTitle } = useContext(AppContext);
	return <div>This is the welcome page for the site "{siteTitle}".</div>;
}

export default Welcome;
