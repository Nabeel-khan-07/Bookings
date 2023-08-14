import Card from './Card'
import './Trip.css'

function Tours({tours,removeHandler}){
    
    return (
        <div className='container'>
            <div>
                <h1 className='title'>Book Your Tour</h1>
            </div>
            <div className='cards'>       
                { 
                    tours.map((tour)=>{
                        return  <Card {...tour} removeHandler={removeHandler} key={tour.id}></Card>
                    })
                }                      
    
            </div>
        </div>
    )

}

export default Tours