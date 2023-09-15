import './App.css';
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import {useState} from "react";
import {HeaderContext} from "./utils/context";
import {CartContext} from "./utils/context";

function App() {
    const [headerStyle, setHeaderStyle] = useState('white');
    const [cart, setCart] = useState([]);
    const [isOverlayOpen, setIsOverlayOpen] = useState(false);
    const addToCart = (obj) => {
        const index = cart.findIndex(item => item.id === obj.id)
        let tmp = cart;
        if (index === -1)
            tmp.push(obj);
        else
            tmp[index].count += obj.count;
        setCart(tmp);
    }

    return (
        <div className="App">
            {isOverlayOpen && <div className={'overlay'} onClick={()=>setIsOverlayOpen(false)}/> }
            <CartContext.Provider value={{cart, addToCart, setIsOverlayOpen, isOverlayOpen}}>
                <Header headerStyle={headerStyle}/>
                <HeaderContext.Provider value={{setHeaderStyle}}>
                    <Main/>
                </HeaderContext.Provider>
            </CartContext.Provider>
            <Footer/>
        </div>
    );
}

export default App;
