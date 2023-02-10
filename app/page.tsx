'use client';
import { useContext } from 'react';
import { AppContext } from '../components/AppContext';

function Welcome() {
	console.log('context', useContext(AppContext));
	const { siteTitle } = useContext(AppContext);
	return <div>This is the welcome page for the site "{siteTitle}".</div>;
}

export default Welcome;
