
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { compose } from 'recompose';

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
        const { times } = this.state;
        const { children } = this.props;
        const { setTimes } = this;
        return (
            <WrappedComponent times={times} setTimes={setTimes.bind(this)} { ...this.props }>
                {children}
                <small>({times} times clicked)</small>
            </WrappedComponent>
        );
    }
};

const withHandlerClick = WrappedComponent => props => {
    let { times, setTimes, children, onClick, ...otherProps } = props;

    const handleClick = e => {
        e.preventDefault();
        setTimes(++times);
        onClick && onClick();
    };

    return (
        <WrappedComponent times={times} onClick={handleClick} {...otherProps}>
            {children}
        </WrappedComponent>
    );
};

const Button = ({ children, onClick }) => (
    <button onClick={onClick}>
        {children}
    </button>
);

const ButtonWithTrack = compose(
    withStateTimes,
    withHandlerClick
)(Button);

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
