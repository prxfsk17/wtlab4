import React from "react";
import "./MainPage.css"
import { Link } from "react-router-dom";
import { LanguageToggler } from "../LanguageToggler/LanguageToggler";
import { useTranslation } from "react-i18next";

export const MainPage = () => {
    const {t} = useTranslation();
    return (
        <>
            <LanguageToggler />
            <section class="main-screen">
                <div class="container">
                    <div class="main-screen-img">
                    </div>
                </div>
            </section>
            <section id="menu" class="menu-categories">
                <div class="container">
                    <h2 class="menu-categories-title">{t("main-menu")}</h2>
                    <div class="menu-items">
                        <Link className="menu-category-btn" to="single-category/1">
                            <div class="menu-item">
                                <div class="menu-category-img" id="breakfast">
                                    <span class="menu-category-title">{t("main-breakfast")}</span>
                                </div>
                            </div>
                        </Link>

                        <Link className="menu-category-btn" to="single-category/2">
                            <div class="menu-item">
                                <div class="menu-category-img" id="soup">
                                    <span class="menu-category-title">{t("main-soup")}</span>
                                </div>
                            </div>
                        </Link>

                        <Link className="menu-category-btn" to="single-category/3">
                            <div class="menu-item">
                                <div class="menu-category-img" id="deserts">
                                    <span class="menu-category-title">{t("main-deserts")}</span>
                                </div>
                            </div>
                        </Link>

                        <Link className="menu-category-btn" to="single-category/4">
                            <div class="menu-item">
                                <div class="menu-category-img" id="street-food">
                                    <span class="menu-category-title">{t("main-streetfood")}</span>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            </section>
        </>
    )
}