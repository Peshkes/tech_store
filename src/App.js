import './App.css';
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import {useState} from "react";
import {HeaderContext} from "./utils/context";
import {CartContext} from "./utils/context";

function App() {
    const [headerStyle, setHeaderStyle] = useState('white');
    const [cart] = useState([]);
    const [isOverlayOpen, setIsOverlayOpen] = useState(false);

    return (
        <div className="App">
            {isOverlayOpen && <div className={'overlay'} onClick={()=>setIsOverlayOpen(false)}/> }
            <CartContext.Provider value={{cart, setIsOverlayOpen, isOverlayOpen}}>
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
