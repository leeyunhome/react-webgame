// import React from 'react';
import React, { PureComponent, memo } from 'react';

// class Try extends PureComponent {
//     render() {
//         console.log('렌더링');
//         const { tryInfo } = this.props;
//         return (
//             <li>
//                 <div>{tryInfo.try}</div>
//                 <div>{tryInfo.result}</div>
//             </li>
//         );
//     }
// }

const Try = ({ tryInfo }) => {
    return (
        // console.log('렌더링'),

        <li>
            <div>{tryInfo.try}</div>
            <div>{tryInfo.result}</div>
        </li>
    )
};

export default Try;