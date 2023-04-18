import './CampoTexto.css'
import { useState} from 'react'

const CampoTexto = (props) => { //props = propriedades

    const placeholderModificada = `${props.placeholder}...`

    const aoPreencher = (evento) => {
        props.aoPreencher(evento.target.value)
    }
    
    return (
        <div className= "campo-texto">
            <label>
                {props.label}
            </label>
            <input value={props.valor} onChange={aoPreencher} required={props.obrigatorio} placeholder={placeholderModificada} />
        </div>
    )
}

export default CampoTexto