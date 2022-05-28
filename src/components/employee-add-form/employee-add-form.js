import "./employee-add-form.css"
import { Component } from "react";

class Employee
{
    constructor(name, salary, id, increase = false, rise = false)
    {
        this.name = name;
        this.salary = salary;
        this.increase = increase;
        this.id = id;
        this.rise = rise;
    }
}

class EmployeeAddForm extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            name: "",
            salary: ""
        }
    }

    onValueChange = (e) => this.setState({[e.target.name]: e.target.value})

    addNewEmployee = (e) =>
    {
        e.preventDefault();
        if (this.state.name && this.state.salary)
        {
            if (this.state.name.length < 4)
            {
                console.log("Name must be longer than 3 characters");
                return ;
            }
            this.props.addItem(new Employee(this.state.name, this.state.salary, this.props.data.maxId));
        }
        this.setState({name: '', salary: ''});
    }

    render()
    {
        const {name, salary} = this.state;

        return (
            <div className="app-add-form">
                <h3>Add new employee</h3>
                <form className="add-form d-flex"
                    onSubmit={this.addNewEmployee}>
                    <input type="text" 
                        className="form-control new-post-label" 
                        placeholder="What is his name?"
                        name="name"
                        value={name}
                        onChange={this.onValueChange}/>
                    <input type="number" 
                        className="form-control new-post-label" 
                        placeholder="Salary in $"
                        name="salary"
                        value={salary}
                        onChange={this.onValueChange}/>
                    <button type="submit"
                            className="btn btn-outline-light">Add</button>
                </form>
            </div>
        );    
    }
}

/* const EmployeeAddForm = () =>
{
    return (
        <div className="app-add-form">
            <h3>Add new employee</h3>
            <form className="add-form d-flex">
                <input type="text" 
                    className="form-control new-post-label" 
                    placeholder="What is his name?"/>
                <input type="number" 
                    className="form-control new-post-label" 
                    placeholder="Salary in $"/>
                <button type="submit"
                        className="btn btn-outline-light">Add</button>
            </form>
        </div>
    );
} */

export default EmployeeAddForm;