import './App.css';
import { Route, Routes } from 'react-router-dom';
import PropertyDetail from './features/propertyDetaile/components/propertyDetail';
import Features from './features/homePage/components/homePage';


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
