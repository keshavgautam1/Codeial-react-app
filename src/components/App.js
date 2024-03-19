import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useAuth } from '../hooks/index.js';
import { Home, Login, Settings, Signup, UserProfile } from '../pages';
import { Loader, Navbar } from '../components/index.js';
import { Navigate } from 'react-router-dom';

function PrivateRoute({ children, ...rest }) {
  const auth = useAuth();

  return (
    <Route
      {...rest}
      render={() => (auth.user ? children : <Navigate to="/login" replace />)}
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
          <Route exact path="/" element={<Home posts={[]} />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/register" element={<Signup />} />
          <PrivateRoute
            exact
            path="/settings"
            element={<Settings />}
          ></PrivateRoute>
          <PrivateRoute
            exact
            path="/user/:userId"
            element={<UserProfile />}
          ></PrivateRoute>

          <Route path="*" element={<Page404 />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
