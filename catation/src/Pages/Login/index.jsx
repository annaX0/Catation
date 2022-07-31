import logo  from '../../Assets/logo.png'
import user  from '../../Assets/user.svg'
import lock  from '../../Assets/lock.svg'

import  '../Login/index.css'
import { useRef } from 'react';

function Login() {
    return (
        <div className="container">
            <div className="box">
                <div className="logo">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h2>Catation</h2>
                </div>
                <div className="title">
                    <div className="line1"></div>
                    <h3>Login</h3>
                    <div className="line1"></div>
                </div>

                <div>
                    <label htmlFor="email">
                        <img src={user}></img>
                    </label>
                    <input type={'email'} name='email' id='email' placeholder='Insira seu e-mail' />
                    <label htmlFor="senha">
                        <img src={lock}></img>
                    </label>
                        <input type={"password"} name='senha' id='senha' placeholder='Insira sua senha'/>
                    <button type={'submit'}>Login</button>
                    <p>Esqueci minha senha</p>
                    <div className="line1"></div>
                    <h4>Ainda não tenho uma</h4><a href="">Conta</a>
                </div>
            </div>
        </div>
    );
  }
  
  export default Login;
  