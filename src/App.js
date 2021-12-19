import React,{Component} from 'react'
import CardList from './CardList';
import SearchBox from './SearchBox';
import './App.css';
import Scroll from './Scroll';

class App extends Component{
    constructor() {
        super();
        this.state={
            robots:[],
            SearchBox:"",
        }
    }

    componentDidMount(){
            fetch("https://jsonplaceholder.typicode.com/users")
        .then(res=>{
            return res.json();
        })
        .then(users=>{
            setTimeout(() => {
            this.setState({robots:users})
        }, 2000)
        });
        
    }
    
    onSearchChange=(e)=>{
        this.setState({SearchBox:e.target.value})
    }

    render(){
        const filteredRobots=this.state.robots.filter((robot)=>{
            return robot.name.toLowerCase().includes(this.state.SearchBox.toLowerCase());
        });
        if(this.state.robots.length===0){
            return (
            <div className='tc'>
                <h1 className='f1'>RoboFriends</h1>
                <SearchBox onSearchChange={this.onSearchChange} /> {/*this mean app because app is an object*/}
                <div>
                    <h1>Loading...</h1>
                </div>
            </div>
            )
        }
        else{
            return (
                <div className='tc' style={{height:"100vh",overflow:"hidden"}}>
                    <h1 className='f1'>RoboFriends</h1>
                    <SearchBox onSearchChange={this.onSearchChange} /> {/*this mean app because app is an object*/}
                    <Scroll>
                        <CardList robots={filteredRobots}/>
                    </Scroll>
                </div>
            )
            }
        }
}
export default App;