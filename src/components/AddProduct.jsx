import React,{useState,useEffect} from 'react'
import { storage } from '../utils/firebase';
import {v4} from 'uuid'
import {ref, uploadBytes, listAll, getDownloadURL} from "firebase/storage"
import Product from './Product';
const AddProduct = () => {
    const [imageUpload, setImageUpload] = useState(null)
    const [imageUrls, setImageUrls] = useState([])
  
    const imagesListRef = ref(storage, "images/")
    const uploadFile = () => {
      if (imageUpload == null) return;
      const imageRef = ref(storage, `images/${imageUpload.name + v4()}`)
      uploadBytes(imageRef, imageUpload).then((snapshot) => {
        getDownloadURL(snapshot.ref).then((url) => {
          setImageUrls((prev) => [...prev, url])
        })
        
      })
    }
    useEffect(() => {
        listAll(imagesListRef).then((response) => {
          response.items.forEach((item) => {
            getDownloadURL(item).then((url) => {
              setImageUrls((prev) => [...prev, url])
            })
          })
        })
      }, [])
  return (
    <div className="addProduct">
    <input type = "file" onChange = {(event) => {setImageUpload(event.target.files[0])}}/>
    <button onClick={uploadFile}>Upload Image</button>
    <div className='available-products'>
    {imageUrls.map((url) => {
     return <Product url={url}/>
    })}

    </div>
   
   </div>
  )
}

export default AddProduct