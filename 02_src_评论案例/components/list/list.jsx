import React, { Component } from 'react'
import Item from '../item/item'
import './list.css'

export default class List extends Component {
	render() {
		let {comments,deleteComment} = this.props
		return (
			<div className="col-md-8">
				<h3 className="reply">评论回复：</h3>
				<h2 style={{display:comments.length ? 'none':'block'}}>暂无评论，点击左侧添加评论！！！</h2>
				<ul className="list-group">
					{
						comments.map((commentObj)=>{
							return <Item key={commentObj.id} {...commentObj} deleteComment={deleteComment}/>
							//return <Item key={commentObj.id} name={commentObj.name} content={commentObj.content}/>
						})
					}
				</ul>
			</div>
		)
	}
}
