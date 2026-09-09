import { Route, Routes as ReactRoutes } from 'react-router-dom';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Todos from '../pages/Todos';
import NotFound from '../pages/NotFound';
const Routes = () => {
  return (
    <div>
      <ReactRoutes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/todos" element={<Todos />} />
        <Route path="*" element={<NotFound />} />
      </ReactRoutes>
    </div>
  );
};

export default Routes;
