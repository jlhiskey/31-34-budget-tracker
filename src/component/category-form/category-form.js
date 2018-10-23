import React from 'react';
import PropTypes from 'prop-types';

const emptyState = {
    expenseName: '',
    expenseAmount: 0,
};

class CategoryForm extends React.Component {
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
    this.setState(emptyState);
  };

    render() {
        const buttonText = this.props.category ? 'Update' : 'Create';
        return (
            <form onSubmit={this.handleSubmit}>
                <input
                    type="text"
                    name="expenseName"
                    placeholder="title"
                    value={this.state.expenseName}
                    onChange={this.handleChange}
                />
                <input
                    type="number"
                    name="expenseAmount"
                    placeholder="0"
                    value={this.state.expenseAmount}
                    onChange={this.handleChange}
                />
                <button type="submit">{buttonText} Expense</button>
            </form>
        );
    }
}

CategoryForm.propTypes = {
  category: PropTypes.object,
  onComplete : PropTypes.func,
};

export default CategoryForm;
