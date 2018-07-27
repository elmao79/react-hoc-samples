
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

const Button = ({ children, onClick }) => (
    <button onClick={onClick}>
        {children}
    </button>
);

class Demo extends Component {
    render() {
        return (
            <Button onClick={e => alert('clicked')}>
                <span>Click me!</span>
            </Button>
        )
    }
}

const render = _ => {
    ReactDOM.render(
        <Demo />,
        document.getElementById('app')
    )
};
render();
