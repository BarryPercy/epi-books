import './App.css';
import MyNav from './components/MyNav'
import MyFooter from './components/MyFooter'
import Welcome from './components/Welcome'
import items from './data/fantasy.json'
import BookList from './components/BookList';
function App() {
  return (
    <div className="App">
      <MyNav Brand="EpiBooks" />
      <Welcome/>
      <BookList Books={items}></BookList>
      <MyFooter/>
    </div>
  );
}

export default App;
