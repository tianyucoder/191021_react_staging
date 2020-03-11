import React, { Component } from 'react'
import {NavLink,Route,Switch,Redirect} from 'react-router-dom'
import HomeMessage from '../home_message/home_message'
import HomeNews from '../home_news/home_news'

export default class Home extends Component {
	render() {
		return (
				<div className="panel-body">
					<div>
						<h2>Home组件内容</h2>
						<div>
							<ul className="nav nav-tabs">
								<li>
									<NavLink activeClassName="demo" className="list-group-item" to="/home/news">News</NavLink>
								</li>
								<li>
									<NavLink activeClassName="demo" className="list-group-item" to="/home/message" >Message</NavLink>
								</li>
							</ul>
							<Switch>
								<Route path="/home/news" component={HomeNews}/>
								<Route path="/home/message" component={HomeMessage}/>
								<Redirect to="/home/news"/>
							</Switch>
						</div>
					</div>
				</div>
		)
	}
}
