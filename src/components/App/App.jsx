import React from 'react';
import { Route } from 'react-router-dom';
import HomeView from 'views/HomeView/HomeView.jsx';
import CounterView from 'views/CounterView/CounterView.jsx';
import Header from 'components/Header/Header.jsx';
import Main from 'components/Main/Main.jsx';
import Footer from 'components/Footer/Footer.jsx';

function App() {
  return (
    <div className="App">
      <Header />
      <Main>
        <Route exact path="/" component={HomeView} />
        <Route exact path="/counter" component={CounterView} />
      </Main>
      <Footer />
    </div>
  );
}

export default App;
