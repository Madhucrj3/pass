import './ShowPass.css';
import React from 'react';
class ShowPass extends React.Component {
  state={
    web:'',
    pass:'',
    user:'',
  }
  componentDidMount(){
    const {list}=this.props;
    this.setState({web:list.website,pass:list.password,user:list.username});
  }
  handleMouseEnter=(e)=>{
    console.log(e);
  }
  handleMouseLeave=(e)=>{
    console.log(e);
  }
  render() {
    const {list,handleDelete,checked}=this.props;
    const {web,pass,user}=this.state;
    const DeletePass=(e)=>{
      handleDelete(list);
    }
    const passshow=()=>{
      let res="";
      for(let i=0;i<list.password.length;i++){
        res=res+"*";
      }
      return res;
    }
    return (
      <div className='ShowPassContainer'>
        <div className='showassComb'>
        <div className='ShowPassContainer1'>
          {list.website.charAt(0).toUpperCase()}
        </div>
        <div className='ShowPassContainer2'>
          <p className="hovertext" title={list.website}>{list.website.length>15? list.website.substring(0,15)+"...":web}</p>
          <p className="hovertext" title={list.username}>{list.username.length>15? list.username.substring(0,15)+"...":user}</p>
          <p>{checked===true? pass : passshow()}</p>
        </div>
        </div>
        <div className='ShowPassContainer3'>
          <img onClick={DeletePass} src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png" alt="delete"/>
        </div>
      </div>
    )
  }
}

export default ShowPass