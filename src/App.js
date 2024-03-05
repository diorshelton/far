import './App.css';
import Header from './header/header';
import Card from "./card/Card.jsx";
import Layout from './components/Layout';
import { bodies } from './mockData/mockData';


function App() {
  return (
    <div>
      <Layout></Layout>
      {/* <Header /> */}
      {/* <Card data={bodies} /> */}
    </div>
  );
}

export default App;