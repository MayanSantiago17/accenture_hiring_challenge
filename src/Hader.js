import './styles/Header.css'
 import { useState } from 'react';
 import { ModalPost } from './ModalPost';

function Header () {

    const [show, setShow] = useState(false);

    return(
        <header className="header-general">
        <p className="subtitle"> [ Make your life easier ] </p>
        <h1 className="main-title"> Discovering the World </h1>
        <button className="pencil-button" onClick={()=>setShow(true)}>pencil</button>
        <ModalPost onClose={()=>setShow(false)} show={show}/>
    </header>
    )
}
export {Header};