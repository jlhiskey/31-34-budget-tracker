import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as categoryActions from '../../action/category-actions';
import CategoryForm from '../category-form/category-form';
import UpdateExpenses from '../update-expenses/update-expenses';
import DeleteExpenses from '../delete-expenses/delete-expenses';

class Dashboard extends React.Component {
  render() {
    console.log(this.props);
    return (
            <div>
                <CategoryForm onComplete={this.props.categoryCreate}/>
                <div> { this.props.categories.map(currentCategory => <section
                    key={currentCategory.id}
                    className="allExpenses">
                    <p><b>Expense Title: </b><br/>{currentCategory.expenseTitle}</p>
                    <p><b>amount: </b><br/>{currentCategory.expenseAmount}</p>
                    <UpdateExpenses section={currentCategory} onComplete={this.props.categoryUpdate}/>
                    <DeleteExpenses section={currentCategory} onComplete={this.props.categoryDelete}/>
                </section>)}
                </div>
            </div>
    );
  }
}

Dashboard.propTypes = {
  categoryCreate: PropTypes.func,
  categoryUpdate: PropTypes.func,
  categoryDelete: PropTypes.func,
  categories: PropTypes.array,
};

const mapStateToProps = (state) => {
  return {
    categories: state,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    categoryCreate: (category) => {
      dispatch(categoryActions.create(category));
    },
    categoryDelete: (category) => {
      dispatch(categoryActions.remove(category));
    },
    categoryUpdate: (category) => {
      dispatch(categoryActions.update(category));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
