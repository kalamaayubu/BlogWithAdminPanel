import { useState } from "react"


function Comment() {
    // State management
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    // Function to handle the submission of comments
    const handleCommentSubmit = (e) => {
      e.preventDefault();
      
    }

  return (
    <>
    {/* <hr className='my-4 border m-auto w-[80%]'/> */}
    <div className="flex flex-col w-[80%] items-center mt-10 gap-3 m-auto">
      <h1 className="font-bold text-2xl mb-4">Drop a comment below 👇</h1>
      <form onSubmit={handleCommentSubmit} className="flex flex-col w-full gap-3">
        <input 
          type="email"
          value={email} 
          placeholder="Email Address"
          onChange={(e) => setEmail(e.target.value)}
          className="p-2 border outline-none min-w-[50%] focus:border-gray-400 dark:text-white dark:bg-gray-800"
        />
        <textarea 
          value={message}
          placeholder="Your comment here..."
          onChange={(e) => setMessage(e.target.value)}
          className="p-2 border outline-none min-w-[50%] focus:border-gray-400 h-40 dark:text-white dark:bg-gray-800"
        >
        </textarea>
        <button 
          type="submit"
          className="px-3 py-2 bg-green-700 hover:bg-green-600 w-60 m-auto"
        >
          Comment
        </button>
      </form>
    </div>
    </>
  )
}

export default Comment
