import Header from './components/Header';
import LogInForm from './components/LogInForm';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header className="App-header" />
      <div>
        <LogInForm />
      </div>
    </div>
  );
}

export default App;
