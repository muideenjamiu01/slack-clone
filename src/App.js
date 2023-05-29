import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Chat from "./components/Chat/Chat";
import { useStateValue } from "./StateProvider";
import Login from "./components/Login/Login";

function App() {
  const [{ user }, dispatch] = useStateValue();
  return (
    <div className="App">
      <Router>
        {!user ? (
          <Login />
        ) : (
          <div>
            {/* header */}
            <Header />
            <div className="app__body">
              {/* sidebar */}
              <Sidebar />
              <Switch>
                <Route path="/room/:roomId">
                  <Chat />
                </Route>
                <Route path="/">
                  <Chat />
                </Route>
              </Switch>

              {/* react-router -> chat screen */}
              {/*  */}
            </div>
          </div>
        )}
      </Router>
    </div>
  );
}

export default App;
