import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../logo.svg';
import Avatar from '../components/avatar.js';
import io from 'socket.io-client';



class Header extends Component
{
	constructor(props)
	{
		super(props);

		this.state =
		{};

		var socket = io.connect('http://localhost:3000/');
		socket.on('connect', function()
		{
			console.log('socket connected')
		});
	}

	render()
	{
		return (
			<header id="header">
				<div>
					<div>
		           		<Link to='/'><img src={logo} className="app-logo" alt="logo" /> </Link>
		           	</div>

					<div id='top_search'>
						<input type="text" placeholder="Search" />
					</div>

					<div id='top_notify' className='header_hover'>
						<span></span>
						<span></span>
		           	</div>

					<div id='top_profile' className='right header_hover menu'>
						<span>kacoulib</span>
						<Avatar />
						<span className='top_profile_arrow'></span>
						<ul className='sub_menu blue_btn'>
							<Link to='/logout'>Logout</Link>
						</ul>
					</div>
				</div>
	        </header>
		);
	}
}

export default Header;
