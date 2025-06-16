import React from 'react';

function Gadgets() {
  return (
     <div className='bg-white flex items-center max-w-7xl  border border-gray-300 mx-auto rounded mt-4'>

            <div className='w-1/5'>
                <div className='relative'>
                    <img src="/images/electronic.png" alt="electric-bg" className='w-full h-full object-contain' />
                    <div className='absolute top-8 left-6 z-10'>
                        <p className='text-xl font-bold  mb-2 leading-snug'>Consumer <br />electronics and <br /> gadgets</p>
                        <button className='bg-white text-black font-medium px-4 py-2 rounded'>Source Now</button>
                    </div>
                </div>
            </div>

            <div className='w-1/5 flex flex-col border-r border-gray-300'>

                <div className='flex justify-between p-4 flex-1 border-b border-gray-300'>
                    <div className='flex flex-col justify-between'>
                        <p className='text-lg font-normal'>Soft Chairs</p>
                        <p className='text-stone-400 font-medium'>From <br /> USD 19</p>
                    </div>
                    <div className='self-end'>
                        <img src="/images/chair.jpeg" alt="chair" className='w-16 h-16 object-contain ml-4' />
                    </div>
                </div>

                <div className='flex justify-between p-4 flex-1'>
                    <div className='flex flex-col justify-between'>
                        <p className='text-lg font-normal'>Soft Chairs</p>
                        <p className='text-stone-400 font-medium'>From <br /> USD 19</p>
                    </div>
                    <div className='self-end'>
                        <img src="/images/juicer.jpeg" alt="chair" className='w-16 h-16 object-contain ml-4' />
                    </div>
                </div>

            </div>


            <div className='w-1/5 flex flex-col border-r border-gray-300'>

                <div className='flex justify-between p-4 flex-1 border-b border-gray-300'>
                    <div className='flex flex-col justify-between'>
                        <p className='text-lg font-normal'>Soft Chairs</p>
                        <p className='text-stone-400 font-medium'>From <br /> USD 19</p>
                    </div>
                    <div className='self-end'>
                        <img src="/images/lamp.jpeg" alt="chair" className='w-16 h-16 object-contain ml-4' />
                    </div>
                </div>

                <div className='flex justify-between p-4 flex-1'>
                    <div className='flex flex-col justify-between'>
                        <p className='text-lg font-normal'>Soft Chairs</p>
                        <p className='text-stone-400 font-medium'>From <br /> USD 19</p>
                    </div>
                    <div className='self-end'>
                        <img src="/images/coffee.jpeg" alt="chair" className='w-16 h-16 object-contain ml-4' />
                    </div>
                </div>

            </div>



            <div className='w-1/5 flex flex-col border-r border-gray-300'>

                <div className='flex justify-between p-4 flex-1 border-b border-gray-300'>
                    <div className='flex flex-col justify-between'>
                        <p className='text-lg font-normal'>Soft Chairs</p>
                        <p className='text-stone-400 font-medium'>From <br /> USD 19</p>
                    </div>
                    <div className='self-end'>
                        <img src="/images/solar.jpeg" alt="chair" className='w-16 h-16 object-contain ml-4' />
                    </div>
                </div>

                <div className='flex justify-between p-4 flex-1'>
                    <div className='flex flex-col justify-between'>
                        <p className='text-lg font-normal'>Soft Chairs</p>
                        <p className='text-stone-400 font-medium'>From <br /> USD 19</p>
                    </div>
                    <div className='self-end'>
                        <img src="/images/bags.jpeg" alt="chair" className='w-16 h-16 object-contain ml-4' />
                    </div>
                </div>

            </div>


            <div className='w-1/5 flex flex-col border-r border-gray-300'>

                <div className='flex justify-between p-4 flex-1 border-b border-gray-300'>
                    <div className='flex flex-col justify-between'>
                        <p className='text-lg font-normal'>Soft Chairs</p>
                        <p className='text-stone-400 font-medium'>From <br /> USD 19</p>
                    </div>
                    <div className='self-end'>
                        <img src="/images/port.jpeg" alt="chair" className='w-16 h-16 object-contain ml-4' />
                    </div>
                </div>

                <div className='flex justify-between p-4 flex-1'>
                    <div className='flex flex-col justify-between'>
                        <p className='text-lg font-normal'>Soft Chairs</p>
                        <p className='text-stone-400 font-medium'>From <br /> USD 19</p>
                    </div>
                    <div className='self-end'>
                        <img src="/images/p-pot.jpeg" alt="chair" className='w-16 h-16 object-contain ml-4' />
                    </div>
                </div>

            </div>




        </div>
  )
}

export default Gadgets;
