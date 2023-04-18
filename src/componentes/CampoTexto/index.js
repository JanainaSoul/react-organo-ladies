import './CampoTexto.css'

const CampoTexto = (props) => { //props = propriedades

    const placeholderModificada = `${props.placeholder}...`
    
    return (
        <div className= "campo-texto">
            <label>
                {props.label}
            </label>
            <input required={props.obrigatorio} placeholder={placeholderModificada} />
        </div>
    )
}

export default CampoTexto