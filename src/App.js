import React, { Component } from 'react';
import { BrowserRouter,Switch,Route } from 'react-router-dom'
// import logo from './logo.svg';
import './App.css';

class Login extends Component{
  render(){
    return(
      <div>这是登录页</div>
    )
  }
}
class Home extends Component{
  render(){
    return(
      <div>这是主页</div>
    )
  }
}
class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Login}/>
            <Route path="/home" component={Home}/>
        </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
