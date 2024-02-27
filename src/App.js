import './App.css';
import Card from './card/Card.jsx';
import Header from './header/header';
import { bodies } from './mockData/mockData';


function App() {
  return (
    <div>
      <Header />
      <Card data={bodies} />
    </div>
  );
}

export default App;