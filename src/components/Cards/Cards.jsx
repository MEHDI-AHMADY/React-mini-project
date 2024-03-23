import React from 'react';
import Card from './Card';


function Cards() {
    const allCards = [
        {id : 1 , title : "First Card" , price : "$120" },
        {id : 2 , title : "Second Card" , price : "$130" },
        {id : 3 , title : "Third Card" , price : "$140" }
    ];

  return (
    <div className='w-full py-[10rem] px-4 bg-white'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
           <Card {...allCards[0]}></Card>
           <Card {...allCards[1]} special></Card>
           <Card {...allCards[2]}></Card>
        </div>
    </div>
  )
}

export default Cards