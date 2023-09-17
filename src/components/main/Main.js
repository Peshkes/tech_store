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
import ProductPage from "./product_page/ProductPage";

const Main = () => {

    return (
        <div className={style.main}>
            <Routes>
                <Route element={<HomePage/>} path={"/"}>
                    <Route element={<HomePage/>} path={':page_number'}/>
                </Route>

                <Route element={<ProductsPage/>} path={"products"}>
                    <Route element={<ProductsPage/>} path={":sort"}/>
                </Route>

                <Route element={<ProductPage/>} path={'product'}/>
                <Route element={<ProductPage/>} path={"product/:productId"}/>


                <Route element={<BlogPage/>} path={"blog"}>
                    <Route element={<BlogPage/>} path={':page_number'}/>
                </Route>

                <Route element={<ArticlePage/>} path={"articles/:articleId"}/>

                <Route element={<ProfilePage/>} path={"profile"}/>
                <Route element={<ProfilePage/>} path={"profile/:action"}/>

                <Route element={<CartPage/>} path={"cart"}/>
                <Route element={<DocumentPage/>} path={"documents/:document"}/>
                <Route element={<ErrorPage/>} path={"*"}/>
            </Routes>
        </div>
    );
};
export default Main;