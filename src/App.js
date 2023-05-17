import {  useState } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import { UserContext } from './Context/User';

const router = createBrowserRouter([
	{
		path: "/",
		element: <Home />,
	},
	{
		path: "/about",
		element: <About />,
	},
	{
		path: "/contact",
		element: <Contact />,
	}
]);

function App() {

	const [userInfo, setUserInfo] = useState({
		name: "",
		email: "",
		query: ""
	});
	return (
		
		<UserContext.Provider value={{
			info: userInfo,
			setUserInfo
		}}>
		<RouterProvider router={router} />
		</UserContext.Provider>
	);
}

export default App;
