import React from 'react';
import {Flex} from "antd-mobile";

class Record extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Flex justify='between' className='detail-result-record' >
                <div className='detail-result-record-index'>{this.props.index+1}</div>
                <div>{this.props.e.name}</div>
                <div>{this.props.e.percent}</div>
            </Flex>
        )
    }
}

export default Record;
