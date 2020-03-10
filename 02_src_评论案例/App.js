import React,{Component} from 'react'
import Add from './components/add/add'
import List from './components/list/list'

export default class App extends Component{

	state = {
		comments:[
			{id:'001',name:'张三',content:'好难啊，不想爱了'},
		]
	}

	addComment = (commentObj)=>{
		//1.获取原状态
		let {comments} = this.state
		//2.追加数据
		comments.unshift(commentObj)
		//3.更新状态
		this.setState({comments})
	}

	deleteComment = (id)=>{
		//去评论的数组中找到与传入id相同的那个评论，删除他。
		let {comments} = this.state
		comments = comments.filter((commentObj)=>{
			return commentObj.id !== id
		})
		this.setState({comments})
	}

	render(){
		return (
			<div>
				<header className="site-header jumbotron">
					<div className="container">
						<div className="row">
							<div className="col-xs-12">
								<h1>请发表对React的评论</h1>
							</div>
						</div>
					</div>
				</header>
				<div className="container">
					<Add addComment={this.addComment}/>
					<List comments={this.state.comments} deleteComment={this.deleteComment}/>
				</div>
			</div>
		)
	}
}
