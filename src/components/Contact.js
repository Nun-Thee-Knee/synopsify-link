import React from 'react'

const Contact = () => {
  return (
    <div className='bg-black h-20 flex justify-center items-center'>
        <ul className='flex space-x-10'>
          <li><a href="https://icons.getbootstrap.com/icons/discord/"><i class="bi bi-instagram text-zinc-800 hover:text-zinc-500 cursor-pointer"></i></a></li>
          <li><i class="bi bi-github text-zinc-800 hover:text-zinc-500 cursor-pointer"></i></li>
          <li><i class="bi bi-linkedin text-zinc-800 hover:text-zinc-500 cursor-pointer"></i></li>
          <li><i class="bi bi-discord text-zinc-800 hover:text-zinc-500 cursor-pointer"></i></li>
        </ul>
    </div>
  )
}

export default Contact