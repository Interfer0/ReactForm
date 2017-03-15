import React, {Component} from 'react';  
var iz = require('iz');

class FormContainer extends Component {  
  constructor(props) {
    super(props);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleClearForm = this.handleClearForm.bind(this);
    this.handleFullNameChange = this.handleFullNameChange.bind(this);
    this.handlePhoneChange = this.handlePhoneChange.bind(this);
  }

  handlePhoneChange() {
      if(document.getElementById('frmPhone').value.match(/[a-zA-Z]/)){
            document.getElementById('frmPhone').style.color = 'red';
      } else {
        if(
            (document.getElementById('frmPhone').value.match(/\d/g).length <= 10) ||
            iz.blank(document.getElementById('frmPhone').value)
        ) {
            document.getElementById('frmPhone').style.color = 'black';
        } else {
            document.getElementById('frmPhone').style.color = 'red';
        }
      }
      
  }

  handleFullNameChange() {
      if(
          ( iz.string(document.getElementById('frmName').value) &&
                !iz.number(document.getElementById('frmName').value) ) ||
       iz.blank(document.getElementById('frmName').value)
       ) {
            document.getElementById('frmName').style.color = 'black';
       } else{
           document.getElementById('frmName').style.color = 'red';
       }
  }

  handleFormSubmit() {
    //setState({name : event.target.value});
    console.log('here')
  }
  handleClearForm() {
    // clear form logic goes here
  }



  render() {
    return (
      <form className="container" onSubmit={this.handleFormSubmit}>
        <h5>Tell me about yourself!</h5>
        <div className="itmForm">
        <input
          type='text'
          id='frmName'
          name={'name'}
          onChange={this.handleFullNameChange}
          content="hh"
          placeholder={'Type first and last name here'} />
        </div>
                <div className="itmForm">
        <input
          type='text'
          id='frmPhone'
          name={'name'}
          onChange={this.handlePhoneChange}
          content="hh"
          placeholder={'Enter your phone number'}
          ValidChars="1234567890"  />
        </div>
        <div className="btnForm">
            <button
            className="btnFormBtn"
            onClick={this.handleFormSubmit}>
                Submit
            </button>
            <button
            className="btnFormBtn"
            onClick={this.handleClearForm}>
                Clear form
            </button>
        </div>
      </form>
  );
}}
export default FormContainer;