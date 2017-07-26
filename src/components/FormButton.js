import React, { Component } from 'react';
import Form from './Form';

class FormButton extends Component {
  constructor(props) {
  super(props);
  this.state = {
    isToggleOn: false,
    sortOption: this.props.sortOption
  };

  // This binding is necessary to make `this` work in the callback
  this.handleClick = this.handleClick.bind(this);
  this.handleChange = this.handleChange.bind(this);
  this.handleFilter = this.handleFilter.bind(this);
}

handleClick() {
  this.setState(prevState => ({
    isToggleOn: !prevState.isToggleOn,
  }));
}

handleChange(event) {
  const target = event.target;
  this.props.handleChange(target);
  this.setState(prevSate => ({
    sortOption: target.value
  }));
}

handleFilter(event){
  const target = event.target;
  this.props.onFilter(target);
}

  render() {
    return(
      <div>

        <div className="pull-right">
          <p><a className="btn btn-info" onClick={this.handleClick}>New Post</a></p>
        </div>

        <ul className="nav nav-pills">
          <li role="presentation" className="active">
            <input onChange={this.handleFilter} type="search" className="form-control input-sm search-form" placeholder="Filter" />
          </li>
          <div className="form-inline">
            <label htmlFor="sort">  Sort by </label>
            <select className="form-control" id="sort" value={this.state.sortOption} onChange={this.handleChange}>
              <option value='votes'>Votes</option>
              <option value='date'>Date</option>
              <option value='title'>Title</option>
            </select>
          </div>
        </ul>

        {toggleForm(this.state, this.props.onAddPost)}

      </div>
    );
    }
  }

  function toggleForm(state, onAddPost) {
  if (state.isToggleOn) {
    return <Form onAddPost={onAddPost}/>;
  }
  return;
}

export default FormButton;
