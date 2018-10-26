import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ItemForm from '../item-form/item-form';
import * as itemActions from '../../action/itemAction';

class Item extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            editing: false,
        };
    }

    handleUpdateRequest = () => {
        this.setState({editing: true});
    };

    handleUpdateItemAndHideForm = (item) => {
        this.setState({editing: false});
        this.props.itemUpdate(item);
    };

    render() {
        const { item, itemRemove } = this.props;

        const editingJSX = <ItemForm item={ item } onComplete={ this.handleUpdateItemAndHideForm } /> ;
        const renderJSX = this.state.editing ? editingJSX :
            <React.Fragment>
                { item.expenseName }
                <button onClick={() => itemRemove(item)}> X </button>
            </React.Fragment> ;

        return (
            <li>
                <div onDoubleClick={this.handleUpdateRequest}>
                    { renderJSX }
                </div>
            </li>
        );
    }
}

Item.propTypes = {
    item: PropTypes.object,
    itemRemove: PropTypes.func,
    itemUpdate: PropTypes.func,
};

const mapDispatchToProps = dispatch => ({
    itemRemove: data => dispatch(itemActions.remove(data)),
    itemUpdate: data => dispatch(itemActions.update(data)),
});

export default connect(null, mapDispatchToProps)(Item);
