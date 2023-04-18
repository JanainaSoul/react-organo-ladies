import './ListaSuspensaUm.css'

const ListaSuspensaUm = (props) => {
    console.log(props.comites)
    return (
        <div className="lista-suspensa">
            <label>{props.label}</label>
            <select>
                {props.comites.map(item => <option key={item}>{item}</option>)}
            </select>
        </div>
    )
}

export default ListaSuspensaUm