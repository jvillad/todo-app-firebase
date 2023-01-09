import CreateTask from './component/CreateTask';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './component/Login';
import PrivateRoute from './config/PrivateRoute';
import NotFound from './component/NotFound';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route element={<PrivateRoute />}>
            <Route path="/todo" element={<CreateTask />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
