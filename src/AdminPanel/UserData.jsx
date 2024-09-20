import { useEffect, useState } from "react";
import { fetchUsers } from "../components/services/mockService";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faPlus, faUserTimes } from "@fortawesome/free-solid-svg-icons";
import { useTooltip } from "../context/TooltipContextProvider";



function UserManagement() {
  const { hideTooltip, showTooltip } = useTooltip(); // hide and show tooltip functions from useTooltip hook(context)
  const [error, setError] = useState(null);
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  
    // Handle mouse enter
    const handleMouseEnter = (e, message) => {
      const rect = e.target.getBoundingClientRect();
      showTooltip(message, { x: rect.x + rect.width / 2, y: rect.y });
    };

    // Handle mouse leave
    const handleMouseLeave = () => {
      hideTooltip();
    }

  useEffect(() => {
    const loadUserData = async () => {
      setIsLoading(true);

      try {
        const response = await fetchUsers(); // Fetch users from the mockService

        console.log('Response is: ', response)
        
        if (response.length === 0) {
          setUsers([]); // Set users to an empty array if no users
        }

        setUsers(response); // Update the state of with the fetched users
      } catch (err) {
        console.log('Error fetching user data: ', err);
        setError(err);
      } finally {
        setIsLoading(false); // Ensure loading is stopped
      }
    }
    loadUserData();
    setIsLoading(false);
  }, []);

  if (isLoading) {
    return <p>Loading...</p>; // Loading message
  }

  return (
    <>
    <div className="w-[80%] max-w-xl m-auto px-3 py-2 flex justify-evenly text-xl mb-12 mt-8">
      <FontAwesomeIcon 
        icon={faPlus} 
        onMouseEnter={(e) => handleMouseEnter(e, 'Add New User')}
        onMouseLeave={handleMouseLeave}
        className="cursor-pointer text-green-500 sm:text-xl md:text-2xl"
      />
      <FontAwesomeIcon 
        icon={faEdit} 
        onMouseEnter={(e) => handleMouseEnter(e, 'Update User')}
        onMouseLeave={handleMouseLeave}
        className="cursor-pointer text-blue-500 sm:text-xl md:text-2xl"
      />
      <FontAwesomeIcon 
        icon={faUserTimes} 
        onMouseEnter={(e) => handleMouseEnter(e, 'Delete User')}
        onMouseLeave={handleMouseLeave}
        className="cursor-pointer text-red-500 sm:text-xl md:text-2xl"
      />
    </div>

    <div className="m-4 overflow-x-auto dark:bg-gray-950 dark:text-white">
      <h1 className="font-bold text-2xl text-center p-3 xl:text-3xl">User Details</h1>
      {error && <div className="text-red-500">Error Loading users: {error.message}</div>}
      <table className="overflow-x-auto min-w-full bg-white border-collapse border border-gray-500 dark:bg-gray-800">
        <thead className="border border-b border-gray-500">
            <th className="p-4 text-left border-r border-gray-400 w-5">ID</th>
            <th className="p-4 text-left border-r border-gray-400">Name</th>
            <th className="p-4 text-left border-r border-gray-400">Email</th>
            <th className="p-4 text-left border-r border-gray-400">Password</th>
            <th className="p-4 text-left border-r border-gray-400 w-5">Role</th>
            <th className="p-4 text-left w-5">Status</th>
        </thead>

        <tbody>
          {users.map((user, index) => (
            <tr key={index} className="border-b border-gray-400">
              <td className="p-4 border-r border-gray-400">{user.id}</td>
              <td className="p-4 border-r border-gray-400">{user.username}</td>
              <td className="p-4 border-r border-gray-400">{user.email}</td>
              <td className="p-4 border-r border-gray-400">{user.password}</td>
              <td className="p-4 border-r border-gray-400">{user.role}</td>
              <td className="p-4">{user.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* {!users.length && !error && (
        <div className="text-3xl font-semibold text-center">No user Found</div>
      )} */}
    </div>
    </>
    
  )
}

export default UserManagement
