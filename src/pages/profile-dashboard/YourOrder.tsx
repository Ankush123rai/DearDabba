
import FoodItemCardSmall from '../../components/cards/FoodItemCardSmall'

const YourOrder = () => {
  return (
        <div className='grid grid-cols-2 gap-5'>
           {Array.from({length:8}).map((_, ind)=>(
            <FoodItemCardSmall isReOrder={true} key={ind}/>
                ))} 
        </div>
  )
}

export default YourOrder
