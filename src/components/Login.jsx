import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeftLong, faCheckCircle, faTimesCircle } from "@fortawesome/free-solid-svg-icons"; // Import icons
import { authenticateUser } from "./services/mockService";


function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState('');
  const [loading, setLoading] = useState(false);


  // Function to handle login
  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage(''); // Clear any previous messages
    setMessageType('');
    setLoading(true);

    try {
      const response = await authenticateUser(email, password);
      setLoading(false);

      if (response.success) {
        if (response.user.role === 'Admin') {
          setMessage(`Login successfull! Welcome, ${response.user.username}`);
          setMessageType('success');

          // Delay navigation by three seconds
          setTimeout(() => {
            navigate('/dashboard');
          }, 3000);
        } else {
          setMessage('Invalid email or password'); // Show error message if login fail
          setMessageType('error');
        }
      } else {
        // Use actual error message from the response
        setMessage(response.error); // Will show 'User not found' or 'Invalid email or password'
        setMessageType('error');
      }
        
    } catch (error) {
      setLoading(false);
      setMessage('An error occurred. Please try again.', error);
      setMessageType('error');
    }
  };

  // Function to navigate the previous page
  const handleGoBack = () => {
    navigate(-1); // Navigates to the previous route
  };

    return (
        <div className="fixed inset-0 min-h-screen flex items-center justify-center bg-black opacity-95 dark:opacity-100 dark:text-white dark:bg-gray-800">
          <FontAwesomeIcon 
            icon={faArrowLeftLong} 
            onClick={handleGoBack}
            className="absolute text-xl top-[10%] cursor-pointer dark:bg-black dark:text-white dark:hover:opacity-80 bg-gray-300 opacity-60 hover:opacity-90 px-2 py-2 rounded-full"
          />
          <div className="max-w-md w-[80%] bg-white p-8 shadow-md dark:text-white dark:bg-gray-900 dark:border border-green-700 ">
            <h2 className="text-2xl font-bold mb-6">Admin Login</h2>
            <form onSubmit={handleSubmit} className="flex flex-col justify-center align-center">
            {message && (
              <p 
                className={`mb-4 px-3 py-2 border flex justify-between items-center flex-nowrap ${
                  messageType === 'error' ? 'border-red-600 text-red-500' : 'border-green-600 text-green-500'
                }`}
              >
                {message}
                <FontAwesomeIcon icon={messageType === 'error' ? faTimesCircle : faCheckCircle} className=""/>
              </p>
            )}
            
              <div className="mb-4">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email"
                  className="w-full px-3 py-2 border border-gray-300 focus:border-green-600 outline-none dark:bg-gray-700 dark:border-gray-500 dark:focus:border-gray-400"
                  required
                />
              </div>
              <div className="mb-6">
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                  className="w-full px-3 py-2 border border-gray-300 focus:border-green-600 outline-none dark:bg-gray-700 dark:border-gray-500 dark:focus:border-gray-400"
                  required
                />
              </div>
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-green-500 text-white py-2 px-4 rounded-sm hover:bg-green-700"
              >
                {loading ? 'Authenticating...' : 'Login'}
              </button>
            </form>
          </div>
        </div>
      );
};


export default Login
