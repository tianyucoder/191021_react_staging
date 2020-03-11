import React,{Component} from 'react'
import Search from './components/search/search'
import List from './components/list/list'

export default class App extends Component {

	state = {
		isFirst:true,
		isLoading:false,//请求前要true，请求得到响应后要false
		users:[],//一些用户
		error:''//错误信息
	}

	updateAppState = (stateObj)=>{
		this.setState(stateObj)
	}

	render() {
		return (
			<div id="app">
				<div className="container">
					<Search updateAppState={this.updateAppState}/>
					<List {...this.state}/>
				</div>
			</div>
		)
	}
}
