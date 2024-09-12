import React,{useEffect,useContext,useState} from 'react';

import {PostContext} from '../../store/PostContext'
import {FirebaseContext} from '../../store/Context'

import './View.css';
function View() {

  const [userDetailes,setUserDetailes] = useState({})

  const {postDetailes} = useContext(PostContext)
  const {firebase} = useContext(FirebaseContext)

  useEffect(() => {
    firebase.firestore().collection('users').doc(postDetailes.user).get().then((res) => {
      setUserDetailes(res.data())
    })
  }
  , [])

  return (
    <div className="viewParentDiv">
      <div className="imageShowDiv">
        <img
          src={postDetailes.url}
          alt=""
        />
      </div>
      <div className="rightSection">
        <div className="productDetails">
          <p>&#x20B9; {postDetailes.price} </p>
          <span>{postDetailes.name}</span>
          <p>{postDetailes.category}</p>
          <span>{postDetailes.createdAt}</span>
        </div>
        {userDetailes && <div className="contactDetails">
          <p>Seller details</p>
          <p>{userDetailes.name}</p>
          <p>{userDetailes.phone}</p>
        </div>}
      </div>
    </div>
  );
}
export default View;
