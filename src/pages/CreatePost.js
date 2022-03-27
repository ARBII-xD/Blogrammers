import React, { useEffect, useState } from 'react'
import '../App.css'
import { addDoc, collection } from "firebase/firestore"
import { auth, db } from "../firebase-config"
import { useNavigate } from 'react-router-dom'
import {toast} from 'react-toastify';

function CreatePost({ isAuth }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const postCollectionRef = collection(db, "posts");
  let navigate = useNavigate();



  const createUserPost = async () => {
    await addDoc(postCollectionRef, {
      title: title,
      content: content, 
      author: {
        name: auth.currentUser.displayName,
        id: auth.currentUser.uid
      },
    })
    toast.success("Post created successfully")
    navigate('/')


  }
  useEffect(() => {
    if (!isAuth) {
      navigate("/login");
    }
  }, []);
  
  return (
    <>
      <div className='createPost'>

        <h1>Create Post</h1>
        <div className='createPostFormElement'>

          <input
            className='createPostFormElement'
            type="text"
            placeholder="Title"
            onChange={(e) => { setTitle(e.target.value) }}
          />

          <textarea
            className='createPostFormElement'
            type="text"
            placeholder="Content"
            onChange={(e) => { setContent(e.target.value) }}
          />

          <button className='btn' onClick={createUserPost}>Create Post</button>
        </div>

      </div>

    </>
  )

}

export default CreatePost