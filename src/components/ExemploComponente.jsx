import React, {useState, useState} from "react";

const ExemploComponente = () => {
    const [data, setData] = useState([]);
    
    useEffect(() =>{
        // esse trecho de código será executado 
        // esse trecho também é renderizado quando algum dos estados alterados nas dependencias tambem acontecer.

        // exemplo de uso: buscasr dados de uma api
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(data =>{
                setData(data);
                console.log(data) // o log está sendo mostrado 2x por causa do <react.strickMode>
            });
    }, []); //o segundo argumento é uma lista de 'estados de dependencia' que, se alterados, irão aplicar esse efeito novamente
            //se estiver vazio, qualquer alteração de estados do componente causa uma renderização

    // utiliza a função map do javascript para imprimir os elementos html do componente
    return data.map(({ id, name }) => (
        <p key={id}>
            <span>{id} - {name}</span>
        </p>
    ))        
}

export default ExemploComponente