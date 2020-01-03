import React, { Component } from 'react';
import CardList from './Cardlist';
import SearchBox from './SearchBox';
import './App.css';
import Scroll from './Scroll';


class App extends Component {
    constructor(){
        super()
        this.state ={
            robots: [],
            searchfield: ''

        }
    }
componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(Response=> Response.json())
        .then(users => this.setState({robots: users}));
}


    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value})
    }

    render ()  {
        const filteredrobots = this.state.robots.filter(robots =>{
            return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })
        return (
            <div className='tc'>
                <h1 className='f-headline'> Robopals </h1>
                <SearchBox searchChange={this.onSearchChange} />
                <Scroll>
                    <CardList robots={filteredrobots} />
                </Scroll>    
            </div>
    );
    }
}

export default App;