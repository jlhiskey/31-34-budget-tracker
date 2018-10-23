import React from 'react';
import PropTypes from 'prop-types';

const emptyState = {
    expenseName: '',
    expenseAmt: 0,
};

// !: = development notes

class DeleteExpenses extends React.Component {
    constructor(props) {
        super(props);
        // state should never be empty in this form...
        this.state = this.props.category || emptyState;
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.onComplete(this.state);
    };

    render() {
        return (
            <form
                onSubmit={this.handleSubmit}>
                <button type='submit'> X </button>
            </form>
        );
    }
};

DeleteExpenses.propTypes = {
    category: PropTypes.object,
    onComplete : PropTypes.func,
};

export default DeleteExpenses;
