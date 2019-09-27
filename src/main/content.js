import React from 'react';

class Content extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            //<Link to={{pathname:'/shop/' + data.id}}>
                <div className='content'>
                    <div className='content-serialNum'>{`编号：${this.props.data.serialNum}`}</div>
                    <div className='content-person'>
                        <span>{`送检人：${this.props.data.person}`}</span>
                    </div>
                    <div className='content-date'>{`送检日期：${this.props.data.date}`}</div>
                </div>
            //</Link>
        );
    }
}

export default Content;
