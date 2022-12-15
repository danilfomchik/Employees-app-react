import './employees-list-item.css';

const EmployeesListItem = (props) => {

    const {name, salary, onDelete, onToggleProp, increase, rise} = props;

    let classes = 'list-group-item d-flex justify-content-between';

    if(rise){
        classes += ' like';
    }


    return (
        <li className={increase ? classes += ' increase' : classes}>
            <span className="list-group-item-label" 
                data-prop="rise"
                onClick={onToggleProp}
            >
                {name}
            </span>
            <input type="text" 
                className="list-group-item-input" 
                defaultValue={salary + '$'}
                style={rise ? {color: 'red'} : {color: 'black'}}
            />
            <div className='d-flex justify-content-center align-items-center'>
                <button type="button"
                    className="btn-cookie btn-sm " 
                    data-prop="increase"
                    onClick={onToggleProp}
                >
                    <i className="fas fa-cookie"></i>
                </button>

                <button type="button"
                    className="btn-trash btn-sm " 
                    onClick={onDelete}
                >
                    <i className="fas fa-trash"></i>
                </button>
                <i className="fas fa-star"></i>
            </div>
        </li>
    )
}

export default EmployeesListItem;