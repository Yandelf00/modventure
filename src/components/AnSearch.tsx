import React from 'react'

export default function AnSearch() {
  return (
    <div className="relative w-[80%] text-gray-600 mr-1">
            <button type="submit" className="absolute right-0 top-0 mt-2 mr-2">
                <svg
                    className="h-4 w-4 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                >
                    <path
                        fillRule="evenodd"
                        d="M13.53 14.47a8 8 0 111.414-1.414l3.96 3.96a1 1 0 01-1.414 1.414l-3.96-3.96zM8 14a6 6 0 100-12 6 6 0 000 12z"
                        clipRule="evenodd"
                    />
                </svg>
            </button>
            <input
                type="search"
                name="search"
                placeholder='search'
                className="bg-fadDarkBlue h-8 px-5 pr-10 w-full rounded-md text-sm focus:outline-none"  
            />
    </div>
  )
}
