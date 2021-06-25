import React from "react";
import Axios from "axios";
import Data from "./Data";
import Loading from "../SideComponents/LoadingPost";
import InfiniteScroll from "react-infinite-scroll-component";

class Posts extends React.Component {
    state = {
        page: 6,
        posts: [],
        loading: true,
    }
    fetchPosts = async () => {
        Axios.post(`/getposts`, this.state).then((res) => {
            if(res.data.status === 200){
                this.setState({posts: res.data.posts});
                this.setState({loading: false});
                this.setState({page: this.state.page + 6});
            }
        }).catch((error) => {
            console.log(error);
        });
    }
    componentDidMount(){
        this.fetchPosts();
    }

    deletePost = async (id) => {
        const res = await Axios.delete(`/addPost/${id}`);
        if(res.data.status === 200){
            this.fetchPosts();
        }
    }
    
    render(){
        return(
            <>
            <InfiniteScroll
            dataLength={this.state.posts.length} //This is important field to render the next data
            next={this.fetchPosts}
            hasMore={true}
            loader={<h2>Loading...</h2>}
            endMessage={
              <p style={{ textAlign: 'center' }}>
                <b>Yay! You have seen it all</b>
              </p>
            }
            
            >
                {this.state.posts.map(posts => (
                    <Data posts = {posts} key={posts.id} deletePost = {this.deletePost}/>
                ))}
            </InfiniteScroll>
            </>
        )
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

export default Posts;