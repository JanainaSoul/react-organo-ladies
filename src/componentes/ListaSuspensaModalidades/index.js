import './ListaSuspensaModalidades.css'

const ListaSuspensaModalidades = (props) => {
    console.log(props.modalidades)
    return (
        <div className="lista-suspensa">
            <label>{props.label}</label>
            <select>
                {props.modalidades.map(item => <option key={item}>{item}</option>)}
            </select>
        </div>
    )
}

export default ListaSuspensaModalidades