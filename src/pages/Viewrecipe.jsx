import React from 'react'
import { useLocation } from 'react-router-dom'
import { Link } from 'react-router-dom';

const Viewrecipe = () => {
let location= useLocation()//{}
console.log(location)
let nutrientsArr=Object.entries(location.state.totalNutrients);
console.log(nutrientsArr)
 
  return (
    <div className="pt-2" >
      <div className="flex gap-5 mt-20 w-[80%]">
      <div className="left">
        <img src={location.state.image} alt="" /></div>
      <div className=" right">
       <h2 className="text-4xl">Title:{location.state.label}</h2> 
       <h3 className="text-3xl">Cuisine Type:{location.state.cuisineType}</h3> 
       <h4 className="text-2xl">Meal Type:{location.state.mealType}</h4>
       <div className="pt=5 bg-green-500"><Link to='/fullrecipe' state={location.state} type="button" className="bg-green-500 p-2 rounded w-[120px] h-[100%]">View Full recipe</Link></div>
       
      </div>
      </div>
      <div className="my-2 p-3 w-[80%] m-auto gap-9 flex">
        <ul className="list-disc"> <b>Indredients</b>
        {
        location.state.ingredientLines.map((ele)=>{
          return <li className="list-disc" type='disc'>{ele}</li>
        })}</ul>
        <ul className="list-disc">
          <b>Healths Label</b>
          {
            location.state.healthLabels.map((ele)=>{
              return<li className="list-disc" type='disc'>{ele}</li>
            })
          }
        </ul>
      </div>
      <div>
      

<div class="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3 bg-gray-50 dark:bg-gray-800">
                    Product name
                </th>
                <th scope="col" class="px-6 py-3">
                    Color
                </th>
                <th scope="col" class="px-6 py-3 bg-gray-50 dark:bg-gray-800">
                    Category
                </th>
                <th scope="col" class="px-6 py-3">
                    Price
                </th>
            </tr>
        </thead>
        <tbody>
          {
            nutrientsArr.map(([key,value])=>{
            return <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {key}
                </th>
                <td class="px-6 py-4">{value.label}</td>
                <td class="px-6 py-4">{value.quantity}</td>
                  <td class="px-6 py-4">{value.unit}</td>
            </tr>
                })
              }
        </tbody>
    </table>
</div>

   
      {/* <h1 className='mt-20'>Single recipe page</h1> */}
    </div>
    </div>
  )
}

export default Viewrecipe
