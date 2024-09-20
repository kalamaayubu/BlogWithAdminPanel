import { useState } from "react"

function UpdatePost() {
    const [postId, setPostId] = useState('');
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const handleUpdate = (e) => {
        e.preventDefault();

    }


  return (
    <div className="flex flex-col items-center my-8 gap-4 dark:bg-gray-900 dark:text-white">
      <h2 className="font-bold text-2xl xl:text-3xl mb-4">Update a Post</h2>
      <form onSubmit={handleUpdate} className="flex flex-col w-[80%] gap-2 dark:bg-gray-900 dark:text-white max-w-4xl">
        <div className="w-full flex flex-col md:flex-row flex-nowrap justify-between gap-2">
            <label className="font-semibold mt-2"> post ID:
                <input 
                    type="text"
                    value={postId}
                    onChange={(e) => setPostId(e.target.value)}
                    placeholder="Enter article ID"
                    className="font-normal ml-2 px-3 py-2 outline-none border border-gray-300 focus:border-green-600 dark:border-gray-600 dark:bg-gray-800 dark:focus:border-gray-400"
                    required
                />
            </label>
            <label className="font-semibold mt-2"> Title:
                <input 
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Enter title"
                    className="font-normal ml-2 px-3 py-2 outline-none border border-gray-300 focus:border-green-600 dark:border-gray-600 dark:bg-gray-800 dark:focus:border-gray-400"
                />
            </label>
        </div>
        
        <label className="font-semibold mt-2"> Content: </label>
          <textarea 
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Update article content here..."
            className="font-normal min-h-40 ml-2 px-3 py-2 outline-none border border-gray-300 focus:border-green-600 dark:border-gray-600 dark:bg-gray-800 dark:focus:border-gray-400"
            required
          />

        <button type="submit" className="px-2 py-2 bg-green-700 hover:bg-green-600 mt-4 min-w-80 m-auto">
            Update Post
        </button>

      </form>
    </div>
  )
}

export default UpdatePost
