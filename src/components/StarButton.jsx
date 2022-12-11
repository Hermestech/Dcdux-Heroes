import { Button } from 'antd'
import { StarOutlined, StarFilled } from '@ant-design/icons'

export default function StarButton({ isFavorite, onClick }) {
    return (
        <Button
        type="text"
        icon={isFavorite ? <StarFilled /> : <StarOutlined />}
        onClick={onClick}
        />
    )
}