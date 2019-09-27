import React from 'react';
import './App.css';
import { Flex,SearchBar,Icon } from 'antd-mobile';
import Content from './content';

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

const InterMediate = () => (
    <div className="container">
        <div className="container-top">
            化验结果
        </div>
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
            {data.map(item =>
                <Content key={item.id} data={item} />
            )}
        </div>

    </div>
);

class App extends React.Component {
  constructor() {
      super();
      this.state = {
          value: ''
      }
  }
  render() {
      return (
          <InterMediate/>
      )
  }
}

export default App;
