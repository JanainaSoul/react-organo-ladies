import './ListaSuspensaModalidades.css'

const ListaSuspensaModalidades = (props) => {
    //console.log(props.modalidades)
    return (
        <div className="lista-suspensa">
            <label>{props.label}</label>
            <select onChange={evento => props.aoPreencher(evento.target.value)} required={props.obrigatorio} value={props.value}>
                {props.modalidades.map(item => <option key={item}>{item}</option>)}
            </select>
        </div>
    )
}

export default ListaSuspensaModalidades