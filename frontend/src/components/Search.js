/*
Search Input Component (handles search inputs - the search functionality
does not need to be implemented yet, you only need to be able to enter a
search term based on your planned functionality)
*/

import React from 'react';

class SearchInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchTerm: '',
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ searchTerm: event.target.value });
        // Optionally, you can call a function passed down via props to handle search term changes
        if (this.props.onSearchTermChange) {
            this.props.onSearchTermChange(event.target.value);
        }
    }

    handleSubmit(event) {
        event.preventDefault();
        // Here, you can call a search function to fetch results based on the search term
        if (this.props.onSearch) {
            this.props.onSearch(this.state.searchTerm);
        }
        // Optionally, reset the input field or perform any other actions
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} className="search-input">
                <input
                    type="text"
                    placeholder="Search users, songs, or playlists..."
                    value={this.state.searchTerm}
                    onChange={this.handleChange}
                />
                <button type="submit">Search</button>
                {/* Autocomplete suggestions could be added here */}
            </form>
        );
    }
}

export default SearchInput;
