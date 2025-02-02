
import './App.css';
import Builder from './components/Builder/builder';
import DataProvider from './components/Builder/context/dataContext';
import Feature from './components/features/feature';
import Hero from './components/hero/hero';
import Navbar from './components/navbar/navbar';
import Workflow from './components/workflow/workflow';

function App() {
  return (
    <DataProvider>
    <div className="App">
      
      <Navbar />
      <Hero />
      <Workflow />
      <Feature />
      <Builder />
    </div>
      </DataProvider>
  );
}

export default App;
