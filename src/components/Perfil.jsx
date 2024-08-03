import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

const Perfil = ({nome}) => {
    const [texto, setTexto] = useState('Neste trabalho, exploraremos os principais desafios e oportunidades no campo da inteligência artificial, destacando suas implicações para o futuro da tecnologia e da sociedade.')
    const [inputText, setInputText] = useState('Valor Inicial')
    let imgUrl = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'

    const updateInputValue = (e) => {
        setInputText(e.target.value);
        console.log(e.target.value)
    }

    const mudarTexto = () => {
        setTexto(inputText);
    }

    return (
        <div className='border border-1 border-secondary my-2'> 
            <h1>{nome}</h1>
            <img src={imgUrl} width={100} alt='Profile Img'/>
            <p>{texto}</p>
            <input type='text' className='form-control' id='id-input-text' value={inputText} onChange={updateInputValue}/>
            <button className='btn btn-primary' onClick={mudarTexto}>Botão Mudar Texto</button>
        </div>
    )

}

export default Perfil