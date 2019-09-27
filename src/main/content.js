import React from 'react';
import {Link} from 'react-router-dom'
import {Icon,Flex} from "antd-mobile";

class Content extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <Link to={{pathname:'/detail/' + this.props.data.id}}>
                <div className='content'>
                    <div className='content-serialNum'>{`编号：${this.props.data.serialNum}`}</div>
                    <Flex justify="between" className='content-person'>
                        <div><i className='iconfont icon-login_user content-icon'></i>{`送检人：${this.props.data.person}`}</div>
                        <div></div>
                        <div><Icon type='right'/></div>
                    </Flex>
                    <div className='content-person'><i className='iconfont icon-date content-icon'></i>{`送检日期：${this.props.data.date}`}</div>
                </div>
            </Link>
        );
    }
}

export default Content;
