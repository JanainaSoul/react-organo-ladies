import Membro from '../Membro'
import './Comite.css'

const Comite = (props) => { //dumb component
    const css = { backgroundColor:props.corSecundaria }

    return (
        (props.membros.length > 0) && <section className="comite" style={css}> 
            <h4 style={{borderColor:props.corPrimaria}}>{props.nome}</h4> 
            <div className="membros">
            {props.membros.map(membro => <Membro 
                corDeFundo={props.corPrimaria}
                key={membro.nome} //aparece no card
                nome={membro.nome} 
                derbyName={membro.derbyName} 
                derbyNumber={membro.derbyNumber} 
                pronomes={membro.pronome} 
                modalidade={membro.modalidade} 
                imagem={membro.imagem} 
                comite={membro.comite} 
                subcomite={membro.subcomite}/>)}
            </div>
        </section>
        
    )
}

export default Comite
// se quiser pode usar ? no lugar de && e no final coloca :''