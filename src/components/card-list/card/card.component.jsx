import "./card.css";

const Card = ({ name, email, id }) => {
    return (
        <div className="card-container">
            <img alt={`monster ${name}`} src={`https://robohash.org/${id}?set=set2&180x180`} />
            <h2>{ name }</h2>
            <p>{ email }</p>
        </div>
    )
}

export default Card;