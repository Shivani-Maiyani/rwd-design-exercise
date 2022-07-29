import './App.css';
import Form from './features/form/components/form';
import PropertyCard from './features/property/components/PropertyCard';
import Header from './shared/header/components/Header';

function App() {

  return (
    <div className='main'>
      <Header/>
      <PropertyCard/>
      <Form/>
    </div>
  );
}

export default App;
