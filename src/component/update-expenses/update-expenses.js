import React from 'react';
import PropTypes from 'prop-types';

const emptyState = {
    expenseName: '',
    expenseAmount: 0,
};

class UpdateExpenses extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.category || emptyState;
    }
    handleChange = (event) => {
        let { name, value } = event.target;
        if (name === 'expenseAmount' ) {
            value = Number(value);
        }
        this.setState({[name]: value});
    };

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.onComplete(this.state);
    };

    render() {
        return (
            <form
                onSubmit={this.handleSubmit}>

                <input
                    type='text'
                    name="expenseName"
                    placeholder='Expense Item'
                    value={this.state.expenseName}
                    onChange={this.handleChange}
                />
                <input
                    type='number'
                    name="expenseAmount"
                    placeholder='0'
                    value={this.state.expenseAmount}
                    onChange={this.handleChange}
                />
                <br />
                <button type='submit'>Update</button>
            </form>
        );
    }
};

UpdateExpenses.propTypes = {
    category: PropTypes.object,
    onComplete : PropTypes.func,
};

export default UpdateExpenses;
