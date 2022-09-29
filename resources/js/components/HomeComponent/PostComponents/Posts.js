import React from "react";
import Axios from "axios";
import Data from "./Data";
import Loading from "../SideComponents/LoadingPost";
import Empty from "../SideComponents/NoPostFound";
import InfiniteScroll from "react-infinite-scroll-component";
import SearchIcon from "@material-ui/icons/Search";
import { withStyles } from "@material-ui/core/styles";

import CloseIcon from '@material-ui/icons/Close';

const useStyles = theme => ({
    cardTitle: {
        fontSize: "18px",
        paddingLeft: "5px",
        color: theme.palette.primary.dark,
        fontFamily: "Open Sans",
        fontWeight: "600",
        ["@media (max-width:960px)"]: {
            fontSize: "14px"
        },
        ["@media (min-width:1600px)"]: {
            fontSize: "20px"
        }
    },
    searchDiv: {
        width: "100%",
        position: "relative",
        marginBottom: "45px"
    },
    icon: {
        position: "absolute",
        top: "15px",
        left: "15px",
        ["@media (min-width:1600px)"]: {
            top: "20px"
        }
    },
    search: {
        marginTop: "5px",
        width: "100%",
        height: "46px",
        background: theme.palette.primary.accent,
        color: theme.palette.primary.dark,
        fontSize: "16px",
        fontFamily: "Open Sans",
        fontWeight: "500",
        border: "none",
        borderRadius: "12px",
        paddingLeft: "50px",
        "&:placeholder-shown": {
            fontSize: "16px",
            color: theme.palette.primary.dark,
            fontFamily: "Open Sans",
            fontWeight: "500"
        },
        "&:focus": {
            outline: "none",
            border: "1px solid #1687d9",
            backgroundColor: theme.palette.secondary.hover
        },
        "&:hover": {
            backgroundColor: theme.palette.secondary.hover
        },
        ["@media (min-width:1600px)"]: {
            height: "54px",
            fontSize: "20px"
        }
    },
    searchButton: {
        display: "inline-flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "10px 20px",
        outline: "none",
        borderRadius: "12px",
        borderTopLeftRadius: "0",
        borderBottomLeftRadius: "0",
        background: "#1687d9",
        height: "46px",
        border: "none",
        textAlign: "center",
        fontSize: "24px",
        color: "white",
        width: "150px",
        position: "absolute",
        top: "5px",
        right: "0px",
        ["@media (min-width:1600px)"]: {
            top: "5px",
            height: '54px'
        },
        ["@media (max-width:700px)"]: {
            width: "100px"
        }
    },
    cancelIconButton: {
        display: "inline-flex",
        justifyContent: "center",
        alignItems: "center",
        outline: "none",
        // background: "#1687d9",
        // height: "46px",
        color: theme.palette.secondary,
        backgroundColor: theme.palette.secondary,
        textAlign: "center",
        fontSize: "24px",
        color: "white",
        position: "absolute",
        top: "16px",
        right: "170px",
        cursor: 'pointer',
        ["@media (min-width:1600px)"]: {
            top: "5px",
            height: '54px'
        },
        ["@media (max-width:700px)"]: {
           right: "120px",
        }
    }
});

class Posts extends React.Component {
    state = {
        page: 6,
        searchText: "",
        posts: [],
        loading: true,
    };

    inputRef = React.createRef();

    openInNewTab = (url) => {
        window.open(url, '_blank').focus();
      }

    handleChange = e => {
        var search = e.target.value;
        this.setState({ searchText: search });
    };

    _handleKeyDown = e => {
        if (e.key === "Enter") {
            this.getSearchResults();
        }
    };

    getSearchResults = (sText) => {
        if(sText !== "") sText = this.state.searchText;
        this.state.loading = true;
        Axios.post(`/getposts`, {
            page: this.state.page,
            searchText: sText
        })
            .then(res => {
                if (res.data.status === 200) {
                    this.setState({ posts: res.data.posts });
                    this.setState({ loading: false });
                }
            })
            .catch(error => {
                console.log(error);
            });
    };

    // 1. state update 2. input empty 3. post change 4. style fix

    emptyInputs = () => {
        this.inputRef.current.value = ''
        this.setState({searchText: '' })
        this.getSearchResults("");
    }

    


    fetchPosts = async () => {
        Axios.post(`/getposts`, this.state)
            .then(res => {
                if (res.data.status === 200) {
                    this.setState({ posts: res.data.posts });
                    this.setState({ loading: false });
                    this.setState({ page: this.state.page + 6 });
                    return;
                }
            })
            .catch(error => {
                console.log(error);
            });
    };
    componentDidMount() {
        this.fetchPosts();
    }

    deletePost = async id => {
        const res = await Axios.delete(`/addPost/${id}`);
        if (res.data.status === 200) {
            this.fetchPosts();
        }
    };

    render() {
        const { classes } = this.props;
        return (
            <>
                <div className={classes.searchDiv}>
                    <SearchIcon className={classes.icon} />
                    <input
                        className={classes.search}
                        onChange={this.handleChange}
                        placeholder="Search Posts..."
                        onKeyDown={this._handleKeyDown}
                        ref={this.inputRef}
                    />
                    <cancelDiv className={classes.cancelIconButton} onClick={this.emptyInputs}>
                        {(this.state.searchText != "") && <CloseIcon style={{ color: 'darkGray'}}/>}
                    </cancelDiv>
                    <button
                        onClick={this.getSearchResults}
                        className={classes.searchButton}
                    >
                        Search
                    </button>
                </div>
                <h3 className={classes.cardTitle}>Latest Posts</h3>
                {this.state.loading === false &&
                this.state.posts.length === 0 ? (
                    <Empty />
                ) : (
                    <InfiniteScroll
                        dataLength={this.state.posts.length} //This is important field to render the next data
                        next={this.fetchPosts}
                        hasMore={true}
                        loader={<Loading />}
                        endMessage={
                            <p style={{ textAlign: "center" }}>
                                <b>Yay! You have seen it all</b>
                            </p>
                        }
                    >
                        {this.state.posts.map(posts => (
                            <Data
                                posts={posts}
                                key={posts.id}
                                deletePost={this.deletePost}
                            />
                        ))}
                    </InfiniteScroll>
                )}
            </>
        );
    }
    // render(){
    //     if(this.state.loading){
    //         return <Loading />
    //     }
    //     return(
    //             <div>
    //                 {this.state.posts.map(posts => (
    //                     <Data posts = {posts} key={posts.id} deletePost = {this.deletePost}/>
    //                 ))}
    //             </div>
    //     )
    // }
}

export default withStyles(useStyles)(Posts);
