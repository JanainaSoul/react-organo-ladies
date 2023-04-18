import './ListaSuspensa.css'

const ListaSuspensaComites = (props) => {
    
    return (
        <div className="lista-suspensa">
            <label>{props.label}</label>
            <select onChange={evento => props.aoPreencher(evento.target.value)} required={props.obrigatorio} value={props.value}>
                {props.comites.map(item => <option key={item}>{item}</option>)}
            </select>
        </div>
    )
}

export default ListaSuspensaComites