import React from "react";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Home from "./Pages/Home";
import About from "./Pages/About";

import login from "./Auth/Login";

import createPosts from "./Create/createPosts";
import createConnect from "./Create/createConnect";
import createExplore from "./Create/createExplore";
import createDownloads from "./Create/createDownloads";
import createLinks from "./Create/createLinks";

import EditPosts from "./Edit/EditPosts";
import EditConnect from "./Edit/EditConnect";
import EditExplore from "./Edit/EditExplore";
import EditDownloads from "./Edit/EditDownloads";
import EditLinks from "./Edit/EditLinks";

import Coordinator from "./Coordinator/Coordinator";
import studentredirect from "./StudentRedirect/Student";

function App(){
    return(
        <Router>
            <>
                <Switch>
                    <Route path="/" exact component={Home}/>
                    <Route path="/about" exact component={About}/>

                    {/* Auth */}
                    <Route path="/login" exact component={login}/>

                    {/* Create Routes */}
                    <Route path="/addPosts" exact component={createPosts} />
                    <Route path="/addConnect" exact component={createConnect} />
                    <Route path="/addExplore" exact component={createExplore} />
                    <Route path="/addDownloads" exact component={createDownloads} />
                    <Route path="/addLinks" exact component={createLinks} />
                    
                    {/* Edit Routes */}
                    <Route path="/edit/:id" exact component={EditPosts} />
                    <Route path="/editConnect/:id" exact component={EditConnect} />
                    <Route path="/editExplore/:id" exact component={EditExplore} />
                    <Route path="/editDownloads/:id" exact component={EditDownloads} />
                    <Route path="/editLinks/:id" exact component={EditLinks} />

                    {/*Redirect Routes*/}
                    <Route path="/coordinator" exact component={Coordinator} />
                    <Route path="/student" exact component={studentredirect} />

                </Switch>
            </>
        </Router>
    );
}

export default App;