import { useState, useEffect } from "react";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";

import "./App.css";

const App = () => {
  const [searchField, setSearchField] = useState("");
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((result) => setMonsters(result));
  }, []);

  useEffect(() => {
    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });

    setFilteredMonsters(filteredMonsters);
  }, [monsters, searchField]);

  const onSearchField = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  };

  return (
    <>
      <h1 className="app-title">Monster Rolodex</h1>
      <SearchBox
        onFieldHandler={onSearchField}
        className="monster-search-box"
        placeholder="search monsters"
      />
      <CardList monsters={filteredMonsters} />
    </>
  );
};

export default App;

// class App extends Component {
//   constructor() {
//     super();

//     this.state = {
//       monsters: [],
//       searchField: "",
//     };
//     console.log("constructor");
//   }

//   componentDidMount() {
//     console.log("component did mount");
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((response) => response.json())
//       .then((result) =>
//         this.setState(() => {
//           return { monsters: result };
//         })
//       );
//   }

//   onSearchField = (event) => {
//     const searchField = event.target.value.toLocaleLowerCase();
//     this.setState(() => {
//       return { searchField };
//     });
//   };

//   render() {
//     console.log("render app");
//     const { searchField, monsters } = this.state;
//     const { onSearchField } = this;

//     const filteredMonsters = monsters.filter((monster) =>
//       monster.name.toLocaleLowerCase().includes(searchField)
//     );

//     return (
//       <>
//         <h1 className="app-title">Monster Rolodex</h1>
//         <SearchBox
//           onFieldHandler={onSearchField}
//           className="monster-search-box"
//           placeholder="search monsters"
//         />
//         <CardList monsters={filteredMonsters} />
//       </>
//     );
//   }
// }

// export default App;
