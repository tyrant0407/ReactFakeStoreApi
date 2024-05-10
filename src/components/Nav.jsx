import React from 'react'

const Nav = () => {
    return (
        <>
            <nav className='w-[15%] h-full bg-zinc-100 flex flex-col items-center pt-5'>

                <a className='py-2 px-6 border rounded border-blue-200 text-blue-300' href="/create">
                    Add New Product</a>
                <hr className='w-[80%] my-3' />
                <h1 className='text-2xl  mb-3'> Category</h1>
                <ul className='w-[80%]'>
                    <li className='mb-3 flex items-center'>
                        <span className='rounded-full mr-2 w-[15px] h-[15px] bg-blue-100'></span>{""}
                        cat 1</li>
                    <li className='mb-3 flex items-center'>
                        <span className='rounded-full mr-2 w-[15px] h-[15px] bg-red-100'></span>{""}
                        cat 2</li>
                    <li className='mb-3 flex items-center'>
                        <span className='rounded-full mr-2 w-[15px] h-[15px] bg-fuchsia-400'></span>{""}
                        cat 3</li>
                    <li className='mb-3 flex items-center'>
                        <span className='rounded-full mr-2 w-[15px] h-[15px] bg-amber-500'></span>{""}
                        cat 4</li>
                    <li className='mb-3 flex items-center'>
                        <span className='rounded-full mr-2 w-[15px] h-[15px] bg-lime-500'></span>{""}
                        cat 5</li>

                </ul>

            </nav>
        </>
    )
}

export default Nav