import React from 'react';
import './App.css';
import axios from 'axios';
import {NavBar,SearchBar,PullToRefresh } from 'antd-mobile';
import Content from './content';
import {withRouter} from 'react-router-dom'

const data = [
    {id: 1,serialNum: '19-M-09-133-5503-E4-SJ-QA-806',person: '杨彦文',date: '2019-09-10'},
    {id: 2,serialNum: '19-M-09-133-5503-E4-SJ-QA-806',person: '杨彦文',date: '2019-09-10'},
    {id: 3,serialNum: '19-M-09-133-5503-E4-SJ-QA-806',person: '杨彦文',date: '2019-09-10'},
    {id: 4,serialNum: '19-M-09-133-5503-E4-SJ-QA-806',person: '杨彦文',date: '2019-09-10'},
    {id: 5,serialNum: '19-M-09-133-5503-E4-SJ-QA-806',person: '杨彦文',date: '2019-09-10'},
    {id: 6,serialNum: '19-M-09-133-5503-E4-SJ-QA-806',person: '杨彦文',date: '2019-09-10'},
    {id: 7,serialNum: '19-M-09-133-5503-E4-SJ-QA-806',person: '杨彦文',date: '2019-09-10'},
    {id: 8,serialNum: '19-M-09-133-5503-E4-SJ-QA-806',person: '杨彦文',date: '2019-09-10'}
]

const url = `http://192.168.5.231:8080/jc/common/testItem`;
class App extends React.Component {
    componentDidMount() {
        this.getData()
    }
    constructor(props) {
        super(props);
        this.state = {
          value: ''
        }
        this.getData = this.getData.bind(this);
        this.contentClick = this.contentClick.bind(this);
    }
    contentClick () {
        this.props.history.push({pathname:'/detail'})
    }
    getData() {
        axios.get(url).then((data) => {
            console.log(data.data.data)
        })
    }
  render() {
      return (
          <div className="container">
              <NavBar
                  mode="dark"
                  className='container-top'
              >化验结果</NavBar>
              <div className='container-search'>
                  <SearchBar
                      placeholder="编号搜索"
                      onSubmit={value => console.log(value, 'onSubmit')}
                      onClear={value => console.log(value, 'onClear')}
                      onFocus={() => console.log('onFocus')}
                      onBlur={() => console.log('onBlur')}
                      onCancel={() => console.log('onCancel')}
                      showCancelButton
                  />
              </div>
              <div className="container-content">
                  <PullToRefresh>
                  {data.map(item =>
                      <Content key={item.id} data={item} onClick={this.contentClick}/>
                  )}
                  </PullToRefresh>
              </div>
          </div>
      )
  }
}

export default withRouter(App);
