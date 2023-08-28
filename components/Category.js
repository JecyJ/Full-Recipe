import Link from 'next/link';
import {FaPizzaSlice, FaHamburger} from 'react-icons/fa'
import {GiNoodles, GiChopsticks} from 'react-icons/gi'


const Category = () => {
  return (
    <section className='max-w-[300px] m-auto mt-6'>
        <div className='flex justify-between'>
            <Link href={'/cusine/italian'}>
                <FaPizzaSlice size={25} />
                <h4>Italian</h4>
            </Link>
            <Link href={'/cusine/german'}>
                <FaHamburger size={25} />
                <h4>German</h4>
            </Link>
            <Link href={'/cusine/thai'}>
                <GiNoodles size={25} />
                <h4>Thai</h4>
            </Link>
            <Link href={'/cusine/japanese'}>
                <GiChopsticks size={25} />
                <h4>Japanese</h4>
            </Link> 
        </div>
    </section>
  )
}

export default Category;