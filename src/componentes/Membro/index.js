import './Membro.css'

const Membro = ({nome, derbyName, derbyNumber, imagem, pronomes, modalidade, comite, subcomite}) => {
    return (
        <div className="colaborador">
            <div className="cabecalho">
                <img src={imagem} alt={nome}/>
            </div>
            <div className="rodape">
                <h3 className="nome">{nome}</h3><br></br>
                <h3 className="derby-name">{derbyName}</h3><br></br>
                <h3 className="derby-number">{derbyNumber}</h3><br></br>
                <h3 className="pronome">{pronomes}</h3><br></br>
                <h4 className="modalidade">{modalidade}</h4><br></br>
                <h4 >{comite}</h4><br></br>
                <h4 className="subcomite">{subcomite}</h4>
            </div>
        </div>
    )
}

export default Membro