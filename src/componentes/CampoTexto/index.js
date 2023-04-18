import './CampoTexto.css'

const CampoTexto = (props) => { //props = propriedades

    const placeholderModificada = `${props.placeholder}...`

    let valor = 'Guilherme Silveira'

    const aoPrencher = (evento) => {
        valor = evento.target.value
        console.log(valor)
    }
    
    return (
        <div className= "campo-texto">
            <label>
                {props.label}
            </label>
            <input value={valor} onChange={aoPrencher} required={props.obrigatorio} placeholder={placeholderModificada} />
        </div>
    )
}

export default CampoTexto