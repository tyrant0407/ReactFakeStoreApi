import React from 'react'
import { Link } from 'react-router-dom'
Link

const Details = () => {
  return (
<div className='flex items-center justify-center w-full'>
<div className="h-full w-[80%] bg-blue-100 py-8 flex items-center justify-center">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row -mx-4">
            <div className="md:flex-1 px-4">
                <div className="h-[460px] rounded-lg bg-black-300 dark:bg-black-700 mb-4">
                    <img className='w-full h-full object-cover rounded-lg' src="https://cdn.pixabay.com/photo/2020/05/22/17/53/mockup-5206355_960_720.jpg" alt="" />
                </div>
                <div className="flex -mx-2 mb-4">
                    <div className="w-1/2 px-2">
                        <button className="w-full bg-white text-black py-2 px-4 border font-bold hover:bg-red-300 dark:hover:bg-black-700">Edit</button>
                    </div>
                    <div className="w-1/2 px-2">
                        <button className="w-full bg-white  text-black-800 border  dark:text-black py-2 px-4  font-bold hover:bg-red-300 dark:hover:bg-black-600">Delete</button>
                    </div>
                </div>
            </div>
            <div className="md:flex-1 px-4">
                <h2 className="text-2xl font-bold text-black-800 dark:text-black mb-2">Product Name</h2>
               
                <div className="flex mb-4 mt-4">
                    <div className="mr-4">
                        <span className="font-bold text-black-700 dark:text-black-300">Price:</span>
                        <span className="text-black-600 dark:text-red-800 font-bold">$29.99</span>
                    </div>
                </div>
                <div className='mb-5'>
                        <span className="font-bold text-black-700 dark:text-black-300">Availability:</span>
                        <span className="text-black-600 dark:text-black-300">In Stock</span>
                    </div>
               
               
                <div>
                    <span className="font-bold text-black-700 dark:text-black-300">Product Description:</span>
                    <p className="text-black-600 dark:text-black-300 text-sm mt-2">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                        sed ante justo. Integer euismod libero id mauris malesuada tincidunt. Vivamus commodo nulla ut
                        lorem rhoncus aliquet. Duis dapibus augue vel ipsum pretium, et venenatis sem blandit. Quisque
                        ut erat vitae nisi ultrices placerat non eget velit. Integer ornare mi sed ipsum lacinia, non
                        sagittis mauris blandit. Morbi fermentum libero vel nisl suscipit, nec tincidunt mi consectetur.
                    </p>
                </div>
            </div>
        </div>
    </div>
</div>
</div>
  )
}

export default Details
