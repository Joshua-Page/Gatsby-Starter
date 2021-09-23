import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';
import '../styles/global.scss';

//TODO: add favicon

const IndexPage = () => {
	return (
		<Fragment>
			<Helmet>
				<meta charSet='utf-8' />
				<title></title>
				{/* TODO: Write meta description */}
				<meta name='description' content='' />
				{/* TODO: Write title */}
				<html lang='en' />
			</Helmet>

			<header></header>
			<main>
				<section></section>
			</main>
			<footer>
				{/* TODO: Copyright info in footer */}
				{/* <small>Copyright</small> */}
			</footer>
		</Fragment>
	);
};

export default IndexPage;
