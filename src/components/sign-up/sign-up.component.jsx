import React from "react";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import {auth,createUserProfileDocument} from '../../firebase/firebase.utils';

import './sign-up.styles.scss';

class Signup extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: '',
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    async handleSubmit(e) {
        e.preventDefault();

        const {  displayName,email,password,confirmPassword} = this.state;

        if (password !== confirmPassword){
            alert(`passwords don't match`);
        }

        try {
            const {user} = await auth.createUserWithEmailAndPassword(
                email,
                password
            );  
            
            await createUserProfileDocument(user, {displayName});
            
            this.setState({displayName: '',email: '',password: '',confirmPassword: ''});
        }catch(e){
            console.log(e);
        }

    }
    handleChange(e){
        const {name,value} = e.target;
        this.setState({[name]:value});
    }
    render(){
        const {displayName, email,password,confirmPassword} = this.state;
        return(
            <div className='sign-up'>
                <h2 className='title'>I do not have a account</h2>
                <span>Sign up with your email and password</span>
                <form onSubmit={this.handleSubmit} className="sign-up-form">
                    <FormInput 
                    type='text'
                    name='displayName'
                    value={this.state.displayName}
                    onChange={this.handleChange}
                    label='Display Name'
                    required/>
                    <FormInput 
                    type='email'
                    name='email'
                    value={this.state.email}
                    onChange={this.handleChange}
                    label='email'
                    required/>
                    <FormInput 
                    type='password'
                    name='password'
                    value={this.state.password}
                    onChange={this.handleChange}
                    label='password'
                    required/>
                    <FormInput 
                    type='password'
                    name='confirmPassword'
                    value={this.state.confirmPassword}
                    onChange={this.handleChange}
                    label='confirmPassword'
                    required/>
                    <CustomButton type='submit'>SIGN UP</CustomButton>
                </form>
            </div>
        );
    }
}

export default Signup ;