import "./app-filter.css";

const AppFilter = (props) => {
    const { filterParam, getFilterParam} = props;

    const activeButton = 'btn btn-light',
        generalButton = 'btn btn-outline-light'
    ;

    return (
        <div className="btn-group" onClick={(e) => getFilterParam(e.target.getAttribute('data-filter'))}>
            <button type="button"
                className={filterParam === 'all' ? activeButton : generalButton}
                data-filter="all"
            >
                Все сотрудники
            </button>
            <button type="button"
                className={filterParam === 'rise' ? activeButton : generalButton}
                data-filter="rise"
            >
                На повышение
            </button>
            <button type="button"
                className={filterParam === 'more-then-1000' ? activeButton : generalButton}
                data-filter="more-then-1000"
            >
                З/П больше 1000$
            </button>
        </div>
    )

}

export default AppFilter;