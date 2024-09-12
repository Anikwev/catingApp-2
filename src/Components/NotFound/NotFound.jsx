import Lottie from 'lottie-react'
import React from 'react'
import notFound from '../../../public/animation/Animation  02- 1723618056844.json'

const NotFound = () => {
  return (
    <div className='w-[1500px] m-auto'>
        <Lottie animationData={notFound} />
        <h1 className='text-7xl font-bold' > Page Not Found</h1>
    </div>
  )
}

export default NotFound