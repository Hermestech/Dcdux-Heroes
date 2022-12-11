import { Input } from 'antd';

export default function InputSearch(){
    return (
        <Input.Search
        placeholder="input search text"
        style={{marginBottom: 10}}
        onSearch={value => console.log(value)}
        />
    )
}