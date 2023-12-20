import React from "react";
import "./Navbar.css"
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

export const Navbar = () => {
    const isAuth = localStorage.getItem("@Restik_usin") ? true: false;
    const {t} = useTranslation();
    const navigate = useNavigate();
    const signOut = async ()=> {
        try {
            const url = "http://localhost:8080/signOut";
            const response = await fetch(url, {method: 'post'});
            if(response.status === 200){
                localStorage.removeItem("@Restik_usin");
                navigate('/');
            }
            
        } catch (error) {
            
        }
    }
    return (
        <header>
            <div className="container">
                <div className="navigation-bar">
                    <div className="brand">
                        <h1><a href="/">Restik</a></h1>
                    </div>
                    <nav className="navigation">
                        <ul className="navigation-list">
                            <li className="navigation-list-item"><Link to="/">{t("nav-main")}</Link></li>
                            <li className="navigation-list-item"><Link to="/#menu">{t("nav-menu")}</Link></li>
                            <li className="navigation-list-item"><Link to="/basket">{t("nav-basket")}</Link></li>
                            <li className="navigation-list-item"><Link id="tel" to="tel:+375331112233">+375(33)111-22-33</Link></li>
                            <li className="navigation-list-item">
                                {
                                    isAuth ?
                                     <Link className="loginbtn" to="/" onClick={signOut}>{t("nav-signOut")}</Link> :
                                     <Link className="loginbtn" to="/login">{t("nav-signIn")}</Link>
                                }
                                
                                </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}