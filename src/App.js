import React from 'react';
import {HashRouter, Route} from 'react-router-dom';
import './App.css';
import About from './routes/About';
import Home from './routes/Home';
import Detail from './routes/Detail';
import Navigation from './components/Navigation';
// <Route path="/" exact={true} component={Home} /> 에서 exact={true}옵션을 주면 정확한 URL만 매칭하여 rendering됨.

function App() {
    return (
        <HashRouter>
            <Navigation />
            <Route path="/" exact={true} component={Home} />
            <Route path="/about" component={About} />
            <Route path="/movie-detail" component={Detail} />
        </HashRouter>
    );
}

export default App;
