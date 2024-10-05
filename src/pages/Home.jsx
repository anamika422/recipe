import React, { useEffect, useState, useRef } from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link, useLocation } from 'react-router-dom';


const Home = () => {
  let searchRef=useRef()
  const[item,setitem]=useState('pizza');
    const[dataRecipe,setdataRecipe]=useState([]);
    async function getData() {
       
        let res=await fetch(`https://api.edamam.com/search?q=${item}&app_id=dca41749&app_key=15009f8a1625de615db865426675f121`)
        let data=await res.json()
        console.log(data.hits)
        setdataRecipe(data.hits)
        
    }
    useEffect(()=>{
        getData()
    },[item])

    const handleClick=()=>{
      let value=searchRef.current.value
      console.log(value)
      setitem(value)

    }
  return (
    <div className="pt-10 bg-gray-200">
      <form action="" className='w-[50%] m-auto gap-5 flex justify-center'>
        <input ref={searchRef} className="p-3 w-[250px]" type="text" placeholder="search recipe.."/>
        <button onClick={handleClick} type='button' className="bg-green-300 w-[120px] rounded-lg ">Search</button>
      </form>
      <div className='grid grid-cols-12 p-4'>
      {
        dataRecipe.map((ele)=>{
          return <Card className='col-span-4 p-2 mt-3 border border-black-500' sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={ele.recipe.image}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
         {ele.recipe.label}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
        </Typography>
      </CardContent>
      <CardActions>
        <Link to='/view' state={ele.recipe} size="small">view recipe</Link>
       
      </CardActions>
    </Card>
        })
      }   
    </div>
    </div>
    
  )
}

export default Home
