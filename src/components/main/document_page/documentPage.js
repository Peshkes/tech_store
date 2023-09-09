import React, {useContext, useEffect} from 'react';
import style from './documentPage.module.css';
import {HeaderContext} from "../../../utils/context";

const DocumentPage = () => {
    const {setHeaderStyle, headerStyle} = useContext(HeaderContext);

    useEffect(() => {
        if ('white' !== headerStyle)
            setHeaderStyle('white');
    }, []);
    return (
        <div>
            Doc
        </div>
    );
};

export default DocumentPage;