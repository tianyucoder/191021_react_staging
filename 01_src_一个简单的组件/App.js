import React,{Component} from 'react'
import Login from './components/login/login'

export default class App extends Component{
	render(){
		return (
			<div>
				<h2>我是App组件</h2>
				<Login/>
			</div>
		)
	}
}
