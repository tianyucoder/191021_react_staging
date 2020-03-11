import React,{Component} from 'react'
import Search from './components/search/search'
import List from './components/list/list'

export default class App extends Component {
	render() {
		return (
			<div id="app">
				<div className="container">
					<Search/>
					<List/>
				</div>
			</div>
		)
	}
}
