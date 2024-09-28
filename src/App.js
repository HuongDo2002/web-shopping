import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import {routes} from './routes'
import Layout from './component/Layout';


function App() {
  return (
    <Router>
       <div className="App">
        <Routes>
          {routes.map((route, index) => {
            const Pages = route.compronent
            return <Route 
            key={index} 
            path={route.path} 
            element={<Layout><Pages /></Layout>}/>
          })}
        </Routes>
    </div>
    </Router>
   
  );
}

export default App;
