import React, { useEffect, useState } from 'react'

const Meals = () => {
  const[meals,setMeals] = useState([])
  const[search,setSearch] = useState("chicken")
  useEffect(()=>{
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
    .then(res => res.json())
    .then(data => setMeals(data.meals))
  },[search])
  const handlesearch = (e) =>{
    setSearch(e.target.value)
    console.log(search)
    // console.log(meals)
  }
  return (
    <div>
      <div className='my-12 text-center'>
        <p className='text-5xl lg:text-7xl font-semibold text-white'>Khai Khai</p>
        <input type="text" className='border p-3 rounded-md text-lime-300' placeholder='search' onChange={handlesearch} />
      </div>
      <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
        {
          meals.map((meal,idx)=>(
            <div key={idx} className=" rounded overflow-hidden border bg-zinc-800 shadow-md gap-8">
            <img className="w-[400px] h-56 object-cover rounded-xl p-5" src={meal.strMealThumb} alt={meal.strMeal} />
            <div className="px-6 py-4">
              <p className=' text-slate-400 text-base font-semibold'>{meal.strMeal}</p>
              <p className=" text-base text-orange-500">$ 99</p>
            </div>
          </div>
          ))
        }
      </div>
    </div>
  )
}

export default Meals
