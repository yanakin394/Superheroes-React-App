import Cards from './components/cards.jsx'
import './style/App.scss';
import superheroes from './data/superheroes.json'

function App() {
  return (
    console.log(superheroes),
    <>
      <Cards/>
    </>
  );
}

export default App;
