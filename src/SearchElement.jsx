import React, { useEffect, useState } from 'react'
import Navbar from './Components/Navbar'
import TrandingSlider from './Components/TrandingSlider'
import { useParams,Link } from 'react-router-dom'
const SearchElement = () => {

    const {searchTerm} = useParams();
    const [data,setData]=useState([])

    
    useEffect(()=>
        {
          const fetchData= async() =>
          {
            const api  =  await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`)
            const data = await api.json();
           
            setData(data.meals)
           
           
          }
          fetchData();
          
        },[searchTerm])
  return (
   <>

<Navbar />
    <div className='box'>
    {
      data.map((d)=>{
        return(
          
      <Link to={`/${d.idMeal}`} key={d.idMeal} className='Clink'>
          <div className='tool'>
            <div className='imgn'>
              <img  src={d.strMealThumb} alt="" />

            </div>
            <h2>{d.strMeal}</h2>
          </div>
          </Link>

        )
      })
    }
    </div>
 
   </>
  )
}

export default SearchElement
