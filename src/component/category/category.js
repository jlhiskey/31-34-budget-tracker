import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import CategoryForm from '../category-form/category-form';
import * as categoryActions from '../../action/categoryAction';
import ItemForm from '../item-form/item-form';
import Item from '../item/item';
import * as itemActions from '../../action/itemAction';

class Category extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            editing: false,
        };
    }

    handleUpdateRequest = () => {
        this.setState({editing: true});
    };

    handleUpdateCategoryAndHideForm = (category) => {
        this.setState({editing: false});
        this.props.categoryUpdate(category);
    };

    render() {
        const {
            items,
            itemCreate,
            category,
            key,
            categoryRemove,
        } = this.props;

        const categoryItems = items[category.id];

        const editingJSX = <CategoryForm category={category} onComplete={this.handleUpdateCategoryAndHideForm}/>;
        const renderJSX = this.state.editing ? editingJSX : <React.Fragment>
            { category.title }
            <button onClick={() => categoryRemove(category)}> X </button>
        </React.Fragment>;

        return (
            <div className='list' key={key}>
                <header onDoubleClick={this.handleUpdateRequest}>
                    { renderJSX }
                </header>
                <ul>
                    { categoryItems.map(item => <Item item={item} key={item.id} />) }
                </ul>
                <footer>
                    <ItemForm category={category} onComplete={itemCreate} />
                </footer>
            </div>
        );
    }
}

Category.propTypes = {
    items: PropTypes.object,
    itemCreate: PropTypes.func,
    category: PropTypes.object,
    key: PropTypes.number,
    categoryRemove: PropTypes.func,
    categoryUpdate: PropTypes.func,
};

const mapStateToProps = state => ({
    items: state.items,
});

const mapDispatchToProps = (dispatch) => {
    return {
        itemCreate: data => dispatch(itemActions.create(data)),
        categoryRemove: data => dispatch(categoryActions.remove(data)),
        categoryUpdate: data => dispatch(categoryActions.update(data)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Category);

