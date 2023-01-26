import React from 'react';
import './Filter.css'
import { useState } from 'react';

function Filter({trueFilter, setTrueFilter}) {

    const [colors, setColors] = useState(['red', 'yellow', 'green', 'orange', 'purple'])
    const [flavors, setFlavors] = useState(['bitter', 'spicy', 'sour', 'sweet'])
    const [newFilter, setNewFilter] = useState({
        type: [],
        color: [],
        flavor: [],
      })

    const handleSubmit = async(event) => {
        event.preventDefault();
        console.log(trueFilter)
        setTrueFilter(newFilter)
        console.log(trueFilter)
    }

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
        <form className='filter-form' onSubmit={handleSubmit}>
            <h1>Table Filter</h1>
            <section className='filter-options'>
                <fieldset className='type-filter'>
                    <legend>Type</legend>
                    <label htmlFor="fruit">
                        <input type="checkbox" id="fruit" name="type" value="fruit" onChange={handleChange}/>
                        Fruit
                    </label>
                    <label htmlFor="vegetable">
                        <input type="checkbox" id="vegetable" name="type" value="vegetable" onChange={handleChange}/>
                        Vegetable
                    </label>
                </fieldset>
                <fieldset  className='color-filter'>
                    <legend>Color</legend>
                    {colors.map((color) => {
                        return (
                            <label htmlFor={color} key={color}>
                                <input type="checkbox" id={color} name="color" value={color} onChange={handleChange}/>
                                {color}
                            </label>
                        )
                    })}
                </fieldset>
                <fieldset  className='flavor-filter'>
                    <legend>Flavor</legend>
                    {flavors.map((flavor) => {
                        return (
                            <label htmlFor={flavor} key={flavor}>
                                <input type="checkbox" id={flavor} name="flavor" value={flavor} onChange={handleChange}/>
                                {flavor}
                            </label>
                        )
                    })}
                </fieldset>
            </section>
            <button className='filter-submit' type="submit">Submit</button>
        </form>
    );
}

export default Filter;