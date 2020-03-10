import React, { Component } from 'react'
import Item from '../item/item'

export default class List extends Component {
	render() {
		const {isFirst,isLoading,error,users} = this.props
		let content
		if(isFirst) content = <h2>输入关键字，然后可以搜索</h2>
		else if(isLoading) content = <h2>Loading....</h2>
		else if(error) content = <h2>{error}</h2>
		else {
			console.log('@@@@');
			content = users.map((userObj)=>{
				return <Item key={userObj.login} {...userObj}/>
			})
		}
		return (
			<div className="row">
				{content}
			</div>
		)
	}
}
