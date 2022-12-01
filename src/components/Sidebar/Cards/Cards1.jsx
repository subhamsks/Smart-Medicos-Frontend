import React from 'react'
import { Card1Data } from '../../../Data/Data'
// import Card from '../Card/Card'
import Card1 from '../Card/Card1'
import Styles from './Cards1.module.css'



const Cards1 = (props) => {
    const {data} = props;
//   console.log(data);
  return (
    <div className={Styles["Cards"]}>
        {Card1Data.map((card, index)=>{
            return (
                <div className={Styles["parentContainer"]}>
                    <Card1
                    title={card.title}
                    color={card.color}
                    barValue={Math.round(data[index+4])}
                    value={Math.round(data[index+4])}
                    png={card.png}
                    series={card.series}
                    
                    
                    />
                </div>
            )
        })}
         
    </div>
  )
}

export default Cards1