import React,{Component} from 'react'
import Add from './components/add/add'
import List from './components/list/list'

export default class App extends Component{

	state = {
		comments:[
			{id:'001',name:'张三',content:'好难啊，不想爱了'},
			{id:'002',name:'李四',content:'我觉得还好啊，很简单'},
			{id:'003',name:'老刘',content:'还是html好玩'}
		]
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
					<Add/>
					<List comments={this.state.comments}/>
				</div>
			</div>
		)
	}
}
