import React, { Component } from 'react'
import { v4 as uuidv4 } from 'uuid';

export default class Add extends Component {

	add = ()=>{
		//1.获取用户的输入节点
		const {nameNode,contentNode} = this.refs
		//2.校验数据(名字和内容均不能为空)
		if(!nameNode.value.trim() || !contentNode.value.trim()){
			alert('名字和内容均不能为空')
			return
		}
		//3.更新App的状态
		this.props.addComment({id:uuidv4(),name:nameNode.value,content:contentNode.value})
		//4.清空输入
		nameNode.value = ''
		contentNode.value = ''
	}

	render() {
		return (
			<div className="col-md-4">
				<form className="form-horizontal">
					<div className="form-group">
						<label>用户名</label>
						<input ref="nameNode" type="text" className="form-control" placeholder="用户名"/>
					</div>
					<div className="form-group">
						<label>评论内容</label>
						<textarea ref="contentNode" className="form-control" rows="6" placeholder="评论内容"></textarea>
					</div>
					<div className="form-group">
						<div className="col-sm-offset-2 col-sm-10">
							<button onClick={this.add} type="button" className="btn btn-default pull-right">提交</button>
						</div>
					</div>
				</form>
			</div>
		)
	}
}
