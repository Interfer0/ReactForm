import React, {Component} from 'react';  
var iz = require('iz');

class FormContainer extends Component {  
  constructor(props) {
    super(props);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleClearForm = this.handleClearForm.bind(this);
    this.handleFullNameChange = this.handleFullNameChange.bind(this);
    this.handlePhoneChange = this.handlePhoneChange.bind(this);
    this.handleWebChange = this.handleWebChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
  }



  handleFullNameChange() {
      var itm = document.getElementById('frmName');
      if(itm.value.length >= 1 && itm.value.length != null)
        itm.style.backgroundColor = 'white';
      if(( iz.string(itm.value) && !iz.number(itm.value)) ||
       iz.blank(itm.value)) 
       {
            itm.style.color = 'black';

       } else{
           itm.style.color = 'red';
       }
  }

  handlePhoneChange() {
      var itm = document.getElementById('frmPhone');
      if(itm.value.length >= 1 && itm.value.length != null)
                itm.style.backgroundColor = 'white';
      if(itm.value.match(/[a-zA-Z]/)){
            itm.style.color = 'red';
      } else {
        if((itm.value.match(/\d/g).length <= 10) || iz.blank(itm.value)) 
        {
            itm.style.color = 'black';
            
        } else {
            itm.style.color = 'red';
        }
      }
  }
    handleWebChange() {
        var itm = document.getElementById('frmWeb');
        if(itm.value.length >= 1 && itm.value.length != null)
            itm.style.backgroundColor = 'white';
            if(itm.value.length >= 1)
            {
                itm.style.color = 'black';
                itm.style.backgroundColor = 'white';
            }
  }

  handleEmailChange() {
        var itm = document.getElementById('frmEmail');
        if(itm.value.length >= 1 && itm.value.length != null)
                    itm.style.backgroundColor = 'white';
        if(itm.value.length >= 1)
        {
            itm.style.color = 'black';
            itm.style.backgroundColor = 'white';
        }
  }
  handleFormSubmit() {
      var gtg = true;
        var itmN = document.getElementById('frmName');
        var itmP = document.getElementById('frmPhone');
        var itmW = document.getElementById('frmWeb');
        var itmE = document.getElementById('frmEmail');
        if((!iz.string(itmN.value) || iz.number(itmN.value)) || iz.blank(itmN.value))
        {
            gtg = false;
            itmN.value = '';
            itmN.placeholder = 'Invalid Name!';
            itmN.style.backgroundColor = 'red';  
        }
        if((itmP.value.length > 10) || itmP.value.length < 7|| iz.blank(itmP.value) || itmP.value.match(/[a-zA-Z]/) != null)
        {
            gtg = false;
            itmP.value = '';
            itmP.placeholder = 'Invalid Phone Number!';
            itmP.style.backgroundColor = 'red';  
        }
        if(iz.blank(itmW.value))
        {
            gtg = false;
            itmW.value = '';
            itmW.placeholder = 'Invalid Website!';
            itmW.style.backgroundColor = 'red';  
        }
        var emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        if(!emailRegex.test(itmE.value)|| iz.blank(itmE.value))
        {
            gtg = false;
            itmE.value = '';
            itmE.placeholder = 'Invalid Email!';
            itmE.style.backgroundColor = 'red';  
        }
        if(gtg)
        {
            //continue submitting form
            
        }
  }
  handleClearForm() {
    var itmN = document.getElementById('frmName');
    var itmP = document.getElementById('frmPhone');
    var itmW = document.getElementById('frmWeb');
    var itmE = document.getElementById('frmEmail');
    itmN.value = '';
    itmP.value = '';
    itmW.value = '';
    itmE.value = '';
    itmN.style.backgroundColor = 'white';
    itmP.style.backgroundColor = 'white';
    itmW.style.backgroundColor = 'white';
    itmE.style.backgroundColor = 'white';
    itmN.placeholder = 'Type first and last name here';
    itmP.placeholder = 'Enter your phone number';
    itmW.placeholder = 'Enter your website';
    itmE.placeholder = 'Enter your Email Address';
  }



  render() {
    return (
      <form className="container" onSubmit={this.handleFormSubmit}>
        <h5>Tell me about yourself!</h5>
        <div className="itmForm">
            <input
            type='text'
            className='tbox'
            id='frmName'
            name={'name'}
            onChange={this.handleFullNameChange}
            placeholder={'Type first and last name here'} />
        </div>
        <div className="itmForm">
            <input
            type='text'
            className='tbox'
            id='frmPhone'
            name={'phone'}
            onChange={this.handlePhoneChange}
            placeholder={'Enter your phone number'} />
        </div>
        <div className="itmForm">
            <input
            type='text'
            className='tbox'
            id='frmWeb'
            onChange={this.handleWebChange}
            name={'web'}
            placeholder={'Enter your website'} />
        </div>
        <div className="itmForm">
            <input
            type='text'
            className='tbox'
            id='frmEmail'
            onChange={this.handleEmailChange}
            name={'email'}
            placeholder={'Enter your Email Address'}  />
        </div>
        <div className="btnForm">
            <input
            type='button'
            className="btnFormBtn"
            onClick={this.handleFormSubmit} 
            value='Submit'/>
            <input
            type='button'
            className="btnFormBtn"
            onClick={this.handleClearForm} 
            value='Clear'/>

        </div>
      </form>
  );
}}
export default FormContainer;