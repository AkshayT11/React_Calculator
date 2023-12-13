import React, { useState } from 'react'

const Calculator = () => {
    const [result, setResult] = useState("");

    const handleClick = (e) => {
        setResult (result.concat(e.target.value)) ;
    }

    // To clear screen
    const clearScreen = ()=> {
        setResult("");
    }

    const calculateValue= ()=> {
        setResult(eval(result).toString());
    } 

  return (
    <div className='w-screen h-screen bg-gray-800 text-white justify-center items-center flex'>
        <div className="main w-64 h-auto bg-gray-900 border-4 border-gray-100 rounded-2xl shadow-md">
            <div className="screen p-2 ">
                <input type="text" 
                value={result}
                className='text-black text-2xl pt-10 rounded-md w-full shadow-[inset_0_2px_4px_rgba(0,0,0,0.6)]
                placeholder-black outline-none bg-gray-400 px-1 text-right  '
                placeholder="0" />
            </div>
            {/* brand name */}
            <div className="brand bg-gray-200 bg-opacity-90 ">
                <h1 className='text-xl text-red-900 font-bold text-center py-1'>AnkShastra</h1>
            </div>
            {/* KeyBoards */}
            <div className="keyboard">
                <div className="flex justify-between m-2">
                     <input type="button" onClick={clearScreen} value="C" className='bg-red-500 text-black cursor-pointer w-12 h-12 shadow-md rounded-md text-center font-semibold' />
                     <input type="button" onClick={handleClick} value="<" className='bg-gray-200 text-black cursor-pointer w-12 h-12 shadow-md rounded-md text-center font-semibold' />
                     <input type="button" onClick={handleClick} value="%" className='bg-gray-200 text-black cursor-pointer w-12 h-12 shadow-md rounded-md text-center font-semibold' />
                     <input type="button" onClick={handleClick} value="/" className='bg-gray-200  text-black cursor-pointer w-12 h-12 shadow-md rounded-md text-center font-semibold' />
                </div>
                <div className="flex justify-between m-2">
                     <input type="button" onClick={handleClick} value="7" className='bg-gray-200 text-black cursor-pointer w-12 h-12 shadow-md rounded-md text-center font-semibold' />
                     <input type="button" onClick={handleClick} value="8" className='bg-gray-200 text-black cursor-pointer w-12 h-12 shadow-md rounded-md text-center font-semibold' />
                     <input type="button" onClick={handleClick} value="9" className='bg-gray-200 text-black cursor-pointer w-12 h-12 shadow-md rounded-md text-center font-semibold' />
                     <input type="button" onClick={handleClick} value="*" className='bg-blue-400  text-black cursor-pointer w-12 h-12 shadow-md rounded-md text-center font-semibold' />
                </div>
                <div className="flex justify-between m-2">
                     <input type="button" onClick={handleClick} value="4" className='bg-gray-200 text-black cursor-pointer w-12 h-12 shadow-md rounded-md text-center font-semibold' />
                     <input type="button"  onClick={handleClick}value="5" className='bg-gray-200 text-black cursor-pointer w-12 h-12 shadow-md rounded-md text-center font-semibold' />
                     <input type="button" onClick={handleClick} value="6" className='bg-gray-200 text-black cursor-pointer w-12 h-12 shadow-md rounded-md text-center font-semibold' />
                     <input type="button" onClick={handleClick} value="-" className='bg-violet-600  text-black cursor-pointer w-12 h-12 shadow-md rounded-md text-center font-semibold' />
                </div>
                <div className="flex justify-between m-2">
                     <input type="button" onClick={handleClick} value="1" className='bg-gray-200 text-black cursor-pointer w-12 h-12 shadow-md rounded-md text-center font-semibold' />
                     <input type="button" onClick={handleClick} value="2" className='bg-gray-200 text-black cursor-pointer w-12 h-12 shadow-md rounded-md text-center font-semibold' />
                     <input type="button" onClick={handleClick} value="3" className='bg-gray-200 text-black cursor-pointer w-12 h-12 shadow-md rounded-md text-center font-semibold' />
                     <input type="button" onClick={handleClick} value="+" className='bg-slate-400  text-black cursor-pointer w-12 h-12 shadow-md rounded-md text-center font-semibold' />
                </div>
                <div className="flex justify-between m-2">
                     <input type="button" onClick={handleClick} value="0" className='bg-gray-200 text-black cursor-pointer w-12 h-12 shadow-md rounded-md text-center font-semibold' />
                     <input type="button" onClick={handleClick} value="00" className='bg-gray-200 text-black cursor-pointer w-12 h-12 shadow-md rounded-md text-center font-semibold' />
                     <input type="button" onClick={handleClick} value="." className='bg-gray-200 text-black cursor-pointer w-12 h-12 shadow-md rounded-md text-center font-semibold' />
                     <input type="button" onClick={calculateValue} value="=" className='bg-green-400  text-black cursor-pointer w-12 h-12 shadow-md rounded-md text-center font-semibold' />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Calculator