import React, { Component } from 'react'

export class Form extends Component {
    // constructor
    // tracker
    constructor(props){
        super(props);

        this.initialState = {
            name: '',
            job: ''
        }

        this.state = this.initialState;
    }
    // tracker working
    tracker = e =>{
        const { name, value } = e.target;

        this.setState(
            {
                [name]: value,
            }
        )
    }


    // submitter
    submitForm = (e) => {
        e.preventDefault();
        console.log("submitting");
        this.props.handleSubmit(this.state); // give the tracked local state to app.js for it's handler func
        this.setState(this.initialState); // clear local state
    }
    // she kindly forgot to mention prevent default during form submit!
    // onFormSubmit = (event) => {
    //     event.preventDefault();
        
    //     this.props.handleSubmit(this.state);
    //     this.setState(this.initialState);
    // }


  render() {
      const {name, job} = this.state
    return (
      <form>
          name: <input name="name" onChange={this.tracker} value={name}></input>
          job: <input name="job" onChange={this.tracker} value={job}></input>
          <button onClick={this.submitForm}></button>
      </form>
    )
  }
}

export default Form
