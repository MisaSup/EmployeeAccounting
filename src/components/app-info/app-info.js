import "./app-info.css"

const AppInfo = ({data}) =>
{
    console.log(data.length);
    return (
        <div className="app-info">
            <h1>Employee Accounting</h1>
            <h2>Total number of employees: {data.length}</h2>
            <h2>Employees will get bonuses: {data.filter(item => item.increase).length}</h2>
        </div>
    );
}

export default AppInfo;