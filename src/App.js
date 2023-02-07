import './App.css';
import React from 'react';
import Input from './components/Input/Input';
import Password from './components/Password/Password';
class App extends React.Component {
  state={
    loginDetails:[{
      website:'',
      username:'',
      password:''
    }],
    searchDetails:[{
      website:'',
      username:'',
      password:''
    }]
  }
  getDetails=(data)=>{
    let prevData=this.state.loginDetails;
    if(prevData.length===1 && prevData[0].website==='')
    prevData=[];
    prevData.push(data)
    this.setState(prevState=>{
      return {
        loginDetails:prevData,
        searchDetails:prevData
      }
    })
    localStorage.setItem('loginDetails',JSON.stringify(this.state.loginDetails));
  }
  handleDelete=(list)=>{
    let prevDat=this.state.loginDetails;
    prevDat=prevDat.filter(data=>data!==list);
    this.setState(prevState=>{
      return {
        loginDetails:prevDat,
        searchDetails:prevDat
      }
    });
    localStorage.setItem('loginDetails',JSON.stringify(prevDat));
  }
  handleSearch=(e)=>{
    let searchData=this.state.loginDetails;
    searchData=searchData.filter(data=> data.username.includes(e) || data.website.includes(e));
    this.setState(prevState=>{
      return {
        ...prevState,
        searchDetails:searchData
      }
    });
  }
  componentDidMount(){
    if(localStorage.getItem('loginDetails')==null)
    this.getDetails();
    else{
    this.setState(prevState=>{
      return {
        loginDetails:JSON.parse(localStorage.getItem('loginDetails')),
        searchDetails:JSON.parse(localStorage.getItem('loginDetails'))
      }
    });
  }
}
  render() {
    console.log(this.state.loginDetails);
    // localStorage.setItem('loginDetails',[]);
    return (
      <div className='AppContd'>
        <div className='AppContd1'>
        <div className='AppContdImg'>
          <img src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png" alt="logo"/>
        </div>
      </div>
      <Input getDetails={this.getDetails}/>
      <Password passData={this.state.searchDetails} handleDelete={this.handleDelete} handleSearch={this.handleSearch}/>
      </div>
    )
  }
}

export default App
