import { Card } from "antd";
import Meta from "antd/es/card/Meta";
import './HeroesList.css'
import { Link } from "react-router-dom";
import './Card.css'


export default function CardComponent({imageUrl, name, comic, alterEgo,id, favorite}){
    return(
        <Link to={`superheroes/${id}`}>
            <Card
                hoverable
                title={name}
                cover={<img alt={name} src={imageUrl} className='image'/>}
        >
                <Meta title={comic} description={alterEgo} />
            </Card>
        </Link>
    )
}