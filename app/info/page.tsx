'use client';
import { useContext } from 'react';
import { AppContext } from '../../components/AppContext';
import Head from 'next/head';

function Info() {
	const { siteTitle } = useContext(AppContext);

	return <div>This is the info page for the site "{siteTitle}".</div>;
}

export default Info;
