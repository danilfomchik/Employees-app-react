import { Component } from 'react';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      data: [
        {name: 'Alex Snow', salary: 1000, increase: false, rise: false, id: 1},
        {name: 'Peter Parker', salary: 800, increase: false, rise: false, id: 2},
        {name: 'Tom Hardy', salary: 8500, increase: false, rise: false, id: 3}
      ],
      maxId: 3,
      term: '',
      filterParam: 'all'
    }
  }

  deleteItem = (id) => {
    this.setState(({data}) => ({
      data: data.filter(item => item.id !== id)
    }))
  }

  addItem = (name, salary) => {
    let newItem = {
      name, 
      salary, 
      increase: false, 
      rise: false,
      id: this.state.maxId + 1
    }

    this.setState({
      data: [...this.state.data, newItem],
      maxId: this.state.maxId + 1
    })
  }

  onToggleProp = (id, prop) => {

    // console.log(prop);

    this.setState(({data}) => ({
      data: data.map(item => {
        if(item.id === id){
          return {...item, [prop]: !item[prop]};
        }

        return item;
      })
    }));
    
  }

  searchEmployee = (items, term) => {
    if(term.length === 0) {
      return items;
    }

    return items.filter(item => {
      return item.name.indexOf(term) > -1;
    })

  }

  changeSearchTerm = (term) => {
    this.setState({term});
  }

  onFilterChange = (items, param) => {
    switch(param){
      case 'rise':
        return items.filter(item => item.rise);
      case 'more-then-1000':
        return items.filter(item => item.salary > 1000);
      default:
        return items;
    }
  }

  changeFilterParam = (filterParam) => {
    this.setState({filterParam});
  }

  render() {
    const { data, term, filterParam } = this.state;
    const visibleData = this.onFilterChange(this.searchEmployee(data, term), filterParam);

    return (
      <div className="app">
        <AppInfo employeesData={data}/>

        <div className="search-panel">
          <SearchPanel onChangeSearchTerm={this.changeSearchTerm}/>
          <AppFilter filterParam={filterParam} getFilterParam={this.changeFilterParam}/>
        </div>
        
        <EmployeesList 
          employees={visibleData}
          onDelete={this.deleteItem}
          onToggleProp={this.onToggleProp}
          // onToggleRise={this.onToggleRise}
        />
        <EmployeesAddForm onAdd={this.addItem}/>
      </div>
    );
  }
}

export default App;
