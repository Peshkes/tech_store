import './App.css';
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import {useState} from "react";
import {HeaderContext} from "./utils/context";

function App() {
    const [headerStyle, setHeaderStyle] = useState('white');

    return (
        <div className="App">
            <Header headerStyle={headerStyle}/>
                <HeaderContext.Provider value={{setHeaderStyle}}>
                    <Main/>
            </HeaderContext.Provider>
            <Footer/>
        </div>
    );
}

export default App;
