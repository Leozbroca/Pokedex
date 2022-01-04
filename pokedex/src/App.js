import {React} from 'react'
import Router from './routes/Router';
import GlobalStyle from './constants/GlobalStyle';
import Header from './components/header/Header';


function App() {
  return (
    <div>
      <GlobalStyle/>
      <Header/>
      <Router/>
    </div>
  );
}

export default App;
