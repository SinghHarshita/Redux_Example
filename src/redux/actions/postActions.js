import { FETCH_POSTS, NEW_POST } from './types';

const fetchPosts = () => dispatch => {
    console.log("fetching")
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(posts => dispatch({
            type: FETCH_POSTS,
            payload: posts
        }) 
    );
};

export default fetchPosts;

export const createPost = (postData) => dispatch => {
    console.log("sending")
    fetch('https://jsonplaceholder.typicode.com/posts', {
            method : 'POST',
            headers : {
                'content-type' : 'application/json'
            },
            body : JSON.stringify(postData)
        })
        .then(res => res.json())
        .then(post => dispatch({
            type: NEW_POST,
            payload: post}));
};

// export default function fetchPosts() {
//     return function(dispatch){
//         fetch('https://jsonplaceholder.typicode.com/posts')
//             .then(res => res.json())
//             .then(posts => dispatch({
//                 type: FETCH_POSTS,
//                 payload: posts
//             }) 
//         );
//     }
// };