import './App.css';
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import {useState} from "react";
import {HeaderContext} from "./utils/context";
import {PagesContext} from "./utils/PagesContext";

function App() {
    const [headerStyle, setHeaderStyle] = useState('white');

    const [page, setPage] = useState('home');

    return (
        <div className="App">
            <Header headerStyle={headerStyle}/>
            <PagesContext.Provider value={{page, setPage}}>
                <HeaderContext.Provider value={{setHeaderStyle}}>
                    <Main/>
            </HeaderContext.Provider>
            </PagesContext.Provider>
            <Footer/>
        </div>
    );
}

export default App;
