import React from "react";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Home from "./Home";
import Navbar from "./SideComponents/Navbar";

import createPosts from "./Create/createPosts";
import createConnect from "./Create/createConnect";
import createExplore from "./Create/createExplore";
import createDownloads from "./Create/createDownloads";
import createLinks from "./Create/createLinks";
import login from "./Login";
import studentredirect from "./StudentRedirect/Student";

import EditPosts from "./Edit/EditPosts";
import EditConnect from "./Edit/EditConnect";
import EditExplore from "./Edit/EditExplore";
import EditDownloads from "./Edit/EditDownloads";
import EditLinks from "./Edit/EditLinks";

import Coordinator from "./Coordinator/Coordinator";

function App(){
    return(
        <Router>
            <>
                <Switch>
                    <Route path="/" exact component={Home}/>

                    {/* Create Routes */}
                    <Route path="/addPosts" exact component={createPosts} />
                    <Route path="/addConnect" exact component={createConnect} />
                    <Route path="/addExplore" exact component={createExplore} />
                    <Route path="/addDownloads" exact component={createDownloads} />
                    <Route path="/addLinks" exact component={createLinks} />
                    {/* login page */}
                    <Route path="/login" exact component={login}/>
                    <Route path="/stuRedirect" exact component={studentredirect} />


                    {/* Edit Routes */}
                    <Route path="/edit/:id" exact component={EditPosts} />
                    <Route path="/editConnect/:id" exact component={EditConnect} />
                    <Route path="/editExplore/:id" exact component={EditExplore} />
                    <Route path="/editDownloads/:id" exact component={EditDownloads} />
                    <Route path="/editLinks/:id" exact component={EditLinks} />

                    {/*Coodinator routes*/}
                    <Route path="/coordinator" exact component={Coordinator} />

                </Switch>
            </>
        </Router>
    );
}

export default App;