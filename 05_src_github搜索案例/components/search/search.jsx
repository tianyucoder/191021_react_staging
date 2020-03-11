import React, {Component} from 'react'
import axios from 'axios'

export default class Search extends Component {

	search = ()=>{
		const {updateAppState} = this.props
		//1.获取用户的输入节点
		const {keyWordNode} = this.refs
		//2.发送请求前更改状态
		updateAppState({isFirst:false,isLoading:true})
		//3.发送请求
		const url = `https://api.github.com/search/users?q=${keyWordNode.value}`
		axios.get(url).then(
			response => {
				//维护到状态中
				updateAppState({isLoading:false,users:response.data.items})
			},
			err => {
				//维护到状态中
				updateAppState({isLoading:false,error:err.message})
			}
		)
	}


	render() {
		return (
			<section className="jumbotron">
				<h3 className="jumbotron-heading">Search Github Users</h3>
				<div>
					<input ref="keyWordNode" type="text" placeholder="enter the name you search"/>&nbsp;
					<button onClick={this.search}>Search</button>
				</div>
			</section>
		)
	}
}
