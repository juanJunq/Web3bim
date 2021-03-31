import React from 'react';
import UserStore from '../../Store/UserStore';
import InputField from '../Login/InputField';
import SubmitBtn from '../Login/SubmitBtn';
import {
    LoginComponent,
    FormH,
    Form,
    Label,
    Input,
    Button,
    Text,
    H1,
    A
} from '../../styles/LoginStyle' 

import {Linha} from '../../styles/BodyStyle'

class LoginForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            email: '',
            username: '',
            password: '',
            buttonDisabled: false
        }
    }
    setInputValue(property, val){
        val = val.trim();
        if(val.length > 64){
            return;
        }
        this.setState({
            [property]: val
        })
    }
    resetForm(){
        this.setState({
            email: '',
            username: '',
            password: '',
            buttonDisabled: false
        })
    }
    async doLogin(){
        if(!this.state.email){
            return;
        }
        if(!this.state.username){
            return;
        }
        if(!this.state.password){
            return;
        }
        this.setState({
            buttonDisabled: true
        })
        try{
            let res = await fetch('/login', {
                method: 'post',
                headers:{
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: this.state.email,
                    username: this.state.username,
                    password: this.state.password
                })
            });
            let result = await res.json();
            if(result && result.success){
                UserStore.isLoggedIn = true;
                UserStore.email = result.email;
                UserStore.username = result.username;
            }
            else if(result && result.success === false){
                this.resetForm();
                alert(result.msg);
            }
        }
        catch(e){
            console.log(e);
            this.resetForm();
        }
    }
    render(){
        return(
            <LoginComponent>
                <Linha></Linha>
                <div className = "formulario">
                    <FormH>Cadastre-se</FormH>
                    <Form>
                        <Label>Usuario</Label>
                        <InputField
                            type = 'text'
                            placeholder = 'Insira um nome de usuario'
                            value = {this.state.username ? this.state.username: ''}
                            onChange = {(val)=>this.setInputValue('username', val)}
                        />
                        <Label>E-mail</Label>
                        <InputField
                            type = 'email'
                            placeholder = "seu_nome@gmail.com"
                            value = {this.state.email ? this.state.email: ''}
                            onChange = {(val)=>this.setInputValue('email', val)}
                        />
                        <Label>Senha</Label>
                        <InputField
                            type = 'password'
                            placeholder = '********'
                            value = {this.state.password ? this.state.password: ''}
                            onChange = {(val)=>this.setInputValue('password', val)}
                        />
                        <SubmitBtn
                            text = 'Cadastrar'
                            disabled = {this.state.buttonDisabled}
                            onClick = {()=>this.doLogin()}
                        />
                        <Text>
                            <H1>Ja tem cadastro?</H1>
                            <A href = {`/enter`}>Faça login</A>
                        </Text>
                    </Form>
                </div>
            </LoginComponent>
        )
    }
}

export default LoginForm;
