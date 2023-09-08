import slide1 from '../images/slider/slide1.webp';
import slide2 from '../images/slider/slide2.webp';
export const menuList = [
    {name:'Ноутбуки', route: 'products/laptops'},
    {name:'Телефоны', route: 'products/phones'},
    {name:'Наушники', route: 'products/headphones'},
    {name:'Блог', route: 'blog'}
];

export const slideList = [
    {title: 'WH-1000XM5', subtitle: 'New era of noise suppression', image: slide1, productId:7},
    {title: 'IPhone 15 Pro', subtitle: 'Color: Deep Pink', image: slide2, productId:6}
];

export const pages = [
    {name: 'Главная', route: ''},
    {name: 'Блог', route: 'blog'},
    {name: 'Профиль', route: 'profile'},
    {name: 'Авторизация', route: 'auth'},
    {name: 'Регистрация', route: 'reg'},
    {name: 'Профиль', route: 'profile'},
    {name: 'Оформление заказа', route: 'checkout'},
    {name: 'Корзина', route: 'cart'},
    {name: 'Товары', route: 'products'},
    {name: 'Политика конфиденциальности', route: 'privacy_policy'},
    {name: 'Условия предоставления услуг', route: 'terms_of_services'},
    {name: 'Возврат', route: 'return'},
    {name: 'Способы оплаты', route: 'payment_methods'},
]