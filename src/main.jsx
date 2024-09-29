import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import ErrorPage from './components/ErrorPage/ErrorPage';
import Home from './components/Home/Home';
import PostDetails from './components/PostDetails/PostDetails';
import Posts from './components/Posts/Posts';
import UserDetails from './components/UserDetails/UserDetails';
import Users from './components/Users/Users';
import './index.css';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home></Home>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/about',
                element: <About></About>,
            },
            {
                path: '/contact',
                element: <Contact></Contact>,
            },
            {
                path: '/users',
                loader: () =>
                    fetch('https://jsonplaceholder.typicode.com/users'),
                element: <Users></Users>,
            },
            {
                path: '/user/:userId',
                loader: ({ params }) =>
                    fetch(
                        `https://jsonplaceholder.typicode.com/users/${params.userId}`
                    ),
                element: <UserDetails></UserDetails>,
            },
            {
                path: '/posts',
                loader: () =>
                    fetch('https://jsonplaceholder.typicode.com/posts'),
                element: <Posts></Posts>,
            },
            {
                path: '/post/:postId',
                loader: ({ params }) =>
                    fetch(
                        `https://jsonplaceholder.typicode.com/posts/${params.postId}`
                    ),
                element: <PostDetails></PostDetails>,
            },
        ],
    },
]);

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <RouterProvider router={router}></RouterProvider>
    </StrictMode>
);
