import "./employee-list.css";

import EmployeeListItem from '../employee-list-item/employee-list-item';

const EmployeeList = ({data}) =>
{
    const elements = data.map((item, i) => {
        return <EmployeeListItem key={i} {...item}/>;
    });
    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    );
}

export default EmployeeList;