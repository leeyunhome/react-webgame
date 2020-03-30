import React, { Component } from 'react';

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

    render() {
        return (
            <>
                <h1>{this.state.result}</h1>
                <form onSubmit={this.onSubmitForm}>
                    <input maxLength={4} value={this.state.value} onChange={this.onChangeInput} />
                </form>
                <div>시도: {this.state.tries.length}</div>
                <ul>
                    {[
                        { name: '김혜림', face: '예쁘다' }, 
                        { name: '이혜림', face: '귀엽다' }, 
                        { name: '조하진', face: '멋지다' }, 
                        { name: '이혜림', face: '예쁘다' }, 
                        { name: '감유리', face: '폭력적' },
                    ].map((v, i) => {
                        return (
                            <li key={v.name + v.face}><b>{v['name']}</b> - {v['face']}</li>
                        );
                    })}
                </ul>
            </>
        );
    }
}

export default NumberBaseball;
