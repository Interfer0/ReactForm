import React, { Component } from 'react';
//import aGoal from '../js/goals';
import '../css/myStyle.css';
import Top from '../Top';

class Goals extends Component  {
    
    constructor(props){
        super(props);
        
        this.state = {
            posts: [],
        }
    };
    
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

                    </div>
            </div>
        );

    }
}

export default Goals;