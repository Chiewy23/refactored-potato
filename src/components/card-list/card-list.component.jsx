import Card from "./card/card.component";

import "./card-list.css";

const CardList = ({items}) => {
    return (
        <div className="card-list">
            {
                items.map(item => {
                    const { name, email, id } = item;
                    return <Card name={name} email={email} id={id} key={id} />
                })
            }
        </div>
    )
}

export default CardList;