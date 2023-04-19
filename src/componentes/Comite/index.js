import Membro from '../Membro'
import './Comite.css'

const Comite = (props) => { //dumb component
    const css = { backgroundColor:props.corSecundaria }

    return (
        <section className="comite" style={css}>
            <h3 style={{borderColor:props.corPrimaria}}>{props.nome}</h3> 
            <Membro />
            <Membro />
        </section>
    )
}

export default Comite