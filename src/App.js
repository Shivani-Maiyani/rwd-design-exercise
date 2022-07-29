import './App.css';
import Form from './features/component/form/form';
import PropertyCard from './features/component/property/PropertyCard';
import Header from './shared/header/Header';

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
