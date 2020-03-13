import React, { Component } from 'react'
import {Button,message} from 'antd'

export default class App extends Component {

	demo = ()=>{
		//alert('点击我了')
		message.success('点击我了',1)
	}

	render() {
		return (
			<div>
				App
				<Button onClick={this.demo} type="primary">点我</Button>
			</div>
		)
	}
}
