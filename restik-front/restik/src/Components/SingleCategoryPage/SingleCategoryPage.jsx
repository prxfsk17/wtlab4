import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import "./SingleCategoryPage.css";
import { BASE_URL, STORAGE_ITEM } from "../../constants/constants";
import { useTranslation } from "react-i18next";


export const SingleCategoryPage = (props) => {
    const [isLoading, setIsLoading] = useState(true);
    const [dishes, setDishes] = useState([]);
    const { category_id } = useParams();
    const {t} = useTranslation();

    useEffect(() => {
        const getDishesInCategory = async () => {
            let url = BASE_URL + "single-category/" + category_id;
            let response = await fetch(url);
            const dishesInCategory = await response.json();
            setIsLoading(false);
            setDishes(dishesInCategory);
            return dishesInCategory
        }
        try {
            getDishesInCategory();
        } catch (error) {
            console.log(error.message);
        }

    }, [])

    const addToBasket = async (url) => {
        try {
            const response = await fetch(url, {
                method: "post",
                headers:{ 'Content-Type': 'application/json'},
                body: localStorage.getItem(STORAGE_ITEM),
            });
            if (response.status === 200) {
                console.log('good');
            }
        } catch (error) {

        }
    }
    return (
        <>
            <section class="single-category">
                <div class="container">
                    <h2 class="single-category-title">{t("single-cat-dishes")}</h2>
                    <div class="dishes">
                        <div class='dish-item-wrapper'>
                            {isLoading ? "Идёт загрузка..." :
                                dishes.map(dish => {
                                    return (
                                        <div class='dish-item'>
                                            <div>
                                                <div class='dish-item-img'>
                                                    <img src={dish.img} alt={dish.name} />
                                                    <span class='dish-item-price'>{dish.price} {t("currency")}</span>
                                                </div>
                                                <div class='dish-item-info'>
                                                    <h3 class='dish-item-title'>{dish.name}</h3>
                                                    <p class='dish-item-description'>
                                                        {dish.description}
                                                    </p>
                                                </div>
                                            </div>
                                            <button class='tobasket' onClick={() => addToBasket(`http://localhost:8080/single-category/${dish.dish_id}/${category_id}/add-to-basket`)}>{t("single-cat-add-to-basket")}</button>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}