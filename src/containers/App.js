import React,{Component} from 'react'
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import './App.css';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';

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
        }, 1000)
        });
        
    }
    
    onSearchChange=(e)=>{
        this.setState({SearchBox:e.target.value})
    }

    render(){
        const filteredRobots=this.state.robots.filter((robot)=>{
            return robot.name.toLowerCase().includes(this.state.SearchBox.toLowerCase());
        });
        if(!this.state.robots.length){
            return (
            <div className='tc'>
                <div className='bb bw1'>
                    <h1 className='header'>RoboFriends</h1>
                    <SearchBox onSearchChange={this.onSearchChange} /> {/*this mean app because app is an object*/}
                </div>
                <div>
                    <h1>Loading...</h1>
                </div>
            </div>
            )
        }
        else{
            return (
                <div className='tc' style={{height:"100vh",overflow:"hidden"}}>
                    <div className='bb bw1'>
                        <h1 className='header'>RoboFriends</h1>
                        <SearchBox onSearchChange={this.onSearchChange} /> {/*this mean app because app is an object*/}
                    </div>
                    <Scroll>
                        <ErrorBoundry>
                            <CardList robots={filteredRobots}/>
                        </ErrorBoundry>
                    </Scroll>
                </div>
            )
            }
        }
}
export default App;