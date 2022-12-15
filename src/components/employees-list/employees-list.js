import EmployeesListItem from "../employees-list-item/employees-list-item";

import './employees-list.css';

const EmployeesList = ({employees, onDelete, onToggleProp}) => {
    const elements = employees.map(item => {
        const {id, ...itemProps} = item;

        return (
            // <EmployeesListItem firstName={item.firstName} lastName={item.lastName}  salary={item.salary}/>
            // the same
            <EmployeesListItem 
                key={id} 
                {...itemProps} 
                onDelete={() => onDelete(id)}
                onToggleProp={(e) => onToggleProp(id, e.currentTarget.getAttribute('data-prop'))}  
            />
        );
    });


    return (
        <ul className="app-list list-group">{elements}</ul>
    )
}

export default EmployeesList;