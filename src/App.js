import './App.css';
import Card from "./card/Card.jsx";
import Layout from './components/Layout';
import { bodies } from './mockData/mockData';


function App() {
  return (
    <div>
      <Layout></Layout>
      {/* <Card data={bodies} /> */}
    </div>
  );
}

export default App;