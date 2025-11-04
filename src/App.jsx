import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Images from './components/Images'
import Button from './components/Button'

const App = () => {

  const [userData, setUserData] = useState([])
  const [index, setIndex] = useState(1)




  let printUserdata = <h3 className='text-white text-8xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 absolute'>Loading.....</h3>

  const prev = () => {
    if (index > 1) {
      setIndex(index - 1)
      setUserData([])
    }

  }

  const next = () => {
    if (index < 56) {
      setIndex(index + 1)
      setUserData([])
    }
  }




  const getData = async () => {
    const response = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=18`)
    setUserData(response.data)
    console.log(response.data);
  }

  useEffect(() => {
    getData()
  }, [index])


  if (userData.length > 0) {
    printUserdata = userData.map((elem, idx) => {
      return <div key={idx}>
        <Images elem={elem} />
      </div>
    })
  }

  return (
    <div className='h-screen w-screen overflow-auto bg-black'>
      <h1 className='text-white text-6xl w-full flex items-center justify-center mt-5 '>API BASED GALLERY WEB APP</h1>
      <div className='text-white flex flex-wrap m-2 gap-6 w-screen ml-15 mt-6 h-[76%]'>{printUserdata}</div>
      
      <Button prev={prev} next={next} index={index}/>
    </div>
  )
}

export default App
