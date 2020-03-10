import React, { Component } from 'react'
import axios from 'axios'

export default class Search extends Component {

	search = async()=>{
		//1.获取用户输入的关键字
		const {keyWordNode} = this.refs
		const {updateAppState} = this.props
		//2.发送请求
		const url = `https://api.github.com/search/users?q=${keyWordNode.value}`
		//发请求之前展示loading，不再展示第一次的欢迎文字
		updateAppState({
			isFirst:false,
			isLoading:true
		})
		try {
			let response = await axios.get(url)
			const {items} = response.data
		  updateAppState({
				isFirst:false,
				isLoading:false,
				users:items
			})
		} catch (error) {
			updateAppState({
				isFirst:false,
				isLoading:false,
				error:error.message
			})
		}
	}

	render() {
		return (
			<section className="jumbotron">
				<h3 className="jumbotron-heading">Search Github Users</h3>
				<div>
					<input ref="keyWordNode" type="text" placeholder="输入用户名，点击搜索"/>&nbsp;
					<button onClick={this.search}>Search</button>
				</div>
			</section>
		)
	}
}
