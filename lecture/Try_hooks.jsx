// import React from 'react';
import React, { PureComponent, memo } from 'react';

class Try extends PureComponent {
    constructor(props) {
        super(props);
        // 다른 동작
        const filtered = this.props.filter(() => {
            
        });

        this.state = {
            result: this.props.result,
            try: this.props.try,
        };
    }

    render() {
        console.log('렌더링');
        const { tryInfo } = this.props;
        return (
            <li>
                <div>{tryInfo.try}</div>
                <div>{tryInfo.result}</div>
            </li>
        );
    }
}

// const Try = ({ tryInfo }) => {
//     return (
//         // console.log('렌더링'),

//         <li>
//             <div>{tryInfo.try}</div>
//             <div>{tryInfo.result}</div>
//         </li>
//     )
// };

export default Try;