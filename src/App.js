import './App.css';
import Form1 from './features/form/components/form1';
import PropertyCard from './features/property/components/PropertyCard';
import Header from './shared/header/components/Header';

function App() {

  return (
    <div className='main'>
      <Header />
      <PropertyCard />
      <Form1 />
    </div>
  );
}

export default App;
