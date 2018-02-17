import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { get } from 'lodash';
import * as actionCreator from '../actions';
import Results from '../components/Results';

class App extends React.Component {
    onFormSubmit = e => {
        e.preventDefault();
        const { submitANote } = this.props;
        submitANote(this.textInput && this.textInput.value);
    };

    render() {
        const {
            gameIsActive,
            userNote,
            gameNote,
            startListeningGame,
            listenToTheNote,
            finishTheGame
        } = this.props;

        const resultsProps = {
            isRightAnswer: userNote === get(gameNote, 'name', ''),
            note: get(gameNote, 'name', ''),
            finishTheGame
        };

        return (
            <div>
                {!gameIsActive && <button onClick={startListeningGame}>Послушать</button>}
                {gameIsActive && !userNote &&
                    <div>
                        <button onClick={listenToTheNote}>Еще разок</button>
                        <form action="" onSubmit={this.onFormSubmit}>
                            <input
                                ref={(input) => { this.textInput = input; }}
                                type="text"
                                />
                            <input type="submit" />
                        </form>
                    </div>
                }
                {userNote && <Results {...resultsProps} />}
          </div>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actionCreator, dispatch);
}

function mapStateToProps(state) {
    return {
        gameIsActive: state.game.gameIsActive,
        userNote: state.game.userNote,
        gameNote: state.game.gameNote,
        audioIsInited: state.game.audioIsInited
    };
}

App.propTypes = {
    gameIsActive: PropTypes.bool,
    userNote: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.bool
    ]),
    gameNote: PropTypes.oneOfType([
        PropTypes.obj,
        PropTypes.bool
    ]),
    startListeningGame: PropTypes.func,
    listenToTheNote: PropTypes.func,
    finishTheGame: PropTypes.func,
    submitANote: PropTypes.func
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
