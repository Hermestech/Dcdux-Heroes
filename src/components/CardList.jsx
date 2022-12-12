import CardComponent from "./Card";

function mapHeroesToCards(heroes){
    return heroes.map(hero => <CardComponent 
        imageUrl={hero.imgUrl} 
        name={hero.name} 
        comic={hero.comic}
        description={hero.description}
        alterEgo={hero.alterEgo}
        id={hero.id}
        key={hero.id}
        />)
}

export default function CardList({heroes}){
    return (
        <div className="HeroesList">
        {
            mapHeroesToCards(heroes)
        }
        </div>
    )

}

CardList.defaultProps = {
    heroes: Array(10).fill('')
}