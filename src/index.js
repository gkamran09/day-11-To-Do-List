import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { store } from './app/store';
import { Provider } from 'react-redux';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HelpPage from './pages/HelpPage';
import ToDoList from './components/ToDoList';
import ToDoItemDetail from './components/ToDoItemDetail';
import ErrorPage from './pages/ErrorPage';
import DoneList from './components/DoneList';

const root = ReactDOM.createRoot(document.getElementById('root'));
const router = createBrowserRouter([{
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
        {
            index: true, 
            element: <ToDoList />
        },
        {
            path: "/done",
            element: <DoneList />
        },
        {
            path: "/done/:id",
            element: <ToDoItemDetail />
        },
        {
            path: "/help",
            element: <HelpPage />
        }
    ]
},
]);
root.render(
  <React.StrictMode>
        <Provider store={store}>
          <RouterProvider router={router} />
        </Provider>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
