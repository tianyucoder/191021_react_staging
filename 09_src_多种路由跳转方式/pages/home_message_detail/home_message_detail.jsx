import React, { Component } from 'react'

export default class HomeMessageDetail extends Component {

	state = {
		msgdetail:[
			{id:'001',title:'message1',content:'加油！武汉'},
			{id:'002',title:'message2',content:'加油！中国'},
			{id:'003',title:'message3',content:'加油！尚硅谷'},
			{id:'004',title:'message4',content:'加油！最棒的自己'},
		]
	}

	render() {
		//console.log(this.props.match.params.id);
		const {id} = this.props.match.params
		const result = this.state.msgdetail.find((msgDeatilObj)=>{
			return msgDeatilObj.id === id
		})
		return (
			<ul>
				<li>ID:{result.id}</li>
				<li>TITLE:{result.title}</li>
				<li>CONTENT:{result.content}</li>
			</ul>
		)
	}
}
