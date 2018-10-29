import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as categoryActions from '../../action/categoryAction';
import CategoryForm from '../category-form/category-form';
import Category from '../category/category';

class Dashboard extends React.Component {
  render() {
    const { categories, categoryCreate } = this.props;
    return (
            <main>
                <nav className="navbar board">
                    <CategoryForm onComplete={categoryCreate}/>
                </nav>
                <div className="lists">
                    {
                        categories.categories.map((currentCategory, i) => <Category category={currentCategory} key={i}/>)
                    }
                </div>
            </main>
    );
  }
}

Dashboard.propTypes = {
  categories: PropTypes.object,
  categoryCreate: PropTypes.func,
};
const mapStateToProps = (state) => {
  return {
    categories: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    categoryCreate: data => dispatch(categoryActions.create(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
