import * as React from 'react'
import { useDispatch } from 'react-redux';
import { setFilter } from '../slices/dataSlice';
import { setValueInputSearch } from '../slices/uiSlice';
import { Input } from 'antd';

export default function InputSearch(){
    const [valueInput, setValueInput] = React.useState('')
    const dispatch = useDispatch()

    const handleSearch = (e) => {
        setValueInput(e)
        dispatch(setValueInputSearch(e))
    }

    React.useEffect(() => {
        dispatch(setFilter(valueInput))
    }, [valueInput, dispatch])

    return (
        <Input.Search
        placeholder="type a superhero name..."
        size='large'
        style={{marginBottom: 10, marginTop: 10}}
        onSearch={handleSearch}
        />
    )
}