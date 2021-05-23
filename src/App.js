import { Component } from "react"; // To write a class

import { CardList } from "./components/card-list/card-list.component";

import { SearchBox } from "./components/search-box/search-box.component";

import "./App.css";

// By using class we have access to the state which a JS object.
// Component also gives the setState function and render().
// We have two ways to build components: either using functions or using classes.
// https://jsonplaceholder.typicode.com/users | to get users in JSON format, so we don't hardcode our data. (array of user objects)
// We use the Component.Lifecycle methods to get the data from the above link. The Component.Lifecycle are methods that can be called
// at different stages when this component is getting rendered. 

// https://docs.thecatapi.com/api-reference

class App extends Component {

  constructor() {
    super();

    this.state = {
      breeds: [],
      searchField: ""
    };
  }

  // When the component is loaded to the page then it does whatever we code in it.
  componentDidMount() {
    fetch(`https://api.thecatapi.com/v1/breeds?limit=10&page=${Math.floor(Math.random() * 10)}`, {
      headers: {"x-api-key": "c94359ed-158f-4b7d-920b-77821764c3c5"}
    })  // a Promise is returned
    .then(response => response.json())  // We get a ReadableStream at the body of the response that we convert to JSON and a Promise is returned.
    .then(breeds => this.setState({ breeds: breeds }));
  }
  // We are NOT allowed to modify state without calling the setState method.
  // When the state changes, we rerender the component with the new state.
  //Between the curly braces we can render and JavaScript we want

  // Arrow functions bind "this" to the context where they were defined in. We don't need to call the bind function in our constructor.
  handleChange = (e) => {
    this.setState({ searchField: e.target.value });
  }

  render() {
    // onChange event changes the state and rerenders, so the filteredMonsters keeps changing.
    // const monsters = this.state.monsters;
    // const searchField = this.state.searchField;
    const { breeds, searchField } = this.state; 
    const filteredBreeds = breeds.filter(breed => breed.name.toLowerCase().includes(searchField.toLowerCase()));

    return (
      // Syntax of JSX | not HTML | JSX mimics the html.
      // We use the key because React needs to know what element it needs to update if one of these elements
      // in our array has a value that changes. The key helps to know which element has been updated and to rerender just that one.
      // We are passing the dogs as a prop from our App component
      // onChange: whenever the input changes (SyncheticEvent) | we use JSX | e.target gives us the html and e.target.value gives us the string value.
      // setState is an asynchronours function | it doesn't happen immediately as we expect it to.
      // If we want to see or do something with our state right after we set it we have to do it inside the second argument callback function we pass to setState.
      <div className="App">
        <h1>Cats Rolodex</h1>
        <SearchBox placeholder="search breeds" handleChange={ this.handleChange } />
        <CardList breeds={filteredBreeds} />
      </div>
    )
  }
}


export default App;