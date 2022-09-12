import './App.css';
import { Route, Routes } from 'react-router-dom';
import PropertyDetail from './features/property/components/propertyDetail';
import Features from '../src/features/property/components/homePage';

function App() {

  return (
    <div className='main'>
      <Routes>
        <Route path="/" element={<Features />} />
        <Route path="/propertyDetail/:id" element={<PropertyDetail />} />
      </Routes>
      {/*<ValidationSchemaExample />*/}
    </div>
  );
}

export default App;
