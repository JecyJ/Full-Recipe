'use client'

import { Splide, SplideSlide } from "@splidejs/react-splide";
import '@splidejs/react-splide/css';
import Image from "next/image";
import { useEffect, useState } from "react"



const APIs = () => {


  const [recipe, setRecipe] = useState([]);

  useEffect(() => {
    async function fetchRandomRecipe() {
        try {
          const apiKey = process.env.NEXT_PUBLIC_API_KEY;
          const response = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${apiKey}&number=10`);
          const data = await response.json();
          setRecipe(data.recipes);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
    }      

    fetchRandomRecipe();
  }, []);

    
  return (
    <>
      <div className="overflow-hidden space-y-3">
        <h3>Popular Picks</h3>
        <Splide options={{
          perPage:3,
          arrows:false,
          pagination: false,
          gap:"5rem",
          drag:"free"
        }}>
          {recipe.map((recipes) => (
            <SplideSlide key={recipes.id}>
              <p className="text-xs">{recipes.title}</p>            
              <Image src={recipes.image} alt="/" width={200} height={200} priority className="w-auto h-auto border rounded-3xl" />
            </SplideSlide>
          ))}
        </Splide>
      </div>
      
    </>
  )
}

export default APIs;