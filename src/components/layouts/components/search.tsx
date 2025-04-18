'use client'

import React, { useState } from 'react'
import { Search } from 'lucide-react'

const SearchButton = () => {
  const [query, setQuery] = useState('')

  const handleSearch = () => {
    console.log('Searching for:', query)
    // Add search logic here
  }

  return (
    <div className="flex items-center">
      <div className="relative group transition-all duration-300 ease-in-out">
        <input
          type="text"
          placeholder="Search..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
          className="w-[192px] h-[43px] pl-10 pr-4 py-2 rounded-[32px] text-white placeholder-white border
           bg-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-[transparent]
           group-hover:scale-105 group-hover:shadow-[0_0_12px_rgba(255,255,255,0.3)] 
           focus:scale-105 focus:shadow-[0_0_12px_rgba(255,255,255,0.3)] 
           transition-all duration-300 ease-in-out"
        />
        <Search 
          className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-white 
          group-hover:scale-110 group-hover:animate-pulse 
          group-focus-within:scale-110 
          transition-transform duration-300 ease-in-out" 
        />
      </div>
    </div>
  )
}

export default SearchButton