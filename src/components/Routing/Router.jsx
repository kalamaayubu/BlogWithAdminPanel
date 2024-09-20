import { Routes, Route, useLocation } from 'react-router-dom';
import Homepage from '../../pages/Homepage';
import Article from '../../pages/Article';
import Author from '../../pages/Author';
import NotFound from '../NotFound';
import Login from '../Login';
import Dashboard from '../../components/Dashboard';
import UserData from '../../AdminPanel/UserData';
import CreatePost from '../../AdminPanel/CreatePost';
import UpdatePost from '../../AdminPanel/UpdatePost';
import DeletePost from '../../AdminPanel/DeletePost';
import Articles from '../../AdminPanel/articles';
import { useEffect } from 'react';


// Function to scroll to top of the document on change of route
const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0,0);
    }, [pathname]);
    return null;
};

const AppRouter = () => {
    return (
        <>
        <ScrollToTop />
        <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="articles/:id" element={<Article />} />
            <Route path="authors/:id" element={<Author />} />
            <Route path="login" element={<Login />} />

            <Route path="dashboard" element={<Dashboard />}/>
            <Route path="dashboard/userData" element={<UserData />} />

            <Route path="dashboard/articles/" element={<Articles />} />
            <Route path="dashboard/articles/create" element={<CreatePost />}/>
            <Route path="dashboard/articles/update" element={<UpdatePost />}/>
            <Route path="dashboard/articles/delete" element={<DeletePost />}/>

            <Route path="*" element={<NotFound />}/>
        </Routes>
        </>
    );
};

export default AppRouter;
