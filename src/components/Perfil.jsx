import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

const Perfil = () => {
    let nome = "Felipe Davi Nascimento Lopes"
    let imgUrl = "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
    let descricao = "Neste trabalho, exploraremos os principais desafios e oportunidades no campo da inteligência artificial, destacando suas implicações para o futuro da tecnologia e da sociedade."
    return (
        <div>
            <h1>{nome}</h1>
            <img src={imgUrl} width={100} alt="Profile Img"/>
            <p>{descricao}</p>
            <button className="btn btn-primary">Botão do jeito antigo</button>
            <Button variants="primary">Botão do jeito novo</Button>{' '}
        </div>
    )
}

export default Perfil