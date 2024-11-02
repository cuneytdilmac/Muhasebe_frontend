import React from 'react'
import { Car } from './ArabalarSayfası';

interface ArabaModeliProps{
    cars:Car[];
}

export default function ArabaModeli(props:ArabaModeliProps) {
 
    console.log(props.cars)
    
return(
<div>

<p>Araba modeli</p>
    
</div>
)
}
