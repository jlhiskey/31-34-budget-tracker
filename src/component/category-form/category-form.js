import React from 'react';
import PropTypes from 'prop-types';

const defaultState = {
    title: '',
};


class CategoryForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.category || defaultState;
    }

    handleChange = (event) => {
        const { value } = event.target;
        this.setState({ title: value });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.onComplete(this.state);
        this.setState(defaultState);
    };

    render() {
        const buttonText = this.props.category ? 'Update' : 'Create';
        return (
            <form
                onSubmit={this.handleSubmit}
                className='category-form'>

                <input
                    type='text'
                    name='title'
                    placeholder='Category Name'
                    value={this.state.title}
                    onChange={this.handleChange}
                />
                <button type='submit'>{buttonText}</button>

            </form>
        );
    }
}

CategoryForm.propTypes = {
    onComplete: PropTypes.func,
    category: PropTypes.object,
};

export default CategoryForm;
