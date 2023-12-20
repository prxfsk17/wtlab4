import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./../LoginPage/LoginPage.css";

export const RegistrationPage = () => {
    const [userData, setUserData] = useState({
        username: '',
        password: '',
        email: '',
    })
    const navigator = useNavigate();
    const { t } = useTranslation();

    const submitHandler = async (e) => {
        e.preventDefault();

        const url = "http://localhost:8080/registration";
        const response = await fetch(url, {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(userData),
        });
        if (response.status === 200) {
            const user = await response.json();
            localStorage.setItem("@Restik_usin", JSON.stringify(user));
            navigator("/");


        }
    }
    const changeHandle = (e) => {
        const { name, value } = e.target;
        setUserData({ ...userData, [name]: value });
    }
    return (
        <div class="wrapper">
            <div className="wrap">
                <h1 class="title">{t("auth-register-title")}</h1>
                <form method="POST" className="auth-form" onSubmit={submitHandler}>
                    <div class="input-wrap">
                        <label>{t("auth-login")}</label>
                        <input class="inp" type="text" name="username" id="username" value={userData.username} autoComplete="off" onChange={changeHandle} />
                    </div>
                    <div class="input-wrap">
                        <label>{t("auth-password")}</label>
                        <input class="inp" type="password" name="password" id="password" value={userData.password} onChange={changeHandle} />
                    </div>
                    <div class="input-wrap">
                        <label>Email</label>
                        <input class="inp" type="email" name="email" id="email" value={userData.email} autoComplete="off" onChange={changeHandle} />
                    </div>
                    <input type="hidden" name="command" value="REGISTRATE" />
                    <div class="buttons">
                        <input class="loginbtn" type="submit" name="register" value={t("auth-register-btn")} />
                    </div>
                    <a class="regbtn" href="login">{t("auth-signIn-btn")}</a>
                </form>
            </div>

        </div>

    )
}