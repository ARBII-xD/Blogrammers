import './App.css';
import {BrowserRouter as Router, Routes ,  Route , Link} from 'react-router-dom';
import Home from './pages/Home';
import CreatePost from './pages/CreatePost';
import Login from './pages/Login';
import {useState} from 'react';
import {signOut} from 'firebase/auth';
import { auth} from './firebase-config';
// import {collection, getDocs} from 'firebase/firestore';
import MyPosts from './pages/MyPosts';


function App() {
  const [isAuth , setIsAuth] = useState(localStorage.getItem('isAuth'));

  // const [userInfo, setUserInfo] = useState([]);

  // const postCollectionRef = collection(db, "posts");

  // useEffect(() => {
  //   const getAllPosts = async () => {
  //     const data = await getDocs(postCollectionRef);
  //     setUserInfo(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  //   };
  //   getAllPosts();


  // }, []);






  const UserLogOut = async () => {
    await signOut(auth).then((result) => {
      localStorage.clear();
      setIsAuth(false);
      window.location.pathname = '/';
    }
    )}

  return (
    <>
    <Router>
    
      <nav className="navbr navbar navbar-expand-lg navbar-light bg-light">
        <Link to="#" className='logo'>Blogrammers</Link>
      <Link to="/"> Home</Link>
      {!isAuth ? ( <Link to="/login"> Login</Link> ) : (<> <Link to="/createpost"> Create Post</Link> <Link to="/myPosts">My-Posts </Link> <button className='btn_nav' onClick={UserLogOut}> Log out</button> </> )}
      </nav>

      <Routes>

        <Route  path="/" element={<Home  isAuth={isAuth}/>} />
        <Route  path="/createPost" element={<CreatePost isAuth={isAuth} />} />
        <Route  path="/login" element={<Login setIsAuth={setIsAuth}/>} />
        <Route  path="/myPosts" element={<MyPosts isAuth={isAuth}/>} />

      </Routes>

    </Router>

    </>
  );
}

export default App;
