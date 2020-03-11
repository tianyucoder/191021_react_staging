import React, { Component } from 'react'

export default class About extends Component {

	componentWillUnmount(){
		//console.log('About组件被卸载了');
	}

	render() {
		console.log(this.props);
		return <h3>我是About的内容</h3>
	}
}
