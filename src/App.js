import React, { Component } from 'react';
import './App.css';
import minus from './images/minus.png'
import plus from './images/plus.png'
import adult from './images/adult.jpg'
import child from './images/childern.png'

class App extends Component {
  constructor(props) {
  super(props);
  this.state={
    roomcount:1,
    adultcount:1,
    childcount:0,
    noperson:1
   }
}

   minus(type){
     console.log(type);
     let rc=this.state.roomcount;
     let ac=this.state.adultcount;
     let cc=this.state.childcount;
     let np=this.state.noperson;
     if(type=="room"){
       if(rc>1){
         rc=rc-1;
         while(rc*4<ac+cc){
           if(cc>0)
           {
            cc=cc-1;
           }
           else{
             ac=ac-1;
           }
         }
     }
   }
   if(type=="adult"){
     if(rc*4>=ac+cc&&ac>1){
       ac=ac-1;
     }
     console.log(type);
   }
   if(type=="child"){
     if(rc*4>=ac+cc&&cc>0){
       cc=cc-1;
     }
     console.log(type);
   }
   this.setState({
     roomcount:rc,
     adultcount:ac,
     childcount:cc
   })
   }
   plus(type){
     let rc=this.state.roomcount;
     let ac=this.state.adultcount;
     let cc=this.state.childcount;
     let np=this.state.noperson;
     if(type=="room"){
       if(rc>=1&&rc<5){
         rc=rc+1;
         if(ac==rc-1){
           ac=rc;
         }
         else if(rc*4>ac+cc)
         {
         ac=ac+1;
         cc=0;
       }
     }
   }
    if(type=="adult"){
      if(rc*4>ac+cc){
        ac=ac+1;
        cc=0;
      }
      console.log(type);
    }
    if(type=="child"){
      if(rc*4>ac+cc){
        cc=cc+1;
      }
    }
    this.setState({
      roomcount:rc,
      adultcount:ac,
      childcount:cc
    })
     console.log(rc,ac,cc);
   }


  render() {
    return (
      <div className="App">
      <div className="container">
      <div className="row"><h2 className="heading">Choose number of people</h2></div>
      <div className="row">
      <table className="table table-striped">
     <tbody>
      <tr>
      <td>Rooms</td>
      <td><button onClick={this.minus.bind(this,"room")}><img className="icon" src={minus}/></button></td>
      <td>{this.state.roomcount}</td>
      <td><button onClick={this.plus.bind(this,"room")}><img className="icon" src={plus}/></button></td>
     </tr>
      <tr>
      <td>Adult</td>
      <td><button onClick={this.minus.bind(this,"adult")}><img className="icon" src={minus}/></button></td>
      <td>{this.state.adultcount}</td>
      <td><button onClick={this.plus.bind(this,"adult")}><img className="icon" src={plus}/></button></td>
      </tr>
      <tr>
      <td>Children</td>
      <td><button onClick={this.minus.bind(this,"child")}><img className="icon" src={minus}/></button></td>
      <td>{this.state.childcount}</td>
      <td><button onClick={this.plus.bind(this,"child")}><img className="icon" src={plus}/></button></td>
      </tr>
      </tbody>
      </table>
      </div>
      </div>
      </div>
    );
  }
}

export default App;
