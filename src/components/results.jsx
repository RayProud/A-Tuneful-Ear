import React from 'react';
import PropTypes from 'prop-types';

function Results({ isRightAnswer, note, finishTheGame }) {
    return (
        <div>
            {isRightAnswer ? <div>Winner!</div> : <div>You lose! It was {note}. </div>}
            <button onClick={finishTheGame}>Play one more time!</button>
        </div>
    );
}

Results.propTypes = {
    isRightAnswer: PropTypes.bool.isRequired,
    note: PropTypes.string.isRequired,
    finishTheGame: PropTypes.func.isRequired
};

export default Results;
