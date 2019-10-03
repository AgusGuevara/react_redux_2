import React from "react";
import { connect } from 'react-redux'
import UserHeader from "./UserHeader";
import { fetchPostsAndUser } from '../actions/fetchPostsAndUser'


class PostList extends React.Component{
    componentDidMount(){
        this.props.fetchPostsAndUser();
    }
    renderList(){
        return this.props.posts.map(post => {
            return (
            <div className='item' key={post.id}>
                <i className="large middle aligned user icon"/>
                <div className="content">
                    <div className="description">
                        <h2>{post.title}</h2>
                        <h2>{post.body}</h2>
                    </div>
                    <UserHeader userId={post.userId}/>
                </div>
            </div>)
        })
    }
    render(){
        return (
        <div className="ui relaxed divided list">{this.renderList()}</div>
        )
    }
}

const mapStateToProps = state => {
    return { posts : state.posts }
   }
   
export default connect(mapStateToProps,{ fetchPostsAndUser})(PostList)