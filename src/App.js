import Dropdown from './component/dropdown/dropdown';
import './App.css';

function App() {
  return (
    <div className="App">
      <Dropdown items={['Yes', 'Probably not']} />
    </div>
  );
}

export default App;
