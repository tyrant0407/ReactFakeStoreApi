import './App.css'

function App() {


  return (
    <div className='h-screen w-screen flex'>
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
      <div className="w-[85%] p-10 pt-[5%] flex flex-wrap overflow-x-hidden overflow-y-auto">
        <div className="mr-3 ml-3  mb-3 card p-3 border shadow rounded w-[18%] h-[30vh] flex-col flex
justify-center items-center">
          <div
            className="hover:scale-110 mb-3 w-full h-[80%] bg-contain bg-no-repeat bg-center"
            style={{
              backgroundImage:
                "url(https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg)",
            }}
          ></div>
          <h1 className='hover:text-blue-300'>Lorem ipsum dolor sit amet.</h1>
        </div>
      </div>
    </div>
  )
}

export default App
