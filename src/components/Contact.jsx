import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom';
import { UserContext } from '../Context/User';
import "../styles/Contact.css";
import Modal from './Modal';

function Contact() {

	const [formData, setFormData] = useState({
		name: "",
		email: "",
		query: ""
	});
	const [modalState, setModalState] = useState(false);

	const user = useContext(UserContext);

	const handleSubmit = (e) => {
		setModalState(true);
		e.preventDefault();
		user.setUserInfo(formData);
	}

	return (
		<>
			<div className="contact_container center_flex_col">
		    <div className="links center_flex">
				<span className="link_container">
				<Link to="/about">About</Link>
				</span>
				<span className="link_container">
				<Link to="/">Home</Link>
				</span>
			</div>
			<form onSubmit={handleSubmit} onChange={() => console.log(3)} className="center_flex_col">
				<div className="form_input">
					<label htmlFor="name">Name</label>
					<input className="input_value"  type="text" id='name' onChange={(e) => {
						setFormData({
							...formData,
							name: e.target.value
						})
					}} required={true}/>
				</div>
				<div className="form_input">
					<label htmlFor="name">Email</label>
					<input className="input_value"  type="email" id='email' onChange={(e) => {
						setFormData({
							...formData,
							email: e.target.value
						})
					}} required={true}/>
				</div>
				<div className="form_input">
					<label htmlFor="name">Query</label>
					<input className="input_value"  type="text" id='query' onChange={(e) => {
						setFormData({
							...formData,
							query: e.target.value
						})
					}} required={true}/>
				</div>
				<button className="submit_button" type="submit">Submit</button>
			</form>
		</div>
		<Modal modalState={modalState} setModalState={setModalState} />
		</>

	)
}

export default Contact