import { useState } from "react"
import PropTypes from 'prop-types';

export const AddCategory = ({ categories, setCategories }) => {

    const [inputValue, setInputValue] = useState(''); // vacio es= undefined, '' es= string vacio.

    const handleInputChange = (e) => {
        setInputValue(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();             // para no actualizar con el navegador

        if (inputValue.trim().length > 2) {
            
            setCategories([inputValue, ...categories]);
            // ===
            // setCategories(cats => [...cats, inputValue]);
            setInputValue('');
            // console.log('Submit hecho');
        } else {
            console.log('error');
        }

    }

    return (

        <form onSubmit={handleSubmit}>
            <input
                type='text'
                value={inputValue}
                onChange={handleInputChange}
            />
        </form>

    )

}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired,
    categories: PropTypes.array.isRequired
}