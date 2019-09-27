import React, { Component } from 'react'
import {Flex, Icon, NavBar} from "antd-mobile";
import Record from "../components/record";

const result = [
    {id: 1,name:'Na',percent:'20%'},
    {id: 2,name:'Ni',percent:'20%'},
    {id: 3,name:'Mn',percent:'20%'},
    {id: 4,name:'Co',percent:'20%'},
    {id: 5,name:'Cd',percent:'20%'},
]
export default class Detail extends Component {
    componentDidMount() {
        let path = window.location.pathname;
        let index = path.lastIndexOf('/');
        let id = path.slice(index+1);
        console.log('id=',id)
    }

    constructor(props) {
        super(props);
        this.clickReturn = this.clickReturn.bind(this);
    }
    clickReturn () {
        this.props.history.push({pathname:'/'})
    }
    render() {
        return (
            <div className="detail">
                <NavBar
                    mode="dark"
                    className='container-top'
                    icon={<Icon type="left" />}
                    leftContent="返回"
                    onLeftClick={this.clickReturn}
                >化验结果</NavBar>

                <div className='detail-middle'>
                    <Flex justify='between'>
                        <div>
                            <div className='detail-text'>镍钴锰混合溶液净前/后液样品</div>
                            <div>19-M-09-133-5503-E4-SJ-QA-806</div>
                        </div>
                        <div className='detail-circle'>合格</div>
                    </Flex>
                </div>

                <div className='detail-title'><span></span>检测项目及结果</div>
                <div className='detail-result'>
                    {
                        result.map((e,index) =>
                            <Record e={e} index={index} key={e.id}/>
                        )
                    }
                </div>
                <div className='detail-title'><span></span>任务动态</div>
                <div className='detail-task-dynamics'></div>
            </div>
        )
    }
}
