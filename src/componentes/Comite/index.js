import Membro from '../Membro'
import './Comite.css'

const Comite = (props) => { //dumb component
    const css = { backgroundColor:props.corSecundaria }

    return (
        <section className="comite" style={css}>
            <h3 style={{borderColor:props.corPrimaria}}>{props.nome}</h3> 
            <div classname="membros">
            {props.membros.map(membros => <Membro 
                nome={membros.nome} 
                derbyName={membros.derbyName} 
                derbyNumber={membros.derbyNumber} 
                pronomes={membros.pronome} 
                modalidade={membros.modalidade} 
                imagem={membros.imagem} 
                comite={membros.comite} 
                subcomite={membros.subcomite}/>)}
            </div>
        </section>
    )
}

export default Comite