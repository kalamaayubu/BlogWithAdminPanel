import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOutAlt, faFileAlt, faUsers, faComments } from "@fortawesome/free-solid-svg-icons";


function Dashboard() {
    const navigate = useNavigate();
    
    const handleLogout = () => {
        navigate('/login', { replace: true }); // Redirect to login page and replace history
    }

    // Open user data
    const openUserData = () => {
      navigate('/dashboard/userData', { replace: false });
    }

    // Open articles 
    const openArticles = () => {
      navigate('/dashboard/articles', { replace: false });
    }

    return (
        <div className="min-h-screen bg-gray-200 p-8 dark:text-white dark:bg-gray-800">

          <div className="container mx-auto">
            {/* Dashboard Title */}
            <div className="flex justify-between align-center m-auto min-w-full">
              <span className="text-2xl font-bold mb-6">Admin Dashboard</span>
              <FontAwesomeIcon 
                icon={faSignOutAlt} 
                onClick={handleLogout}
                className="text-xl cursor-pointer hover:text-red-600"
              />
            </div>
    
            {/* Grid for Metrics */}
            <div style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))'}} className="grid gap-6 justify-center align-center mb-8">

              <div onClick={openArticles}  className="bg-white group flex flex-col items-center p-6 rounded-lg shadow-sm hover:shadow-md dark:text-white dark:bg-gray-900 dark:hover:bg-gray-700 dark:hover:border dark:hover:border-gray-600 cursor-pointer">
                <FontAwesomeIcon 
                  icon={faFileAlt} 
                  className="text-xl font-semibold"
                />
                <p className="mt-2 text-gray-600 dark:text-gray-200">12</p>
              </div>

              <div onClick={openUserData} className="bg-white group flex flex-col items-center p-6 rounded-lg shadow-sm hover:shadow-md dark:text-white dark:bg-gray-900 dark:hover:bg-gray-700 dark:hover:border dark:hover:border-gray-600 cursor-pointer">
                <FontAwesomeIcon 
                  icon={faUsers}
                  className="text-xl font-semibold group-hover:text-orange-500"
                />
                <p className="mt-2 text-gray-600 dark:text-gray-200 group-hover:text-green-500">5</p>
              </div>

              <div className="bg-white group flex flex-col items-center p-6 rounded-lg shadow-sm hover:shadow-md dark:text-white dark:bg-gray-900 dark:hover:bg-gray-700 dark:hover:border dark:hover:border-gray-600 cursor-pointer">
                <h2 className="text-xl font-semibold group-hover:text-blue-400"><FontAwesomeIcon icon={faComments} /></h2>
                <p className="mt-2 text-gray-600 dark:text-gray-200 group-hover:text-green-500">23</p>
              </div>
            </div>
          </div>
        </div>
      );
}

export default Dashboard;
