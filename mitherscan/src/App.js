import Balance from './components/Balance';
import Transactions from './components/Transactions';
import Blocks from './components/Blocks';
// import CurrentBlock from './components/CurrentBlock';
import {  Routes, Route } from 'react-router-dom';
import SearchAll from './components/SearchAll';
import React, { useContext } from 'react';
import { TextContext} from './store/text-context';
import NavigationBar from './UI/NavigationBar';
import CurrentBlock from './components/CurrentBlock';

function App() {

  return (
    <div>
      <NavigationBar />
      <Routes>
          <Route path="/" element={<SearchAll/>} />
          <Route path="/balance" element={<Balance />} />
          <Route path="/transactions" element={<Transactions />} />
          <Route path="/blocks" element={<Blocks />} />
      </Routes>
      <CurrentBlock />
    </div>

  ); 
}

export default App;
