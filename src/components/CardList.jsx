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
        favorite={hero.favorite}
        />)
}

export default function CardList({ heroes, searchedHeroes, valueInput }){

    if (valueInput.length > 1 && searchedHeroes.length === 0) {
        return (
            <div className="HeroesList">
                <h1>No results found</h1>
            </div>
        )
    }

    if(searchedHeroes.length > 0){
        return (
            <div className="HeroesList">
            {
                mapHeroesToCards(searchedHeroes)
            }
            </div>
        )
    }


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