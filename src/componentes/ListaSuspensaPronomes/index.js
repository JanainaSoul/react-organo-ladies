import './ListaSuspensaPronomes.css'

const ListaSuspensaPronomes = (props) => {
    console.log(props.pronomes)
    return (
        <div className="lista-suspensa">
            <label>{props.label}</label>
            <select>
                {props.pronomes.map(item => <option key={item}>{item}</option>)}
            </select>
        </div>
    )
}

export default ListaSuspensaPronomes