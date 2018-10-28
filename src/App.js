import React, { Component } from 'react';
import './App.css';
import room from './images/room.png'
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
         ac=ac;
         cc=0;
       }
       else{
         ac=ac+1;
       }
     }
   }
    if(type=="adult"){
      if(rc*4>ac+cc){
        ac=ac+1;

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
      <td><img className="icon" src={room}/>Rooms</td>
      <td><button disabled={this.state.roomcount==1} onClick={this.minus.bind(this,"room")}><span style={{color:this.state.roomcount==1?"red":"blue"}} class="glyphicon glyphicon-minus"></span></button></td>
      <td>{this.state.roomcount}</td>
      <td><button disabled={this.state.roomcount==5} onClick={this.plus.bind(this,"room")}><span style={{color:this.state.roomcount==5?"red":"blue"}}
      class="glyphicon glyphicon-plus"></span></button></td>
     </tr>
      <tr>
      <td><img className="icon" src={adult}/>Adult</td>
      <td><button disabled={this.state.adultcount==1} onClick={this.minus.bind(this,"adult")}><span style={{color:this.state.adultcount==1?"red":"blue"}} class="glyphicon glyphicon-minus"></span></button></td>
      <td>{this.state.adultcount}</td>
      <td><button disabled={this.state.roomcount*4<=this.state.adultcount+this.state.childcount} onClick={this.plus.bind(this,"adult")}><span style={{color:this.state.roomcount*4<=this.state.adultcount+this.state.childcount?"red":"blue"}} class="glyphicon glyphicon-plus"></span></button></td>
      </tr>
      <tr>
      <td><img className="icon" src={child}/>Children</td>
      <td><button disabled={this.state.childcount==0} onClick={this.minus.bind(this,"child")}><span style={{color:this.state.childcount==0?"red":"blue"}} class="glyphicon glyphicon-minus"></span></button></td>
      <td>{this.state.childcount}</td>
      <td><button disabled={this.state.roomcount*4<=this.state.adultcount+this.state.childcount} onClick={this.plus.bind(this,"child")}><span style={{color:this.state.roomcount*4<=this.state.adultcount+this.state.childcount?"red":"blue"}} class="glyphicon glyphicon-plus"></span></button></td>
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
