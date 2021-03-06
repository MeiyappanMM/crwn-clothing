import React from 'react';

import './sign-in.styles.scss';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import {signInWithGoogle} from '../../firebase/firebase.utils';

import {auth} from '../../firebase/firebase.utils';

class SignIn extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            email : '',
            password : ''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(evt){
        const {value,name} = evt.target ;

        this.setState({[name]: value})
    }

    async handleSubmit(evt){
        evt.preventDefault();

        const {email,password} = this.state;
        try{
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({email:'',password:''})
        }catch(e){
            console.log(e);
        }
        
    }
        
    
    render(){
        return (
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput type="email" handleChange={this.handleChange} love='train' value={this.state.email} label="Email" name="email" required/>
                    <FormInput type="password" handleChange={this.handleChange} love='train' value={this.state.password}  label="Password" name="password"  required/>
                    <div className='buttons'>
                    <CustomButton type="submit">Sign In</CustomButton>
                        <CustomButton type='button' onClick={signInWithGoogle} isGoogleSignIn>
                            {''}
                            Sign in with Google{''}
                        </CustomButton>
                    </div>
                    
                </form>
            </div>
        );
    }
}

export default SignIn;