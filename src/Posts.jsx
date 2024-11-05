import { useEffect, useState } from "react"
import Post from "./Post";

export default function Posts(){

    const [Posts, setPosts] = useState([]);
    useEffect( ()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data =>setPosts(data))
    }, [])

    return (
        <div className="">
            <h3>Posts: {Posts.length}</h3>
            {
                Posts.map(post => <Post post={post}></Post>)
            }
        </div>
    )
}
