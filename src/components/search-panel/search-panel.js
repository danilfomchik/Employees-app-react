import { Component } from 'react';
import './search-panel.css';

class SearchPanel extends Component {
    constructor(props){
        super(props);

        this.state = {
            term: ''
        }
    }

    onChangeSearchTerm = (e) => {
        const term = e.target.value;

        this.setState({term});
        this.props.onChangeSearchTerm(term);
    }

    render() {
        return (
            <input type="text"
                className="form-control search-input"
                placeholder="Найти сотрудника"
                value={this.state.term}
                onChange={this.onChangeSearchTerm}
            />
        )
    }
}

export default SearchPanel;