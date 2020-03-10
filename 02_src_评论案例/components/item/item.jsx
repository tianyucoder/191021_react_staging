import React, { Component } from 'react'
import './items.css'

export default class Item extends Component {

	delete = (id)=>{
		//1.询问用户是否删除
		if(window.confirm('确定删除吗？')){
			//2.执行删除（更新状态）
			this.props.deleteComment(id)
		}
	}

	render() {
		const {id,name,content} = this.props
		return (
			<li className="list-group-item">
				<div className="handle">
					<a onClick={()=>{this.delete(id)}} href="#1">删除</a>
				</div>
				<p className="user"><span >{name}</span><span>说:</span></p>
				<p className="centence">{content}</p>
			</li>
		)
	}
}
