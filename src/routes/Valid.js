import React, { Component } from 'react';
//import aGoal from '../js/goals';
import '../css/myStyle.css';
import Top from '../Top';
import FormContainer from '../Containers/FormContainer';

class Valid extends Component  {
    

    
    loadData(){
        
    };

    componentDidMount() {
        this.loadData();
    };

    render() {
        return (
            <div className="Valid">
                <Top />
                    <div className="myForm">
                        <FormContainer />
                    </div>
            </div>
        );

    }
}

export default Valid;