import './Input.css';
import React from 'react';
export default class Input extends React.Component {
    state={
        show:false,
        website:'',
        username:'',
        password:''
    }
    handleClick=(e)=>{
        const {getDetails}=this.props;
        const {website,username,password}=this.state;
        if(website==='' || username==='' || password==='')
        {
            this.setState(prevSate=>{
                return {
                    ...prevSate, 
                    show:true,
                }
            })
        }
        else{
        getDetails(this.state);
        this.setState({show:false,website:'',username:'',password:''});
        }
    }
    handleChange1=(e)=>{
        this.setState(prevSate=>{
            return {
                ...prevSate, 
                website:e.target.value
            }
        })
    }
    handleChange2=(e)=>{
        this.setState(prevSate=>{
            return {
                ...prevSate, 
                username:e.target.value
            }
        })
    }
    handleChange3=(e)=>{
        this.setState(prevSate=>{
            return {
                ...prevSate, 
                password:e.target.value
            }
        })
    }
    render() {
      const {getDetails}=this.props;
      return (
       <div className='PasswordManager'>
        <div className='PasswordManager1'>
            <h2>Add New Password</h2>
            <div className='Passwodinput'>
                <img  src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png" alt="Website" />
                <input onChange={this.handleChange1} class="inputIdC" type="text" placeholder="Enter Website" value={this.state.website}/>
            </div>
            <div className='Passwodinput'>
                <img  src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png" alt="UserName" />
                <input onChange={this.handleChange2} class="inputIdC" type="text" placeholder="Enter Username" value={this.state.username} />
            </div>
            <div className='Passwodinput'>
                <img  src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png" alt="Password" />
                <input onChange={this.handleChange3} class="inputIdC" type="text" placeholder="Enter Password" value={this.state.password} />
            </div>
            {this.state.show && <p style={{color:"#fff",textAlign:"center"}}>Enter All Required Field</p>}
            <div className='PassBtn'>
            <button className='PassButton' onClick={this.handleClick}>Add</button>
            </div>
        </div>
        <div className='PasswordManager2'>
            <img src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png" alt="back"></img>
        </div>
       </div>
      )
    }
}