import React from 'react';
import PropTypes from 'prop-types';

function Results({ isRightAnswer, note, finishTheGame }) {
    return (
        <div>
            {isRightAnswer ? <div>Молодец!</div> : <div>Неправильно! Была нота {note}. </div>}
            <button onClick={finishTheGame}>Сыграть еще раз!</button>
        </div>
    );
}

Results.propTypes = {
    isRightAnswer: PropTypes.bool.isRequired,
    note: PropTypes.string.isRequired,
    finishTheGame: PropTypes.func.isRequired
};

export default Results;
