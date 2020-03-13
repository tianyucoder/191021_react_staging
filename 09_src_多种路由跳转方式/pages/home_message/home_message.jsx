import React, { Component } from 'react'
import {Link,Route} from 'react-router-dom'
import HomeMessageDetail from '../home_message_detail/home_message_detail'

export default class HomeMessage extends Component {

	state = {
		messages:[]
	}

	componentDidMount(){
		this.timer = setTimeout(()=>{
			this.setState({
				messages:[
					{id:'001',name:'消息1'},
					{id:'002',name:'消息2'},
					{id:'003',name:'消息3'},
					{id:'004',name:'消息4'},
				]
			})
		},1000)
	}

	componentWillUnmount(){
		clearTimeout(this.timer)
	}

	pushShow = (id)=>{
		this.props.history.push(`/home/message/detail/${id}`)
	}

	replaceShow = (id)=>{
		this.props.history.replace(`/home/message/detail/${id}`)
	}

	back = ()=>{
		this.props.history.goBack()
	}

	forward = ()=>{
		this.props.history.goForward()
	}

	render() {
		return (
			<div>
				<ul>
					{
						this.state.messages.map((msgObj)=>{
							return (
								<li key={msgObj.id}>
									<Link to={`/home/message/detail/${msgObj.id}`}>{msgObj.name}</Link>&nbsp;&nbsp;
									<button onClick={()=>{this.pushShow(msgObj.id)}}>push查看</button>&nbsp;
									<button onClick={()=>{this.replaceShow(msgObj.id)}}>replace查看</button>
								</li>
							)
						})
					}
				</ul>
				<button onClick={this.back}>后退</button>&nbsp;
				<button onClick={this.forward}>前进</button>
				<hr/>
				<Route path="/home/message/detail/:id" component={HomeMessageDetail}/>
			</div>
		)
	}
}
