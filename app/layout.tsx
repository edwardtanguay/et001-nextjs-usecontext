import Header from '../components/Header';
import '../styles/globals.css';
import '../styles/site.scss';

export default function RootLayout({
	children
}: {
	children: React.ReactNode;
}) {
	return (
		<>
			<html>
				<head />
        <body>
         <Header/> 
          {children}</body>
			</html>
		</>
	);
}
