import React from 'react'
// import { CardsData } from '../../../Data/Data'
import Card from '../Card/Card'
import Styles from './Cards.module.css'

const Cards = (props) => {
  const {data,CardsData} = props;
  
  return (
    <div className={Styles["Cards"]}>
        {CardsData.map((card, index)=>{
            return (
                <div className={Styles["parentContainer"]}>
                    <Card
                    title={card.title}
                    color={card.color}
                    barValue={Math.round(data[index+2])}
                    value={Math.round(data[index+2])}
                    png={card.png}
                    series={card.series}
                    
                    
                    />
                </div>
            )
        })}
         
    </div>
  )
}

export default Cards