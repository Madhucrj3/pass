import './Password.css';
import React from 'react';
import ShowPass from './ShowPass/ShowPass';
export default class Password extends React.Component {
  state={
    checked:false,
  }
  handleClick=(e)=>{
    if(e.target.checked === true)
    {
      this.setState({checked:true});
    }
    else
    {
      this.setState({checked:false});
    }
  }
    render() {
      const {passData,handleDelete,handleSearch}=this.props;
      const {checked}=this.state;
      const handleSearchres=(e)=>{
        handleSearch(e.target.value);
      }
      const noPassword=()=>
      {
        return (
            <div className='NoPassword1'>
              <div className='NoPasswordimg'>
                <img src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png" alt="nopass" />
              </div>
              <h2>No Password</h2>
            </div>
        )
      }
      return (
       <div className='ShowPassContd'>
           <div className='ShowPassContd1'>
              <div className='ShowPassContdfirst'>
                <h4>Your Passwords</h4>
                <span className='ShowPassContdSearch'>
                  <img src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png" alt="Search" />
                  <input onChange={handleSearchres} class="inputSearch" type="text" placeholder="Search" />
                </span>
              </div>
              </div>
              <div className='ShowPassContd2'>
                <div className='ShowPassContd21'></div>
              </div>
              <div className='ShowPassContd3'>
                <input onClick={this.handleClick} type="checkbox" name="Show" value="Show" />
                <label > Show Password</label>
              </div>
              <div className='ShowPassContd4'>
              {passData.length===1 && passData[0].website===''? noPassword() : passData.map((list,ind) => (
                <ShowPass key={ind} list={list} handleDelete={handleDelete} checked={checked} />
             ))}
              </div>
       </div>
      )
    }
}