import React from 'react';
import style from './main.module.css';
import {Route, Routes} from "react-router-dom";
import BlogPage from "./blog_page/BlogPage";
import HomePage from "./home_page/HomePage";
import ProductsPage from "./products_page/ProductsPage";
import CartPage from "./cart_page/CartPage";
import ProfilePage from "./profilePage/ProfilePage";
import ErrorPage from "./error_page/ErrorPage";
import ArticlePage from "./article_page/ArticlePage";
import DocumentPage from "./document_page/documentPage";

const Main = () => {
    return (
        <div className={style.main}>
            <Routes>
                <Route element={<HomePage/>} path={"/"}></Route>
                <Route element={<ProductsPage/>} path={"products"}>
                    <Route element={<ProductsPage/>} path={":sort"}></Route>
                </Route>
                <Route element={<BlogPage/>} path={"blog"}></Route>
                <Route element={<ArticlePage/>} path={"blog/:articleId"}/>
                <Route element={<CartPage/>} path={"cart"}></Route>
                <Route element={<ProfilePage/>} path={"profile"}>
                    <Route element={<ProfilePage/>} path={":action"}/>
                </Route>
                <Route element={<DocumentPage/>} path={":document"}/>
                <Route element={<ErrorPage/>} path={"*"}/>
            </Routes>
        </div>
    );
};
export default Main;