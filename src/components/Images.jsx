import React from 'react'

const Images = (props) => {
  return (
    <div>
        <a href={props.elem.url} target='_blank'>
          <div className='h-40 w-60' >
            <img className='h-full w-full rounded-xl object-cover' src={props.elem.download_url} alt="" />
          </div>
          <h2 className='font-bold text-lg'>{props.elem.author}</h2>
        </a>
    </div>
  )
}

export default Images