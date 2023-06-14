import React from 'react';
import "./Login.css";

    function Login() {
        return(
        <div className="login-img">
            <img className="phone-img" alt="iPhone" src="public/images/img1.png">
             <div className="loginBorder">
                <header className="loginLogo">
                    <p>Westagram</p>
                </header>
                <section className="loginBox">
                    <div className="loginId">
                        <input className="loginField" type="text" placeholder="전화번호, 사영자 이름 또는 이메일" />
                    </div>
                    <div className="loginPassword">
                        <input className="passwordField" type="password" placeholder="비밀번호" />
                    </div>
                    <div className="btnField">
                        <button class="loginBtn">로그인</button>
                    </div>
                </section>
                <section className="passwordFind">
                    <a href="#!"><p>비밀번호를 잊으셨나요 ?</p></a>
                </section>
             </div>  
            </img>
        </div>
                 
        )
    }
export default Login;