import './ListaSuspensaPronomes.css'

const ListaSuspensaPronomes = (props) => {
    //console.log(props.pronomes)
    return (
        <div className="lista-suspensa">
            <label>{props.label}</label>
            <select onChange={evento => props.aoPreencher(evento.target.value)} required={props.obrigatorio} value={props.value}>
                {props.pronomes.map(item => <option key={item}>{item}</option>)}
            </select>
        </div>
    )
}

export default ListaSuspensaPronomes