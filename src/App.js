import './App.css';
import { useEffect, useState } from 'react';

import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';

const App = () => {

  // value to store, setValue fn
  const [searchField, setSearchField] = useState('');
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState([]);

  // callback fn, array of dependencies
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(data => data.json())
      .then(users => setMonsters(users));
  }, []);

  useEffect(() => {
    const temp = monsters.filter(monster => {
      return monster.name.toLowerCase().includes(searchField);
    });

    setFilteredMonsters(temp);
  }, [monsters, searchField]);

  const onChangeHandler = (event) => {
    const searchFieldString = event.target.value.toLowerCase();
    setSearchField(searchFieldString);
  }

  return (
    <div className="App">
      <h1 className='app-title'>Monsters Rolodex</h1>
      <SearchBox onChangeHandler={ onChangeHandler }
                  placeholderText='search monsters...'
                  styleName='search-box' />
      <CardList items={ filteredMonsters } />
    </div>
  );
}

export default App;
