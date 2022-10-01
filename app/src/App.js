import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import StarWars from './pages/StarWars';

function App() {
  return (
    <Routes>
      <Route path="/" element={<StarWars />} />
    </Routes>
  );
}

export default App;
