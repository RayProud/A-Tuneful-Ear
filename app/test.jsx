import React from 'react';
import ReactDOM from 'react-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreator from './actions';

function mapStateToProps(state) {
    return {
        gameIsActive: state.game.gameIsActive,
        userNote: state.game.userNote,
        gameNote: state.game.gameNote,
        audioIsInited: state.game.audioIsInited
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actionCreator, dispatch);
}

class App extends React.Component {
    render() {
        const {
            gameIsActive,
            userNote,
            gameNote,
            startListeningGame,
            submitANote,
            finishTheGame
        } = this.props;

        return (
            <div>
                {!gameIsActive && <button onClick={startListeningGame}>Послушать</button>}
                {gameIsActive && !userNote &&
                    <form action="" onSubmit={(e) => {e.preventDefault();submitANote(this.textInput && this.textInput.value)}}>
                        <input
                            ref={(input) => {this.textInput = input;}}
                            type="text"
                        />
                        <input type="submit"/>
                    </form>
                }
                {userNote &&
                    <div>
                        {userNote == gameNote.name ? <div>Молодец!</div> : <div>Неправильно! Была нота {gameNote.name}. </div>}
                        <button onClick={finishTheGame}>Сыграть еще раз!</button>
                    </div>
                }
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);