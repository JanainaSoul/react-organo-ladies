import './ListaSuspensaSubComites.css'

const ListaSuspensaSubComites = (props) => {
    console.log(props.subcomites)
    return (
        <div className="lista-suspensa">
            <label>{props.label}</label>
            <select>
                {props.subcomites.map(item => <option key={item}>{item}</option>)}
            </select>
        </div>
    )
}

export default ListaSuspensaSubComites