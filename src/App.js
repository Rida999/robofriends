import React,{Component} from 'react'
import { robots } from './robots';
import CardList from './CardList';
import SearchBox from './SearchBox';
import './App.css';

class App extends Component{
    constructor() {
        super();
        this.state={
            robots:robots,
            SearchBox:"",
        }
    }
    
    onSearchChange=(e)=>{
        this.setState({SearchBox:e.target.value})
    }

    render(){
        const filteredRobots=this.state.robots.filter((robot)=>{
            return robot.name.toLowerCase().includes(this.state.SearchBox.toLowerCase());
        });
    return (
        <div className='tc'>
            <h1 className='f1'>RoboFriends</h1>
            <SearchBox onSearchChange={this.onSearchChange} /> {/*this mean app because app is an object*/}
            <CardList robots={filteredRobots}/>
        </div>
    )
}
}
export default App;