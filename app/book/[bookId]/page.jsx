import React from 'react'
import Search from '../../Components/Search'
import UserNav from '../../Components/Foryou/UserNav'
import BookCard from './BookCard'

export default function page() {
  return (
    <div>
           <div className="relative flex flex-col ml-[200px] w-[calc(100% - 200px)">
          <BookCard />
          </div>
    </div>
  )
}
