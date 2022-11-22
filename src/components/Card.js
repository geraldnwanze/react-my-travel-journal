import Travels from "../data/Travel.json";
import Travel from "./Travel";

const travel = Travels.map(travel => {
    return <Travel key={travel.id} item={travel} />
})

function Card() {
    return (
        <section className="card--list">
            {travel}
        </section>
    )
}

export default Card;