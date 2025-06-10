import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './Pages/Sidebar/Sidebar';
import Overview from './Component/Overview';


function App() {
  return (
    <Router>
      <div className="flex">
        <Sidebar />
        <div className="flex-1 ml-[100px] p-2 py-4 transition-all duration-300 overflow-x-hidden">
          <Routes>
            <Route path="/overview" element={<Overview />} />
        
          
            <Route path="/" element={<Overview />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;