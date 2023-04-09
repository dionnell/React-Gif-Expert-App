import { useState } from 'react'


export const AddCategory = ({ onNewCategory }) => {

    const [inputValue, setInputValue] = useState('');

    const onInputChance = (event) => {
        setInputValue( event.target.value);
    }

    const onSubmit = (event) => {
        event.preventDefault();//event para que la pagina no haga un refresh
        console.log(inputValue);

        if(inputValue.trim().length <= 1 ) return;
        onNewCategory( inputValue.trim() );
        setInputValue('');//para linpiar el imput despues de ingresar un valor
    }

    return(
        <form onSubmit={ (event) => onSubmit(event) }>
            <input
            type = "text"
            placeholder="Buscar"
            value={ inputValue }
            onChange={  onInputChance }
            />
        </form>
    )

}