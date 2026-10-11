import React from 'react'

const card = (props) => {
    console.log(props);
  return (
    <div>
      <a href={props.elem.url} target='blank'>
        <div id={props.elem.id} className='h-40 w-44 bg-white rounded-xl overflow-hidden'>
           <img className='h-full w-full object-cover' src={props.elem.download_url} alt="" />
           <h3>{props.elem.author}</h3>
        </div>
          <h2 className='font-bold text-lg '>{props.elem.author}</h2>
      </a>
    </div>
  )
}

export default card
