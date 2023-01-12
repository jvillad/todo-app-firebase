import CreateTask from './component/CreateTask';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './component/Login';
import PrivateRoute from './config/PrivateRoute';
import NotFound from './component/NotFound';
import { DataProvider } from './context/DataContext';

import Nav from './nav/Nav';

function App() {
  return (
    <DataProvider>
      <div className="App">
        <BrowserRouter>
          <Nav />
          <Routes>
            <Route path="/" element={<Login />} />
            <Route element={<PrivateRoute />}>
              <Route path="/todo" element={<CreateTask />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </div>
    </DataProvider>
  );
}

export default App;
