'use client'

import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";


const Cusine = () => {
  // const router = useRouter()

    const [cusine, setCusine] = useState([]);

  useEffect(() => {
    async function fetchCusine () {

        try {
            const apiKey = process.env.NEXT_PUBLIC_API_KEY;
            const response = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&cuisines=Italian`);
            const data = await response.json();
            // localStorage.setItem('cusine1', JSON.stringify(recipes.results));
            setCusine(data.results);
          } catch (error) {
            console.error('Error fetching data:', error);
          }

        // const check = localStorage.getItem('cusine1');
        // if (check){
        //   setCusine1(JSON.parse(check));
        // }else {
         
        // }        
    }  
    console.log(fetchCusine())    

    fetchCusine();
  }, []);


  return (
    <section>
      <h1>cusine</h1>
    </section>
  )
}

export default Cusine;