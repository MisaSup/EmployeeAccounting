import "./search-panel.css";

import { Component } from "react";

class SearchPanel extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            term: ''
        }
    }

    onUpdateSearch = (e) =>
    {
        const term = e.target.value;
        this.setState({term});
        this.props.onUpdateSearch(term);
    }

    render()
    {
        return (
            <input 
                type="text"
                className="form-control search-input"
                placeholder="Search employee"
                value={this.state.term}
                onChange={this.onUpdateSearch}/>
        );    
    }
}

/* const SearchPanel = () =>
{
    return (
        <input 
            type="text"
            className="form-control search-input"
            placeholder="Search employee"/>
    );
} */

export default SearchPanel;