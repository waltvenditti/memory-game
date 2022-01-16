

function Card(props) {
    return (
      <div className="card" onClick={props.incrementScore}>
        <img src={props.chem.structure} alt={props.chem.name} width="200px"/>
        <p>{props.chem.name}</p>
      </div>
    )
}




export default Card;