import './Membro.css'

const Membro = ({nome, derbyName, derbyNumber, imagem, pronomes, modalidade, comite, subcomite, corDeFundo}) => {
    return (
        <div className="colaborador">
            <div className="cabecalho" style={{ backgroundColor: corDeFundo}}>
                <img src={imagem} alt={nome}/>
            </div>
            <div className="rodape">
                <h4 className="nome">{nome}</h4><br></br>
                <h4 className="derby-name">{derbyName}</h4><br></br>
                <h4 className="derby-number">{derbyNumber}</h4><br></br>
                <p className="pronome">{pronomes}</p><br></br>
                <p className="modalidade">{modalidade}</p><br></br>
                <p >{comite}</p><br></br>
                <p className="subcomite">{subcomite}</p>
            </div>
        </div>
    )
}

export default Membro