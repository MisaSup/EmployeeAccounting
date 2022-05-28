import './app-filter.css';

import { Component } from 'react';

import AppFilterBtn from '../app-filter-btn/app-filter-btn';

class AppFilter extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            btns: [
                {text: "All employees", active: true, id: 0},
                {text: "Advancement", active: false, id: 1},
                {text: "Salary more than 1000$", active: false, id: 2}
            ]
        }
    }

    isActiveBtn = (id) =>
    {
        this.props.onFilterChange(id);
        this.setState(({btns}) => 
        ({btns: btns.map(item => item.id === id ? {...item, active: true} : {...item, active: false})}))
    }

    createBtns = () =>
    {
        const items = this.state.btns.map(item => {
            const {id, ...rest} = item;
            return (
                <AppFilterBtn key={id} isActiveBtn={() => this.isActiveBtn(id)} {...rest}/>
            );
        })
        return (items);
    }

    render()
    {
        return (
            <div className="btn-group">
                {this.createBtns()}
            </div>
        );
    }
}

/* const AppFilter = () =>
{
    const btnClicked = (e) =>
    {
        console.log(e.target);
    }
    return (
        <div className="btn-group">
            <button className="btn btn-light" type="button">
                All employees
            </button>
            <button className="btn btn-outline-light" type="button"
            onClick={btnClicked}>
                Advancement
            </button>
            <button className="btn btn-outline-light" type="button">
                Salary more than 1000$
            </button>
        </div>
    );
} */

export default AppFilter;