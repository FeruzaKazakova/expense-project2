import React from 'react';
import styled from 'styled-components';

// import './ExpensesFilter.css';

const ExpensesFilterContainer = styled.div`
color: white;
padding: 0 1rem;
`
const ExpensesFilterControl = styled.div`
display: flex;
width: 100%;
align-items: center;
justify-content: space-between;
margin: 1rem 0;
`
const Label = styled.label`
font-weight: bold;
margin-top: 10px;
`
const Select = styled.select`
font: inherit;
padding: 0.5rem 3rem;
font-weight: bold;
border-radius: 6px;
margin-top: 1rem;
`

export const ExpensesFilter = (props) => {
    const dropdownChangeHandler = (event) => {
        props.onFilterChange(event.target.value);
    };

    return (
        <ExpensesFilterContainer>
            <ExpensesFilterControl>
                <Label>Фильтр по году</Label>
                <Select value={props.selected} onChange={dropdownChangeHandler}>
                    <option value='2023'>2023</option>
                    <option value='2022'>2022</option>
                    <option value='2021'>2021</option>
                    <option value='2020'>2020</option>
                    <option value='2019'>2019</option>
                </Select>
            </ExpensesFilterControl>
        </ExpensesFilterContainer>
    );
};