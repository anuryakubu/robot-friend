import React , {/*useState, useEffect*/ Component} from 'react';
import CardList from "../Components/CardList"
import Searchbox from "../Components/Searchbox"
import Scroll from "../Components/Scroll"
import './App.css'

//Both functional and class components tested and they worked!

class App extends Component {

/* const [input, setInput] = useState("");
const [filter, setFilter] = useState([]);

useEffect(()=> {
console.log(input)
setFilter(robots.filter(robot => {
  return robot.name.toLowerCase().includes(input.toLowerCase());
}))


}, [input]) */
constructor({ robots }) {
  super();
  this.state = {
    robots: [],
    filter: ""
  }
}

onChangeHandler = (e) => {
  // setInput(e.target.value);
  this.setState({filter: e.target.value})
 
}

componentDidMount () {
  fetch("https://jsonplaceholder.typicode.com/users")
  .then(response => response.json())
  .then(jsonResponse => this.setState({robots: jsonResponse}))
}

render() {

 const filtered = this.state.robots.filter(robot => {
  return robot.name.toLowerCase().includes(this.state.filter.toLowerCase());
}); 

   return (
    <div className="tc">
      <h1 className="f1">Robot Friend</h1>
      <Searchbox searchChange={this.onChangeHandler}/>
      <Scroll>
      <CardList robots={filtered}/>
      </Scroll>
    </div>
  );
}
 
}

export default App;
