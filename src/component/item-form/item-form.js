import React from 'react';
import PropTypes from 'prop-types';

const emptyState = {
    expenseName: '',
    expenseAmount: 0.00,
};

export default class ItemForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = props.item || emptyState;
    }

    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({
            [name]: value,
        });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        const categoryId = this.props.category ? this.props.category.id : this.props.item.categoryId;
        this.props.onComplete({
            ...this.state,
            categoryId: categoryId,
        });
        this.setState(emptyState);
    };

    render() {
        const { item } = this.props;
        const buttonText = item ? 'Update Item' : 'Add Item';

        return (
            <form
                className="item-form"
                onSubmit={this.handleSubmit}
            >
                <input
                    type="text"
                    name="expenseName"
                    placeholder="Item Name"
                    value={this.state.expenseName || ''}
                    onChange={this.handleChange}
                />
                <input
                    type="number"
                    name="expenseAmount"
                    placeholder="$0.00"
                    value={this.state.expenseAmount || ''}
                    onChange={this.handleChange}
                />
                <button type="submit"> {buttonText} </button>
            </form>
        );
    }
}

ItemForm.propTypes = {
    onComplete: PropTypes.func,
    category: PropTypes.object,
    item: PropTypes.object,
};
