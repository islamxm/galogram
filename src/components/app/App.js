//REACT MODULES
import { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

//STYLES
import './App.scss';


//MODULES
import Auth from '../pages/auth/Auth';
import None from '../none/None';

// MAIN COMPONENT
function App() {

    return (
        <Router>
            <div className="wrapper">
                <main className="main">
                    <Switch>
                        <Route exact path={'/auth'}>
                            <Auth/>
                        </Route>
                        <Route exact path={'/login'}>
                            <None/>
                        </Route>
                        <Route exact path={'/'}>
                            <None/>
                        </Route>
                    </Switch>
                </main>
            </div>
        </Router>
    )
}

export default App;