import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import { useAuth } from '../hooks/index.js';
import { Home, Login, Settings, Signup } from '../pages';
import { Loader, Navbar } from '../components/index.js';

function PrivateRoute({ children, ...rest }) {
  const auth = useAuth();
  return (
    <Route
      {...rest}
      render={() => {
        if (auth.user) {
          return children;
        }
        return <Navigate to="/login" />;
      }}
    />
  );
}

const Page404 = () => {
  return <h1>404</h1>;
};

function App() {
  const auth = useAuth();

  if (auth.loading) {
    return <Loader />;
  }
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home posts={[]} />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Signup />} />
          <PrivateRoute path="/settings" element={<Settings />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
