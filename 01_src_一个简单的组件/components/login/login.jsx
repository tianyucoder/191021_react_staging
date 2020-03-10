import React from 'react'
import './login.css'

export default class Login extends React.Component{
	render(){
		return (
			<form action="">
				<span className="title">用户名：</span><input type="text"/>
				<span className="title">密码：</span><input type="password"/>
				<button>提交</button>
			</form>
		)
	}
}