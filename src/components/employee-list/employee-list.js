import "./employee-list.css";

import EmployeeListItem from '../employee-list-item/employee-list-item';

const EmployeeList = ({data, toDelete, onToggleRise, onToggleIncrease}) =>
{
    const elements = data.map((item) => {
        const {id, ...rest} = item;
        return <EmployeeListItem key={id} {...rest} toDelete={() => toDelete(id)}
            onToggleRise={() => onToggleRise(id)} onToggleIncrease={() => onToggleIncrease(id)}/>;
    });
    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    );
}

export default EmployeeList;