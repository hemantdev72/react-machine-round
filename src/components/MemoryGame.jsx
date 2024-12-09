import React, { useEffect, useState } from 'react'
import { use } from 'react';

const MemoryGame = () => {
    const [cards,setCards]=useState(generateNumbers());
    const [lock,setLock]=useState(false);
    const [flippedCards,setFlippedCards]=useState([]);

    function handleClick(index){
        if(cards[index].isFlipped || lock){
            return
        }
        const new_cards=[...cards];
        new_cards[index].isFlipped=true;
        setCards(new_cards)
        setFlippedCards([...flippedCards,index]);
    }

    console.log(flippedCards);
    useEffect(()=>{
        if(flippedCards.length===2){
            setLock(true);
            setTimeout(()=>{
                if(cards[flippedCards[0]].number!==cards[flippedCards[1]].number){
                    setCards((prev)=>{
                        const new_arr=[...prev];
                        new_arr[flippedCards[0]].isFlipped=false
                        new_arr[flippedCards[1]].isFlipped=false

                        return new_arr;
                    })
                }
                setFlippedCards([]);
                setLock(false)
            },3000)
        }
    },[flippedCards])

  return (
    <div className='grid grid-cols-6 gap-2 w-[20%] h-[40%]'>
        {cards.map((card,index)=>(
            <button onClick={()=>handleClick(index)} className='h-10 w-10 bg-gray-300 font-bold'>{card.isFlipped ?  card.number :"?"}</button>
        ))}
    </div>
  )
}

export default MemoryGame

function generateNumbers(){

    const arr = Array.from({ length: 18 }, (_, index) => index + 1);
  const grid = [...arr, ...arr].sort(() => Math.random() - 0.5);
  const cards = grid.map((item, index) => {
    return { id: index, number: item, isFlipped: false };
  });

  return cards;
}