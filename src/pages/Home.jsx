import React, { useEffect, useState } from 'react'
import Spinner from '../Component/Spinner';
import Products from '../Component/Products';

const Home = () => {
  const API_URL = "https://fakestoreapi.com/products";
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);

  async function fetchProductData() {
    setLoading(true);

    try {

      const res = await fetch(API_URL);
      const data = await res.json();

      setPosts(data);
      // console.log(data);

    } catch (error) {
      console.log("Error Aagaya");
      setPosts([]);
    } 
    setLoading(false);
  }
  useEffect(() => {
    fetchProductData();
  }, [])

  return (
    <div>
      {
        loading ? <Spinner /> :
          posts.length > 0 ? (<div className='grid es:grid-cols-1 sm:grid-cols-2 mg:grid-cols-3 lg:grid-cols-4 max-w-6xl p-2 mx-auto space-y-10 space-x-5 min-h-[80vh]'> 
          {posts.map((post) => ( <Products key={post.id} post={post} /> ))}</div>) :
            <div className='flex justify-center items-center '>
              <p>No Data Found</p>
            </div>
      }
    </div>
  )
}

export default Home
