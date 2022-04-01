import './App.css';
import GlobalStyles from './components/globalstyles';

import Hearder from './components/hearder';
import Container from './components/container';


function App() {
  return (
    <GlobalStyles>
        <div className="App">
           <Hearder/>
           <Container/>
        </div>
    </GlobalStyles>
  );
}

export default App;
