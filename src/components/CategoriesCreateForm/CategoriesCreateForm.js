import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createCategory } from '../../actions/CategoriesActions';

class CategoriesCreateForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categoryName: ''
    };
    this.createNewCategory = this.createNewCategory.bind(this);
  }

  createNewCategory() {
    const name = this.state.categoryName;

    const data = {
      name
    };

    this.props.dispatch(createCategory(data));
  }

  render() {
    let message = '';

    if (this.props.response.categories.hasOwnProperty('responseMessage')) {
      message = this.props.response.categories.responseMessage;
    }

    return (
      <div>
        <h4>Add a new category</h4>
        <h5>{message}</h5>
        <div className="category-form">
          <label htmlFor="category-name">Name:</label>
          <input onChange={(e) => this.setState({categoryName: e.target.value})} value={this.state.categoryName} name={"category-name"} type="text"/>
          <button onClick={this.createNewCategory}>Create</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (response) => ({
  response
});


const CategoriesCreateFormContainer = connect(
  mapStateToProps,
  null,
)(CategoriesCreateForm);

export default CategoriesCreateFormContainer;
