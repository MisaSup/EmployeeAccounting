import "./employee-list-item.css";

const EmployeesListItem = ({name, surname, salary, increase}) =>
{
    const liClasses = "list-group-item d-flex justify-content-between";
    return (
        <li className={increase ? liClasses + " increase" : liClasses}>
            <span className="list-group-item-label">{name} {surname}</span>
            <input type="text" className="list-group-item-input" defaultValue={salary + '$'}/>
            <div className="d-flex justify-content-center align-items-center">
                <button className="btn-cookie btn-sm"
                        type="button">
                    <i className="fas fa-cookie"></i>
                </button>
                <button className="btn-trash btn-sm"
                        type="button">
                    <i className="fas fa-trash"></i>
                </button>
                <i className="fas fa-star"></i>
            </div>
        </li>
    );
}

export default EmployeesListItem;