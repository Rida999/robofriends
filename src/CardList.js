import React from 'react';
import Card from './Card';

export default function CardList({robots}) {
    const CardsArray=robots.map((each,i)=>{
        return <Card key={i} id={each.id} email={each.email} name={each.name}/>
    })
    return (
    <div>
        {CardsArray}
    </div>
    )
}
