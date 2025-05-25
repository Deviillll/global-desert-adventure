import { MoveUpRight } from 'lucide-react'
import React from 'react'

type Props = {}

const KidsBuggy = (props: Props) => {
  return (
    <div className='h-[120vh] my-10 md:my-0 w-screen gap-y-10 md:gap-y-0 flex flex-col md:flex-row justify-between md:justify-center items-center container text-white'>

        <div className='h-[40%] md:h-[90%] w-[90%] md:w-[40%] '>
            <img src="https://globaldesertadventure.com/wp-content/uploads/2025/04/kids-buggy-1366x2048.png" className='h-full w-[90%] object-center object-cover rounded-t-full ml-5' alt="" />
        </div>
        <div className='h-[80%] w-[90%] md:w-[40%]  flex flex-col justify-center gap-y-5 pl-10 '>
            <h1 className='text-4xl md:text-6xl w-[80%] font-semibold '><span className='text-orange-400'>kids Buggy</span> Dubai & Events Dubai</h1>
            <p className='text-sm w-[85%]'>Get ready for an unforgettable family adventure in the stunning Dubai desert! Our top-rated buggies and quads are perfect for both kids and adults, offering exciting rides, sandboarding, and thrilling off-road fun. At our desert camp, we &apos;ve got everything you need for a fantastic day out: a safe play area for kids, tasty food and drinks, and even camel rides for a true desert experience. Whether you &apos;re racing over dunes or relaxing under the sun, we make sure your day is packed with fun and comfort.</p>

             <div>
                <button className="px-10  py-3 outline-2 outline-white ">
            <MoveUpRight className="inline h-4 mr-2"/> Book now
          </button>
             </div>
        </div>

    </div>
  )
}

export default KidsBuggy