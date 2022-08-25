import './App.css';
import { Route, Routes } from 'react-router-dom';
import PropertyDetaile from './features/propertyDetaile/components/propertyDetaile';
import Features from './features/components/features';


function App() {

  return (
    <div className='main'>
      <Routes>
        <Route path="/" element={<Features />} />
        <Route path="/PropertyDetaile" element={<PropertyDetaile />} />
      </Routes>
      {/*<ValidationSchemaExample />*/}
    </div>
  );
}

export default App;
