import React, { Component } from 'react'
import axios from 'axios'

export default class App extends Component {

	state = {
		isLoading:true, //标识是否处于加载中，由于我们一上来就请求数据，所以此处为true
		repoInfo:{name:'',url:''},//仓库信息
		errMsg:'',//错误信息
		keyWord:'v'//搜索的关键词
	}

	async componentDidMount(){
		const url = `https://api.github.com/search/repositories?q=${this.state.keyWord}&sort=stars`
		try {
			let response = await axios.get(url)
			const {name,html_url} = response.data.items[0]
			this.setState({isLoading:false,repoInfo:{name,url:html_url}})
		} catch (error) {
			this.setState({isLoading:false,errMsg:error.message})
		}
		/* axios.get(url).then(
			response => {
				//console.log(response.data.items[0]);
				const {name,html_url} = response.data.items[0]
				this.setState({isLoading:false,repoInfo:{name,url:html_url}})
			},
			error => {
				this.setState({isLoading:false,errMsg:error.message})
			}
		) */
	}
	
	render() {
		const {isLoading,errMsg,repoInfo,keyWord} = this.state
		let content
		if(isLoading) content = <h2>Loading.....</h2>
		else if(errMsg)  content = <h2>{errMsg}</h2>
		else  content = <h2>github上以{keyWord}字母开头的仓库中，点赞量最多的是<a href={repoInfo.url}>{repoInfo.name}</a></h2>
		return content
	}
}
