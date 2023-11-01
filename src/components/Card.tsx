import React from 'react'
interface cardProps{
    src:string | undefined;
    type?:"small"|"large";
}

function Card({src,type}:cardProps) {
  return (
    <div className={`card-shadow grid place-items-center m-2 `}>
        <img  src={src} alt="" />
    </div>
  )
}

export default Card;
//className={`${type=='large'?'':'h-48'}`}
//${type=='large'?'h-56':"h-52"}