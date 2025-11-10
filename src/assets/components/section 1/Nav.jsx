import React from 'react'

const Nav = () => {
  return (
    <div>
        <nav className=' flex justify-between py-6 px-6 items-center'>
            <div className='logo'>
                <h3 className='text-2xl'>BloomFi</h3>
            </div>
            <div className='center-links'>
                <ul className='flex justify-between gap-6 align-middle'>
                    <li>
                        <a href="#">USD bloom</a>
                    </li>
                    <li>
                        <a href="#">Business</a>
                    </li>
                    <li>
                        <a href="#">Treasury</a>
                    </li>
                    <li>
                        <a href="#">Developers</a>
                    </li>
                    <li>
                        <a href="#">Join Us</a>
                    </li>
                </ul>
            </div>
            <div className='bg-blue-950 text-white px-8 py-2 rounded-4xl'>
                <a href="">Lunch BETA</a>
            </div>
        </nav>
    </div>
  )
}

export default Nav