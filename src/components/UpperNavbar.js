import React from 'react'

const UpperNavbar = () => {
  return (
    <div><nav className='ml-[420px] p-12'>
    <ul className='flex space-x-20 justify-center'>
      <li className="text-white">
        <button className='bg-green-800 hover:bg-green-950 rounded-xl h-10 w-auto p-2'>
        <i className="bi bi-floppy mr-2"></i>
          Save Work
        </button>
      </li>
      <li className="text-white">
      <button className='bg-red-800 hover:bg-red-950 rounded-xl h-10 w-auto p-2'>
      <i className="bi bi-trash3 mr-2"></i>
          Delete
        </button>
      </li>
      <li className="text-white">
      <button className='bg-yellow-800 hover:bg-yellow-950 rounded-xl h-10 w-auto p-2'>
      <i className="bi bi-download mr-2"></i>
          Download as a PDF
        </button>
      </li>
    </ul>
  </nav></div>
  )
}

export default UpperNavbar