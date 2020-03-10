import React, { Component } from 'react'
import Search from './components/search/search'
import List from './components/list/list'

export default class App extends Component {
	state = {
		isFirst:true,
		isLoading:false,
		error:'',
		users:[]
	}

	updateAppState = (stateObj)=>{
		this.setState(stateObj)
	}

	render() {
		return (
			<div className="container">
				<Search updateAppState={this.updateAppState}/>
				<List {...this.state}/>
			</div>
		)
	}
}
