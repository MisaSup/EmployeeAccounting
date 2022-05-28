import "./app.css";

import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import EmployeeList from "../employee-list/employee-list";
import EmployeeAddForm from "../employee-add-form/employee-add-form";

import {Component} from 'react';

class App extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            data: [
                {name:"Alfie O'Connor", salary: 700, increase: false, rise: true, id: 1},
                {name:"Dewey Jackson", salary: 300, increase: true, rise: false, id: 2},
                {name:"Arastoo Vimal Aitken", salary: 1700, increase: false, rise: false, id: 3}
            ],
            maxId: 4,
            term: '',
            filterMode: 0
        }
    }

    deleteItem = (id) => 
    {
        this.setState(({data}) => ({data: data.filter(item => item.id !== id)}));
    }
    
    addItem = (newItem) => 
    {
        this.setState(({data, maxId}) => 
        {
            const arrCopy = Array.from(data);
            arrCopy.push(newItem);
            return {data: arrCopy, maxId: maxId + 1}
        })
    }

    onToggleRise = (id) =>
    {
        this.setState(({data}) => {
            return {data: data.map(item => {
                    if (item.id === id) 
                    {
                        return {...item, rise: !item.rise }
                    }
                    return item;
                }
            )}
        });
    }
    
    onToggleIncrease = (id) =>
    {
        this.setState(({data}) => {
            return {data: data.map(item => {
                    if (item.id === id) 
                    {
                        return {...item, increase: !item.increase }
                    }
                    return item;
                }
            )}
        });
    }

    searchEmp = (items, term) =>
    {
        if (term.length === 0)
        {
            return (items);
        }
        return (items.filter(item => {
            return item.name.indexOf(term) > -1;
        }))
    }

    onUpdateSearch = (term) =>
    {
        this.setState({term});
    }

    activateFilter = (data, mode) =>
    {
        if (mode === 1)
        {
            return (data.filter(item => item.rise));
        }
        else if (mode === 2)
        {
            return (data.filter(item => item.salary > 1000));
        }
        return data;
    }

    render()
    {
        const {data, term, filterMode} = this.state;
        const visibleData = this.searchEmp(this.activateFilter(data, filterMode), term);

        return (
            <div className="app">
                <AppInfo data={this.state.data}/>
                <div className="search-panel">
                    <SearchPanel onUpdateSearch={this.onUpdateSearch}/>
                    <AppFilter onFilterChange={(id) => this.setState({filterMode: id})}/>
                </div>
                <EmployeeList data={visibleData} 
                            toDelete={this.deleteItem} 
                            onToggleRise={this.onToggleRise}
                            onToggleIncrease={this.onToggleIncrease}/>
                <EmployeeAddForm data={this.state} addItem={this.addItem}/> 
            </div>
        );    
    }
}

/* function App()
{
    const data = [
        {name:"kill", surname:"bill", salary: 700, increase: false},
        {name:"kell", surname:"bell", salary: 300, increase: true},
        {name:"kall", surname:"ball", salary: 1700, increase: false}
    ];

    return (
        <div className="app">
            <AppInfo />
            <div className="search-panel">
                <SearchPanel />
                <AppFilter />
            </div>
            <EmployeeList data={data} toDelete={(id) => console.log('delete #', id)}/>
            <EmployeeAddForm />
        </div>
    );
} */

export default App;