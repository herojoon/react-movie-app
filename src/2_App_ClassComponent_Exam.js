import React from 'react';

class App extends React.Component {  // 클래스형 컴포넌스를 사용하면 미리 정의된 함수 사용 가능. ex) state, render()
    // React.Component 클래스의 기능을 추가한 App 클래스

    constructor(props) {  // react lifecycle first step.
        super(props);
        console.log('##constructor')
    }

    componentDidMount() {
        console.log("##componentDidMount")
    }

    // 화면이 render되면 실행됨.
    // ex) setState() -> render() -> componentDidUpdate()
    componentDidUpdate() {
        console.log("##componentDidUpdate")
    }

    // 컴포넌트가 화면에서 떠날 때 실행됨.
    // componentWillUnmount()함수는 보통 컴포넌트에 적용한 이벤트 리스너를 제거할 때 많이 사용함.
    componentWillUnmount() {
        console.log("##componentWillUnmount")
    }

    state = {
        count: 0,
    };

    add = () => {
        console.log('##add')
        // this.state.count += 1
        //this.setState({count: this.state.count + 1});
        this.setState(current => ({
            count: current.count + 1
        }));
    };

    minus = () => {
        console.log('##minus')
        // this.state.count -= 1  // state값은 직접적으로 수정 불가. setState()함수를 이용해서 수정해야함.
        // setState()함수를 이용해서 state값이 변경되면 render()함수를 동작시켜 화면 업데이트.
        //this.setState({count: this.state.count - 1});  // 계산코드를 직접 작성하여 파람으로 넘기면 성능문제 발생 위험.
        this.setState(current => ({  // setState()함수의 인자로 함수를 넘기면 성능문제가 없이 사용 가능.
            count: current.count - 1
        }));
    };

    render() {
        console.log('##render')
        return (
            <div>
                <h1>The number is: {this.state.count}</h1>
                <button onClick={this.add}>Add</button>
                <button onClick={this.minus}>Minus</button>
            </div>
        );
    }
}

export default App;
