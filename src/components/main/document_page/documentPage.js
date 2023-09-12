import React, {useContext, useEffect} from 'react';
import style from './documentPage.module.css';
import {HeaderContext} from "../../../utils/context";
import {useNavigate, useParams} from "react-router-dom";
import {documents} from "../../../utils/constants";
import BreadCrumbs from "../bread_crumbs/BreadCrumbs";

const DocumentPage = () => {
    const {setHeaderStyle, headerStyle} = useContext(HeaderContext);
    const navigate = useNavigate();
    const params = useParams();
    const document = documents.find(item => item.route === params.document)

    useEffect(() => {
        if (!document)
            navigate('/error');
        if ('white' !== headerStyle)
            setHeaderStyle('white');
    }, []);
    return (
        <div className={style.documentPage}>
            <div className={'narrow'}>
                <BreadCrumbs/>
                <h3>{document && document.name}</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aperiam dolores eaque expedita!
                    Dignissimos eos facilis nam necessitatibus porro qui repellat sequi tenetur? Blanditiis odit
                    praesentium
                    quibusdam velit. At autem dolorum esse illum laudantium! Ab accusamus accusantium architecto
                    consequuntur
                    cum dolores ea eligendi, enim et eum explicabo, facilis fuga fugit hic ipsa ipsam iusto laboriosam
                    laudantium magni maxime nam necessitatibus numquam officia officiis quaerat quia quisquam quod quos
                    recusandae repellendus reprehenderit repudiandae tempore tenetur, totam velit vitae voluptatem.
                    Blanditiis
                    dolor laboriosam repudiandae. Ab, accusamus alias amet atque autem deleniti ea eveniet harum hic
                    illo in
                    inventore maiores non, odio officiis rem suscipit ullam voluptatibus. Aperiam consectetur
                    cupiditate,
                    debitis delectus et ex exercitationem itaque labore laudantium minima nisi odio quis quos
                    repellendus rerum
                    sed sequi suscipit tenetur totam veniam! Ad assumenda cumque delectus deserunt earum ipsum laborum
                    magni
                    nulla optio vero. At cum cupiditate doloremque ea modi nihil nostrum quam, quas quo rem repudiandae
                    sed
                    totam veritatis. Aspernatur consequuntur deleniti distinctio, doloremque expedita illo magnam magni
                    ratione
                    reprehenderit velit. Animi autem enim ipsam maiores, sit totam velit veritatis? Aliquam asperiores
                    beatae
                    dolore ea est impedit labore, nesciunt quibusdam. Doloribus fuga inventore porro quod reiciendis!
                    Adipisci
                    consequuntur laboriosam molestias quasi quidem vero.</p>
            </div>
        </div>
    );
};

export default DocumentPage;