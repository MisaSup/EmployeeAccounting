import "./employee-list-item.css";

const EmployeesListItem = ({name, salary, increase, rise, onToggleRise, onToggleIncrease, toDelete}) =>
{
    const setClasses = () =>
    {
        const liClasses = "list-group-item d-flex justify-content-between";
        
        if (increase && rise)
            return (`${liClasses} increase give-cookie like`);
        else if (increase)
            return (`${liClasses} increase give-cookie`);
        else if (rise)
            return (`${liClasses} like`);
        else
            return (liClasses);
    }
    
    return (
        <li className={setClasses()}>
            <span onClick={onToggleRise} className="list-group-item-label">{name}</span>
            <input type="text" className="list-group-item-input" defaultValue={salary + '$'}/>
            <div className="d-flex justify-content-center align-items-center">
                <button onClick={onToggleIncrease} className="btn-cookie btn-sm"
                        type="button">
                    <i className="fas fa-cookie"></i>
                </button>
                <button className="btn-trash btn-sm"
                        type="button"
                        onClick={toDelete}>
                    <i className="fas fa-trash"></i>
                </button>
                <i className="fas fa-star"></i>
            </div>
        </li>
    );
}

/* const EmployeesListItem = ({name, surname, salary, increase}) =>
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
} */

export default EmployeesListItem;