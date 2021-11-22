import React, { useEffect, useState } from "react";
import logoutIcon from "../../../../images/logoutIcon.svg";
import adminOnlineIcon from "../../../../images/adminOnlineIcon.svg";
import recentPostIcon from "../../../../images/recentPostIcon.svg";
import axios from "axios";
import moment from "moment";
import { Link } from "react-router-dom";

const RecentPosts = () => {
    const handleLogout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("userid");
        localStorage.removeItem("useruuid");
        localStorage.removeItem("role");
        localStorage.removeItem("student");
        localStorage.removeItem("admin");
        window.location.href = window.origin + "/login";
    };
    const getRecentPosts = async () => {
        try {
            const posts = await axios.get("/lastThreePosts");
            setPosts(posts.data.posts);
        } catch (err) {
            console.log(err);
        }
    };
    useEffect(() => {
        getRecentPosts();
    }, []);
    const [posts, setPosts] = React.useState([]);
    return (
        <div className="d-flex flex-column min-vh-100 mw-50 w-auto bg-white pt-3">
            <div className="px-3">
                <Link
                    onClick={handleLogout}
                    className="d-flex justify-content-end align-items-center"
                >
                    <img className="display-4" src={logoutIcon} alt="logout" />
                    <h4 className="mt-2 ml-1">Logout</h4>
                </Link>
                <div className="my-5 d-flex flex-column justify-content-center align-items-center">
                    <img src={adminOnlineIcon} alt="Admin" />
                    <h4 className="mt-3">Admin</h4>
                </div>
                <div>
                    <h5 className="font-weight-bold">Recent Activities</h5>
                    <div className="d-flex flex-column my-4 align-items-center">
                        {posts.map(post => (
                            <div className="w-100 d-flex justify-content-between align-items-start">
                                <div className="d-flex">
                                    <Link to={"/showPost/" + post.id}>
                                        <img src={recentPostIcon} alt="Admin" />
                                    </Link>
                                    <div className="ml-4 mt-2 w-auto">
                                        <h6 className="font-weight-bold">
                                            Added a new post
                                        </h6>
                                        <p>"{post.title.substring(1, 15)}"</p>
                                    </div>
                                </div>
                                <div>
                                    <p className="mt-2">
                                        {moment(post.created_at).fromNow()}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <footer className="w-100 mt-auto">
                <hr />
                <p className="px-5">
                    Developed with ❤️ by Genconians, ©️ 2021 GNDEC,ldh
                </p>
            </footer>
        </div>
    );
};

export default RecentPosts;
