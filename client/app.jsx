import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import TrackerReact from 'meteor/ultimatejs:tracker-react'

Resolutions = new Mongo.Collection('resolutions');
 
// App component - represents the whole app
export default class App extends TrackerReact(Component) {

  resolutions(){
    return Resolutions.find().fetch();
  }

  addResolution(event){
  	event.preventDefault();
  	let text = this.refs.resolution.value.trim();

  	Resolutions.insert({
  		text:text,
  		complete:false,
  		createdAt:new Date()
  	});

  	this.refs.resolution.value = "";
  }

  render(){
      var res = this.resolutions();

      if(res.length < 1){
        return(
          <div>Loading</div>
        )
      }

      console.log(res);

      return(
      	<div>
        	<h1>My Resolutions</h1>
        	<form className="new-resolution" onSubmit={this.addResolution.bind(this)}>
        		<input type="text" ref="resolution" placeholder="Finish React Meteor Series"/>
        	</form>

          <div>
            {res.map( (resObject,index) => {
              return <li key={index}>{resObject.text}</li> ;
            })}
          </div>
        </div>
      );
  }
}
 

