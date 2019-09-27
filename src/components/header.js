import React from 'react';
import {withRouter} from 'react-router-dom';
import {Flex, Icon} from "antd-mobile";

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.clickReturn = this.clickReturn.bind(this);
    }
    clickReturn () {
        this.props.history.push({pathname:'/'})
    }
    render() {
        return (
            <div className="container-top">
                <Flex justify="start" onClick={this.props.flag ? this.clickReturn : null}>
                    <Icon type='left' size='md'/>
                    <div>返回</div>
                    <div className='container-top-flex'>{this.props.name}</div>
                </Flex>
            </div>
        )
    }
}

export default withRouter(Header);
