import React from 'react';

export default class Layout extends React.Component {
  constructor(){
    super();
    this.name = "Vance";
  }
  maths(a,b){
    return a * b;
  }

  render(){
    return(
      <h1>Maths: {this.maths(23,78)} – Constructor thing: {this.name}!</h1>
    );
  }
}
