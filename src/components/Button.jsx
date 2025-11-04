import React from 'react'

const Button = (props) => {
  return (
    <div className="flex justify-center items-center p-4 gap-6">
        <button 
        style={{opacity: props.index == 1? 0.5 : 1}}
        className=' bg-amber-400 active:scale-95 text-black rounded px-4 py-2 font-bold text-xl'
          onClick={props.prev}
        >Prev</button>
        <h3 className='text-2xl text-white'>Page {props.index}</h3>
        <button
        style={{opacity: props.index == 56? 0.5 : 1}}
        className=' bg-amber-400 active:scale-95 text-black rounded px-4 py-2 font-bold text-xl'
          onClick={props.next}
        >Next</button>
      </div>
  )
}

export default Button