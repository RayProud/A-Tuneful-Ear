import React, { Component, useState, useEffect } from 'react';

function Profile(props) {
    const [
        profileData,
        setProfileData
    ] = useState({});

    useEffect(() => {
        fetch('/profile')
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setProfileData(data);
            })
            .catch(console.log);

    }, [profileData.name]);

    if (!profileData.image || !profileData.name) return '...loading';

    return (
        <div>
            <div>Avatar</div>
            <img src={profileData.image} alt=""/>
            <div>{profileData.name}</div>
        </div>
    );
}

// function withListeningToMouseOver(WrappedComponent) {
//     return class extends Component {
//         state = {
//             name: '',
//             image: ''
//         };
//
//         componentDidMount() {
//             fetch('/profile')
//                 .then(response => response.json())
//                 .then(data => {
//                     this.setState(data);
//                 });
//         }
//
//         render() {
//             return <WrappedComponent {...this.props} {...this.state} />;
//         }
//     };
// }
//
// const ProfilewithListeningToMouseOver = withListeningToMouseOver(Profile);

class GenerealInfo extends Component {
    state = {
        count: 0
    }

    updateCount = () => {
        this.setState(state => ({ count: state.count + 1 }));
    }

    render() {
        return (
            <>
                <button onClick={this.updateCount}>Click me</button>
                <div>The best button ever is above me counts: {this.state.count}</div>
            </>
        );
    }
}

export default class App extends Component {
    componentWillUnmount() {
        console.log("big bye");
    }


    render() {
        return (
            <div>
                <Profile />
                <GenerealInfo name={'Roman'} />
            </div>
        );
    }
}
