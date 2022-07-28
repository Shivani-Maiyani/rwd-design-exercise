import './App.css';
import Form from './component/form/form';
import PropertyCard from './component/property/PropertyCard';
import Header from './shared/Header';

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
