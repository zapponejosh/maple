import React, { useState } from 'react';
import logo from './logo.svg';
import styles from './App.module.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Welcome from './components/Welcome/Welcome';

function App(): JSX.Element {
  const [count, setCount] = useState<number>(0);

  return (
    <Router>
      <div className={styles.App}>
        <header className={styles['App-header']}>
          <div>
            <Link to="/about">About</Link> | <Link to="/">Home</Link>
          </div>
          <img src={logo} className={styles['App-logo']} alt="logo" />

          <Routes>
            <Route path="/about" element={<main>About</main>} />

            <Route
              path="/"
              element={
                <main>
                  Home
                  <Welcome />
                </main>
              }
            />

            <Route
              path="*"
              element={
                <main style={{ padding: '1rem' }}>
                  <h1>404</h1>
                  <p>There's nothing here!</p>
                </main>
              }
            />
          </Routes>
        </header>
      </div>
    </Router>
  );
}

export default App;
