import './App.css';
import Header from './header/header';
import Card from "./card/Card.jsx";

import { bodies } from './mockData/mockData';


function App() {
  return (
    <div>
      <Header />
      {/* <Card data={bodies} /> */}
    </div>
  );
}

export default App;