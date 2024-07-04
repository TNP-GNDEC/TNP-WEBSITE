import React from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import '../../css/app.css';

import Home from "./Pages/Home";
import About from "./Pages/About";
import Certificates from "./Pages/Certificates/Certificate";
import PlacementRecord from "./Pages/PlacementRecords/PlacementRecord"

import ExecutiveMembers from "./Pages/ExecutiveMembers/ExecutiveMembers";
import TechnicalMembers from "./Pages/TechnicalMembers/TechnicalMembers";
import coreMembers from './Pages/coreMembers/coreMembers';

import login from "./Auth/Login";
import { AdminRoute, StudentRoute } from "./Auth/PrivateRoute";

import NotFound from "./Pages/NotFound/NotFound";

import Email from "./EmailVer";
import Verify from "./RedirectPages/Student/Verify";

import EditPosts from "./HardCoded/Edit/EditPosts";

import Coordinator from "./RedirectPages/Coordinator/Coordinator";
import studentredirect from "./RedirectPages/Student/Student";
import Admin from "./RedirectPages/Admin/Coordinator";

import ForgetPass from "./Auth/ForgotPassword";
import ResetPass from "./Auth/ResetPass";

import ShowPost from "./HardCoded/view/ShowPost";

import MajorRecruiters from "./Pages/MajorRecruiters/MajorRecruiters";

import ContactDetails from "./Pages/ContactDetails";
import MoreInfoPage from "./Pages/MoreInfoPage"
import departmentHeads from "./Pages/DepartmentHeads/departmentHeads";

function App() {

    return (


        <Router>
            <>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/about" exact component={About} />
                    <Route path="/certificate/:id" exact component={Certificates}></Route>
                    <Route path="/majorRecruiters" exact component={MajorRecruiters}></Route>
                    <Route path="/contactDetails" exact component={ContactDetails}></Route>
                    <Route path="/more" exact component={MoreInfoPage}></Route>

                    {/* Members */}
                    <Route path="/coreMembers" exact component={coreMembers} />
                    <Route path="/technicalMembers" exact component={TechnicalMembers}></Route>
                    <Route path="/executiveMembers" exact component={ExecutiveMembers}></Route>
                    <Route path="/departmentHeads" exact component={departmentHeads}></Route>

                    {/* Auth */}
                    <Route path="/login" exact component={login} />

                    {/* Edit Routes */}
                    <Route path="/edit/:id" exact component={EditPosts} />

                    {/*Redirect Routes*/}
                    <AdminRoute path="/coordinator" exact component={Coordinator} />
                    <StudentRoute path="/student" exact component={studentredirect} />
                    <Route path="/admin" exact component={Admin} /> {/*under development*/}

                    {/*Redirect Routes*/}
                    <StudentRoute path="/forms" exact component={Email} />
                    <StudentRoute path="/verify" exact component={Verify} />

                    {/* Reset Password */}
                    <Route path="/forgetPassword" exact component={ForgetPass} />
                    <Route path="/resetPassword/:token" exact component={ResetPass} />

                    {/* viewing Post after Read more */}
                    <Route path="/showPost/:id" exact component={ShowPost}></Route>

                    {/* Public Placement Records */}
                    <Route path="/placementRecords" exact component={PlacementRecord}></Route>

                    {/* Error 404: not found */}
                    <Route path="/*" component={NotFound} />
                </Switch>
            </>

        </Router>

    );
}

export default App;
