import './Membro.css'

const Membro = ({nome, derbyName, derbyNumber, imagem, pronome, modalidade, comite, subcomite}) => {
    return (
        <div className="colaborador">
            <div className="cabecalho">
                <img src={imagem} alt={nome}/>
            </div>
            <div className="rodape">
                <h3>{nome}</h3><br></br>
                <h3>{derbyName}</h3><br></br>
                <h3>{derbyNumber}</h3><br></br>
                <h3>{pronome}</h3><br></br>
                <h4>{modalidade}</h4><br></br>
                <h4>{comite}</h4><br></br>
                <h4>{subcomite}</h4>
            </div>
        </div>
    )
}

export default Membro