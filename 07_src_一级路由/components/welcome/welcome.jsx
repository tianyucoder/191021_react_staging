import React, { Component } from 'react'

export default class Welcome extends Component {
	render() {
		console.log(this.props);
		return (
			<div>
				我是WelCome组件，我是一般组件。
			</div>
		)
	}
}
