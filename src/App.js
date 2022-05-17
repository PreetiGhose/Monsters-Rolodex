// import logo from "./logo.svg";
import "./App.css";
import { Component } from "react";
import CardList from "./Components/card-list/CardList.component";
import SearchBox from "./Components/search-box/Search-Box";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((username) => {
        this.setState(
          () => {
            return { monsters: username };
          },
          () => console.log(this.state)
        );
      });
  }

  searchChange = (event) => {
    const name = event.target.value.toLowerCase();

    this.setState(() => {
      return { searchField: name };
    });
  };

  render() {
    const { monsters, searchField } = this.state;
    const { searchChange } = this;

    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchField);
    });

    return (
      <div className="App">
        <h1 className="monster-title">Monsters Rolodex</h1>
        <SearchBox
          className="search-box"
          placeHolder="search monsters"
          searchChangeHandler={searchChange}
        />
        <CardList fmonsters={filteredMonsters} />
        {/* {filteredMonsters.map((monster) => {
          

          return (
            <div key={monster.id}>
              <h1>{monster.name}</h1>
            </div>
          );
        })} */}
      </div>
    );
  }
}

export default App;
