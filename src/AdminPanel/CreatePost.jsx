import { useState } from "react"
import { createArticle } from "../components/services/mockService";

function CreatePost() {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [loading, setLoading] = useState(false);


    const handleCreate = (e) => {
        e.preventDefault();

        // Logic for creating a post
        if (!title || imageUrl) {
            return alert('Please fill in all fields');
        }

        setLoading(true);
        const newPost = { title, imageUrl, content };
        createArticle(newPost).then(() => {
            setLoading(false);
            alert('Post created successfully!');
            // Clear the form
            setTitle('');
            setImageUrl('');
            setContent('');
        })

        console.log('New Post Created', { title, content});
    };

  return (
    <div className="flex flex-col items-center my-8 gap-4 dark:bg-gray-900 dark:text-white">
      <h2 className="font-bold text-2xl xl:text-3xl mb-4">Create a New Post</h2>
      <form onSubmit={handleCreate} className="flex flex-col w-[80%] gap-2 dark:bg-gray-900 dark:text-white max-w-4xl">
        <div className="w-full flex flex-col md:flex-row flex-nowrap justify-between gap-2">
            <label className="font-semibold mt-2"> Title:
                <input 
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Enter post title"
                    required
                    className="font-normal ml-2 px-3 py-2 outline-none border border-gray-300 focus:border-green-600 dark:border-gray-600 dark:bg-gray-800 dark:focus:border-gray-400"
                />
             </label>
            
            <label className="mt-2 font-semibold"> Image URL: 
            <input 
                type="text"
                value={imageUrl}
                onChange={(e) => setImageUrl(e.target.value)}
                placeholder="Enter image URL"
                className="font-normal ml-2 px-3 py-2 outline-none border border-gray-300 focus:border-green-600 dark:border-gray-600 dark:bg-gray-800 dark:focus:border-gray-400"
                required
            />
            </label>
        </div>

        <label className="font-semibold mt-2"> Content: </label>
        <textarea 
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="font-normal min-h-40 ml-2 px-3 py-2 outline-none border border-gray-300 focus:border-green-600 dark:border-gray-600 dark:bg-gray-800 dark:focus:border-gray-400"
            placeholder="Article content here..."
            required
        />

        <button type="submit" className="px-2 py-2 bg-green-700 hover:bg-green-600 mt-4 min-w-80 m-auto">
            {loading ? 'Creating...' : 'Creat new Post'}
        </button>
      </form>
    </div>
  )
}

export default CreatePost
