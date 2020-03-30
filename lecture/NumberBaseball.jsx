import React, { Component } from 'react';

import Try from './Try';

function getNumbers() { // 숫자 네 개를 겹치지 않고 랜덤하게 뽑는 함수

}
class NumberBaseball extends Component {
    state = {
        result: '',
        value: '',
        answer: getNumbers(),
        tries: [],
    };

    onSubmitForm = () => {

    };

    onChangeInput = () => {

    };

    person = [
        { name: '김혜림', face: '예쁘다' }, 
        { name: '이혜림', face: '귀엽다' }, 
        { name: '조하진', face: '멋지다' }, 
        { name: '이혜림', face: '예쁘다' }, 
        { name: '감유리', face: '폭력적' },
    ];

    render() {
        return (
            <>
                <h1>{this.state.result}</h1>
                <form onSubmit={this.onSubmitForm}>
                    <input maxLength={4} value={this.state.value} onChange={this.onChangeInput} />
                </form>
                <div>시도: {this.state.tries.length}</div>
                <ul>
                    {this.person.map((v, i) => {
                        return (
                            <Try key={v.name + v.face} value={v} index={i}/>
                        );
                    })}
                </ul>
            </>
        );
    }
}

export default NumberBaseball;
