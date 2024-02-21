import React from 'react'

const Contact = () => {
  return (
    <div className='bg-black h-20 flex justify-center items-center'>
        <ul className='flex space-x-10'>
          <li><a href="https://github.com/NandiniSharma116"><i class="bi bi-github text-zinc-800 hover:text-zinc-500 cursor-pointer"></i></a></li>
          <li><a href="https://www.instagram.com/nandini_sharma1603/"><i class="bi bi-instagram text-zinc-800 hover:text-zinc-500 cursor-pointer"></i></a></li>
          <li><a href="https://discord.com/channels/misty0883"><i class="bi bi-discord text-zinc-800 hover:text-zinc-500 cursor-pointer"></i></a></li>
          <li><a href="https://www.linkedin.com/in/nandini-sharma-220548290/"><i class="bi bi-linkedin text-zinc-800 hover:text-zinc-500 cursor-pointer"></i></a></li>
        </ul>
    </div>
  )
}

export default Contact