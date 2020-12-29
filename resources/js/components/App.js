import React from "react";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Home from "./Pages/Home";
import About from "./Pages/About";

import login from "./Auth/Login";

import createPosts from "./HardCoded/Create/createPosts";
import createConnect from "./HardCoded/Create/createConnect";
import createExplore from "./HardCoded/Create/createExplore";
import createDownloads from "./HardCoded/Create/createDownloads";
import createLinks from "./HardCoded/Create/createLinks";

import EditPosts from "./HardCoded/Edit/EditPosts";
import EditConnect from "./HardCoded/Edit/EditConnect";
import EditExplore from "./HardCoded/Edit/EditExplore";
import EditDownloads from "./HardCoded/Edit/EditDownloads";
import EditLinks from "./HardCoded/Edit/EditLinks";

import Coordinator from "./RedirectPages/Coordinator/Coordinator";
import studentredirect from "./RedirectPages/Student/Student";
import emailverification from "./emailverification";
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
                    <Route path="/email" exact component={emailverification} />

                </Switch>
            </>
        </Router>
    );
}

export default App;