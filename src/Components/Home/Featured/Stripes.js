import React, { Component } from 'react';
import {easePolyOut} from 'd3-ease';
import Animate from 'react-move/Animate';

export default class Stripes extends Component {
    constructor(props){
        super(props);
        this.state={
            stripes:[
                {
                    background:'#8DC0E6'
                },
                {
                    background:'#ffffff'
                },
                {
                    background:'#8DC0E6'
                }
            ]
        }

    }
    
     showStripes =()=>{
       this.state.stripes.map((stripe,i)=>(
           

       ))
    }
         
    
    render() {
        
        return (
            <div className="featured_stripes">
                {this.showStripes()}
                
            </div>
        )
    }
}
