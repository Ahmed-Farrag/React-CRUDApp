import React, { Component ,Fragment } from 'react';

class CourseList extends Component {

  state = {
    isEdite : false
  }

   // render Course Item
   renderCourse = () => {
    return (
      <li>
          <span>{this.props.details.name}</span>
          <button onClick={() => {this.toggleState()}}>Edit Course</button>
          <button onClick={() => {this.props.deleteCourse(this.props.index)}}>Delete Course</button>
      </li>
    )
  } 

  // toggleState
  toggleState = () => {
    let {isEdite} = this.state;
    this.setState({
      isEdite: !isEdite
    })
  }


  updateCourseItem = (e) => {
    e.preventDefault();
    this.props.editCourse(this.props.index , this.input.value);
    this.toggleState();
  }

  // render Update Form
  renderUpdateForm = () => {
    return (
      <form onSubmit={this.updateCourseItem}>
        <input type="text" ref={(v) => {this.input = v}} defaultValue={this.props.details.name}/>
        <button>Update Course</button>
      </form>
    )
  }

  render() {
    let { isEdite } = this.state;
    return (
      <Fragment>
        {isEdite ? this.renderUpdateForm() : this.renderCourse()}
      </Fragment>
    )
  }
}
export default CourseList;


