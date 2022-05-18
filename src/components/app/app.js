import "./app.css";

import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import EmployeeList from "../employee-list/employee-list";
import EmployeeAddForm from "../employee-add-form/employee-add-form";

function App()
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
            <EmployeeList data={data}/>
            <EmployeeAddForm />
        </div>
    );
}

export default App;