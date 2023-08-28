'use client'

import { useEffect, useState } from "react";

const CusineOne = () => {

    const [cusineOne, setCusineOne] = useState([]);

  useEffect(() => {
    async function fetchCusineOne () {

        try {
            const apiKey = process.env.NEXT_PUBLIC_API_KEY;
            const response = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&cuisines=Italian`);
            const data = await response.json();
            // localStorage.setItem('cusine1', JSON.stringify(recipes.results));
            setCusineOne(data.results);
          } catch (error) {
            console.error('Error fetching data:', error);
          }

        // const check = localStorage.getItem('cusine1');
        // if (check){
        //   setCusine1(JSON.parse(check));
        // }else {
         
        // }        
    }  
    console.log(fetchCusineOne())    

    fetchCusineOne();
  }, []);


  return (
    <section>

    </section>
  )
}

export default CusineOne;