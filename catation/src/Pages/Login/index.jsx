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

                <div className='labelLogin'>
                    <div className="email">
                    <label htmlFor="email" className='label'>
                        <img className='icon' src={user}></img>
                        <input type={'email'} name='email' id='email' placeholder='Insira seu e-mail' />
                    </label>
                   
                    </div>
                    <div className="senha">
                    <label htmlFor="senha" className='label'>
                        <img className='icon' src={lock}></img>
                        <input type={"password"} name='senha' id='senha' placeholder='Insira sua senha'/>
                    </label>
                        </div>
                    <button type={'submit'}><a href='./home'>Entrar</a></button>
                    <button type={'submit'}><a href='./home'>Entrar com google</a></button>
                    <a href="">Esqueci minha senha</a>
                    <div className="line2"></div>
                    <h4>Ainda não tenho uma <a href="">Conta</a></h4>
                </div>
            </div>
        </div>
    );
  }
  
  export default Login;
  