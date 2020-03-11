import React, { Component } from 'react'
import Item from '../item/item'

export default class List extends Component {
	render() {
		const {isFirst,isLoading,users,error} = this.props
		let content
		if(isFirst) content = <h2>欢迎使用</h2>
		else if(isLoading) content = <h2>Loading....</h2>
		else if(error) content = <h2>{error}</h2>
		else {
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
