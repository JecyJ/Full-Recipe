// 'use client'

// import { useEffect, useState } from 'react'
import {AiOutlineSearch} from 'react-icons/ai'

const Veggie = () => {
  return (
    <>
        <div className="flex flex-col items-center justify-center">
            <div>
              <AiOutlineSearch size={20} />
              <input className='bg-dark/60' />
            </div>
        </div>
    </>
  )
}

export default Veggie;