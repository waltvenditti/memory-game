

function Card(props) {
    return (
      <div className="card" onClick={props.incrementScore}>
        <img src={props.chem} alt={props.chemName} width="200px"/>
        <p>{props.chemName}</p>
      </div>
    )
}




export default Card;