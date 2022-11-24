export default function Card(props) {
    let badgeText;
    if (props.openSpots === 0) {
        badgeText = "Sold Out"
    } else if (props.location === "Online") {
        badgeText = "Online"
    }

    return (
        <div className="card" >
            <img src={require(`../images/${props.img}`)} />
            <div className="info" >
                <img src={require(`../images/${props.star}`)} />
                <span className="rate">{props.rate}</span>
                <span>{props.reviewCount}</span>
                <span className="country">{props.country}</span>
            </div>
            <p className="title">{props.title}</p>
            <div className="price"><strong>From $<span className="thePrice">{props.price}</span></strong> / person</div>
            {badgeText && <div className="openSpots"> <h3>{badgeText}</h3></div>}
        </div>
    )
}