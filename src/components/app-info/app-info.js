import "./app-info.css";

const AppInfo = ({employeesData}) => {
    let increaseCount = 0;

    employeesData.forEach(employee => {
        if(employee.increase) {
            increaseCount++;
        }
    });

    return (
        <div className="app-info">
            <h1>Учет сотрудников в компании N</h1>
            <h2>Общее число сотрудников: {employeesData.length}</h2>
            <h2>Премию получат: {increaseCount}</h2>
        </div>
    )
}

export default AppInfo;