import { Route, Navigate, Routes } from 'react-router-dom';
import { useAuth } from '../hooks/index.js';

function PrivateRoute({ children, ...rest }) {
  const auth = useAuth();

  return (
    <Routes>
      <Route
        {...rest}
        render={() => (auth.user ? children : <Navigate to="/login" replace />)}
      />
    </Routes>
  );
}

export { PrivateRoute };
