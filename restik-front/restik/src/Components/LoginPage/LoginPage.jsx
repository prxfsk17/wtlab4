import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./LoginPage.css";

export const LoginPage = () => {
    const [userData, setUserData] = useState({
        username: '',
        password: '',
    })
    const navigator = useNavigate();
    const {t} = useTranslation();

    const submitHandler = async (e)=> {
        e.preventDefault();

        const url = "http://localhost:8080/signIn";
        const response = await fetch(url, {
            method: 'post',
            headers:{ 'Content-Type': 'application/json'},
            body: JSON.stringify(userData),
        });
        if(response.status === 200){
            const user = await response.json();
            if(user.role === 'USER'){
                localStorage.setItem("@Restik_usin", JSON.stringify(user));
                navigator("/");
            }else{
                navigator("/admin");
            }
           
        }
    }
    const changeHandle = (e)=>{
        const {name, value} = e.target;
        setUserData({...userData, [name]: value});
    }

    return (
        <div class="wrapper">
            <div className="wrap">
                <h1 class="title">{t("auth-signIn-title")}</h1>
                <form method="POST" className="auth-form" onSubmit={submitHandler}>
                    <div class="input-wrap">
                        <label>{t("auth-login")}</label>
                        <input class="inp" type="text" name="username" id="username" value={userData.username} autoComplete="off" onChange={changeHandle}/>
                    </div>
                    <div class="input-wrap">
                        <label>{t("auth-password")}</label>
                        <input class="inp" type="password" name="password" id="password" value={userData.password} onChange={changeHandle}/>
                    </div>
                    <div class="buttons">
                        <input class="loginbtn" type="submit" name="login" value={t("auth-signIn-btn")} />
                    </div>
                    <a class="regbtn" href="/registration">{t("auth-register-btn")}</a>
                </form>
            </div>

        </div>

    )
}