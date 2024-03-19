import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from 'react-router-dom';
import { useAuth } from '../hooks/index.js';
import { Home, Login, Settings, Signup, UserProfile } from '../pages';
import { Loader, Navbar } from '../components/index.js';
import { Navigate } from 'react-router-dom';

function PrivateRoute() {
  const auth = useAuth();

  return auth.user ? <Outlet /> : <Navigate to="/login" />;
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
          <Route exact path="/" element={<Home posts={[]} />} />
          <Route exact path="/login" element={<Login />} />
          <Route element={<PrivateRoute />}>
            <Route exact path="/register" element={<Signup />} />
            <Route exact path="/settings" element={<Settings />} />
          </Route>

          <Route exact path="/user/:userId" element={<UserProfile />} />

          <Route path="*" element={<Page404 />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
