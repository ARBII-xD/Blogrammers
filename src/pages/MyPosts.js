import { doc, getDocs, deleteDoc } from 'firebase/firestore';
import React, { useState, useEffect } from 'react'
import { db, auth } from '../firebase-config'
import { collection } from 'firebase/firestore';
import "../App.css";
import { useNavigate } from 'react-router-dom';



const MyPosts = ({ isAuth }) => {
    let navigate = useNavigate();
    const [myPostList, setMyPostsList] = useState([]);

    const postCollectionRef = collection(db, "posts");

    useEffect(() => {
        const getAllPosts = async () => {
            const data = await getDocs(postCollectionRef);
            setMyPostsList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        };
        getAllPosts();

    }, []);

    const deletePost = async (id) => {
        const postDoc = doc(db, "posts", id);
        await deleteDoc(postDoc);
        window.location.reload();

    }

    return (
        <div className='Rtn_cards'>
            {myPostList.map((post) => (

                <div>
                    {post.author.id === auth.currentUser.uid && (
                        <div className="card" >
                            <div className='title'>
                                <h3 >{post.title}</h3>
                                <div className="deletePost">
                                    {isAuth && post.author.id === auth.currentUser.uid && (
                                        <button
                                            className='btn_trash'
                                            onClick={() => {
                                                deletePost(post.id);
                                            }}
                                        >
                                            &#128465;
                                        </button>
                                    )}
                                </div>
                            </div>

                            <p className="content">

                                {post.content}

                                <h4 >@{post.author.name}</h4>
                            </p>
                        </div>


                    )}




                </div>

            ))}

        </div>
    )}
    export default MyPosts;
