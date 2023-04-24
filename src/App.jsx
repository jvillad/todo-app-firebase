import CreateTask from './components/CreateTask';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import PrivateRoute from './config/PrivateRoute';
import NotFound from './components/NotFound';
import { DataProvider } from './context/DataContext';
import Nav from './components/Nav';

function App() {
  return (
    <DataProvider>
      <div className="">
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
