import React from 'react';
import ReactDOM from 'react-dom';
//import Car from './Car.js';
class Car extends React.Component{
    constructor(){
        super();
        this.state= {color: "red"};
    }
   /* componentDidMount()
    {
        setTimeout(() =>
        {
            this.setState({color: "yellow"})
        }, 1000)
    }
    static getDerivedStateFromProps(props,state)
    {
        return { color: props.fav};
    }*/
    shouldComponentUpdate()
    {
        return true;
    }
    changeColor= () =>
    {
        this.setState({color:"blue"});
    }
    render()
    {
        return(
        <div>
        <h2>I'm a {this.state.color} Car!</h2>;
        <button type="button" onClick={this.changeColor}>Change color</button>;
        </div>
        );        
    }
}
ReactDOM.render(< Car />, document.getElementById('root'));



dbo.collection("products").insertMany(myobj, function(err,res){
    if(err) throw err;
    console.log(res);
    db.close();
});