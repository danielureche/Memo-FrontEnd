import React from 'react';
import { Dropdown} from 'react-bootstrap';

const FilterProducts = ({ categories, onCategorySelect }) => {
    return (
        <Dropdown>
            <Dropdown.Toggle id="filter-dropdown" style={{backgroundColor: '#E9AE18', border: 'none'}}>
                Filtrar
            </Dropdown.Toggle>

            <Dropdown.Menu>
                <Dropdown.Item onClick={() => onCategorySelect(null)}>Mostrar Todo</Dropdown.Item>
                {categories.map((category, index) => (
                    <Dropdown.Item key={index} onClick={() => onCategorySelect(category)}>
                        {category}
                    </Dropdown.Item>
                ))}
            </Dropdown.Menu>
        </Dropdown>
    );
};

export default FilterProducts;