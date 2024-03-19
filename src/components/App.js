import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { PrivateRoute } from '../Helper/PrivateRoute.js';
import { useAuth } from '../hooks/index.js';
import { Home, Login, Settings, Signup, UserProfile } from '../pages';
import { Loader, Navbar } from '../components/index.js';

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
          <Route
            exact
            path="/settings"
            element={<PrivateRoute outlet={<Settings />} />}
          />
          <Route
            exact
            path="/user/:userId/*"
            element={<PrivateRoute outlet={<UserProfile />} />}
          />

          <Route path="*" element={<Page404 />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
