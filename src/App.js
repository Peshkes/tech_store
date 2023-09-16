import './App.css';
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import {useState} from "react";
import {HeaderContext} from "./utils/context";
import {CartContext} from "./utils/context";
import {productsArr} from "./utils/productsConst";
import {promoCodes} from "./utils/constants";

function App() {
    const [headerStyle, setHeaderStyle] = useState('white');
    const [cart, setCart] = useState([]);
    const [money, setMoney] = useState({
        preTotal: 0,
        sale: 0,
        total: 0
    });
    const [isOverlayOpen, setIsOverlayOpen] = useState(false);

    const calculateMoney = (sum = 0) => {
        const tmpMoney = {...money};
        tmpMoney.preTotal += sum;
        if (tmpMoney.sale === 0)
            tmpMoney.total = tmpMoney.preTotal;
        else
            tmpMoney.total = tmpMoney.preTotal / 100 * (100 - tmpMoney.sale);
        setMoney(tmpMoney);
    }
    const addToCart = (obj) => {
        const index = cart.findIndex(item => item.id === obj.id);
        const price = productsArr.find(item => item.id === obj.id).price;
        if (index === -1){
            setCart([...cart, obj]);
        }
        else{
            const tmpCart = [...cart];
            tmpCart[index].count += obj.count;
            setCart(tmpCart);
        }
        calculateMoney(price * obj.count);
    }

    const deleteProduct = (id) => {
        const tmpCart = [...cart];
        const index = tmpCart.findIndex(item => item.id === id);
        const count = tmpCart[index].count;
        const price = productsArr.find(item => item.id === id).price;
        tmpCart.splice(index, 1);
        setCart(tmpCart);
        calculateMoney(-price * count);
    }

    const changeCount = (id, count) => {
        const tmpCart = [...cart];
        const index = tmpCart.findIndex(item => item.id === id);
        const price = productsArr.find(item => item.id === id).price;
        const prevCount = tmpCart[index].count;
        tmpCart[index].count = count;
        if (count === 0){
            tmpCart.splice(index, 1);
        }
        setCart(tmpCart);
        calculateMoney(price * (count - prevCount));
    }

    const checkPromoCode = (promoCode) => {
        const index = promoCodes.findIndex(item => item.string === promoCode.toLowerCase());
        if (index !== -1){
            money.sale = promoCodes[index].sale;
            calculateMoney();
        }
        else
            alert('Промокод не найден :(');
    }

    return (

        <div className="App">
            {isOverlayOpen && <div className={'overlay'} onClick={()=>setIsOverlayOpen(false)}/> }
            <CartContext.Provider value={{cart, addToCart, deleteProduct, changeCount, checkPromoCode, money, setMoney, setIsOverlayOpen, isOverlayOpen}}>
                <Header headerStyle={headerStyle}/>
                <HeaderContext.Provider value={{setHeaderStyle, headerStyle}}>
                    <Main/>
                </HeaderContext.Provider>
            </CartContext.Provider>
            <Footer/>
        </div>
    );
}

export default App;
