import React from 'react'
import App from './App.jsx'

import store from "./store.js"
import { Provider } from 'react-redux';


import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import BackProjectForm from './components/BackProjectForm.jsx';
import Thanks from './components/Thanks.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/back-project",
        element: <BackProjectForm />
      }, 
      {
        path: "/thanks",
        element: <Thanks />
      }
    ]
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
