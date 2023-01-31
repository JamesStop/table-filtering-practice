import React, {useEffect} from 'react';
import './Filter.css'

function SingleOption({optionSingle, options, newFilter, setNewFilter, trueFilter}) {

    useEffect(() => {
        if (trueFilter.filters[options].includes(optionSingle)) {
            document.querySelector(`#${optionSingle}`).checked = true
        }
    }, [])

    const handleChange = (event) => {
        
        const filterToChange = newFilter[event.target.name]
        
        if (filterToChange.includes(event.target.value)) {
            const index = filterToChange.indexOf(event.target.value)
            filterToChange.splice(index, 1)
        } else {
            filterToChange.push(event.target.value)
        }
        setNewFilter({ ...newFilter, [event.target.name]: filterToChange})
    }

    return (
        <label  htmlFor={optionSingle}>
            <input type="checkbox" className="option" id={optionSingle} name={options} value={optionSingle} onClick={handleChange}/>
            {optionSingle}
        </label>
    );
}

export default SingleOption;