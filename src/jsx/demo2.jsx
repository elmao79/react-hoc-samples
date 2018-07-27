
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

const withStateTimes = WrappedComponent => class extends Component {
    constructor(props) {
        super(props);

        this.state = {
            times: 0
        };
    }

    setTimes(times) {
        this.setState({ times });
    }

    render() {
        const { times, children } = this.state;
        const { setTimes } = this;
        return (
            <WrappedComponent times={times} setTimes={setTimes} { ...this.props }>
                {children}
                <small>({times} times clicked)</small>
            </WrappedComponent>
        );
    }
};

const withHandlerClick = WrappedComponent => props => {
    let { times, setTimes, children, onClick } = props;

    const handleClick = e => {
        alert('sdffd');
        e.preventDefault();
        setTimes(++times);
        onClick && onClick();
    };

    return (
        <WrappedComponent times={times} onClick={handleClick} { ...props }>
            {children}
        </WrappedComponent>
    );
};

const Button = ({ children, onClick }) => (
    <button onClick={onClick}>
        {children}
    </button>
);

const ButtonWithTrack = withStateTimes(withHandlerClick(Button));

class Demo extends Component {
    render() {
        return (
            <ButtonWithTrack onClick={e => alert('clicked!')}>
                <span>Click me!</span>
            </ButtonWithTrack>
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
