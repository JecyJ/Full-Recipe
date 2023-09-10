'use client'

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import {FaPizzaSlice, FaHamburger} from 'react-icons/fa'
import {GiNoodles, GiChopsticks} from 'react-icons/gi'


const Category = () => {
    const router = useRouter();

    const cuisineCategories = [
        {
          name: 'Italian',
          path: '/cusine/italian',
          icon: <FaPizzaSlice size={25} />,
        },
        {
          name: 'German',
          path: '/cusine/german',
          icon: <FaHamburger size={25} />,
        },
        {
          name: 'Thai',
          path: '/cusine/thai',
          icon: <GiNoodles size={25} />,
        },
        {
          name: 'Japanese',
          path: '/cusine/japanese',
          icon: <GiChopsticks size={25} />,
        },
      ];


  return (
    <section className='max-w-[300px] m-auto mt-6'>
        <div className='flex justify-between'>
            {cuisineCategories.map((category) => (
                <Link key={category.path} href={category.path}>
                    <div className={router.pathname === category.path ? 'active' : ''}>
                        <h2>{category.icon}</h2>
                        <p>{category.name}</p>
                    </div>
                </Link>
            ))}
        </div>
    </section>
  )
}

export default Category;

// <Link href={'/cusine/italian'}>
//                 <FaPizzaSlice size={25} />
//                 <h4>Italian</h4>
//             </Link>
//             <Link href={'/cusine/german'}>
//                 <FaHamburger size={25} />
//                 <h4>German</h4>
//             </Link>
//             <Link href={'/cusine/thai'}>
//                 <GiNoodles size={25} />
//                 <h4>Thai</h4>
//             </Link>
//             <Link href={'/cusine/japanese'}>
//                 <GiChopsticks size={25} />
//                 <h4>Japanese</h4>
//             </Link> 