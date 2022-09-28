import React from "react";
import './Login.scss';

const Login = () => {
    return(
        <div id="login">
            <h1 className="title">Login do Sistema</h1>
            <form className="form">
               <div className="field">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" />
               </div>
               <div className="field">
                    <label htmlFor="password">Senha</label>
                    <input type="email" name="email" id="email" />
               </div>
               <div className="actions">
                <button type="submit">ENTRAR</button>
               </div>               
            </form>
        </div>
    );
};

export default Login;