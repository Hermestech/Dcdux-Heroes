import StarButton from "./StarButton";
import { Card } from "antd";
import Meta from "antd/es/card/Meta";
import './HeroesList.css'

export default function CardComponent({imageUrl, name, comic, description, alterEgo}){
    return(
        <Card
            hoverable
            title={name}
            cover={<img alt={name} src={imageUrl} />}
       >
            <Meta title={comic} description={alterEgo} />
        </Card>
    )
}