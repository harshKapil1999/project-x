"use client"


const BookDemo = () => {

  return (
    <div className='w-full h-full min-h-screen flex items-center justify-center'>
      <div className="relative w-96 h-60 rounded-2xl text-white overflow-hidden cursor-pointer transition-all duration-700 card">
        <div className="absolute inset-0 w-full h-full flex justify-center items-center bg-gray-900 transition-all duration-100 delay-200 z-20 hover:opacity-0">
          FRONT OF CARD
        </div>
        <div className="absolute inset-0 w-full h-full flex justify-center items-center bg-black transition-all z-10 card-back">
          BACK OF CARD
        </div>
      </div>
    </div>
  )
}

export default BookDemo