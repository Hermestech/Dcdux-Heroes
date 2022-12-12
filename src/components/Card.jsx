import StarButton from "./StarButton";
import { Card } from "antd";
import Meta from "antd/es/card/Meta";
import './HeroesList.css'
import { Link } from "react-router-dom";

export default function CardComponent({imageUrl, name, comic, alterEgo,id}){
    return(
        <Link to={`hero/${id}`}>
            <Card
                hoverable
                title={name}
                cover={<img alt={name} src={imageUrl} />}
        >
                <Meta title={comic} description={alterEgo} />
            </Card>
        </Link>
    )
}