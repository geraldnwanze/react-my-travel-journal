function Travel(props) {
    return (
        <>
        <div className="card">
            <div className="card--image--box">
                <img src={props.item.imageUrl} alt={props.item.title} className="card--image" />
            </div>
            <div className="card--info--box">
                <div className="card--info--location--box">
                    <div className="card--info--location">{props.item.location}</div>
                    <div className="card--info--map">
                        <a className="gray" href={props.item.googleMapsUrl} rel="noreferrer" target="_blank">View on Google Maps</a>
                    </div>
                </div>
                <h1>{props.item.title}</h1>
                <div className="date">{props.item.startDate} - {props.item.endDate}</div>
                <div className="description">{props.item.description}</div>
            </div>
        </div>
        <hr />
        </>
    )
}

export default Travel;