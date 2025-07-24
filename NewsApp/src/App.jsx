import './App.css'
import Navbar from './Components/Navbar';
import React, { Component } from 'react';
import NewsContainer from './Components/NewsContainer';
import { createBrowserRouter , RouterProvider } from 'react-router-dom';

export default class App extends Component {
  pageSize = 6;

  render() {
    const router = createBrowserRouter([
      {
        path:"/",
        element: <><Navbar/><NewsContainer pageSize={this.pageSize} country={"us"} category={"general"} /></>
      },
      {
        path:"/business",
        element: <><Navbar/><NewsContainer pageSize={this.pageSize} country={"us"} category={"business"}/></>
      },
      {
        path:"/entertainment",
        element: <><Navbar/><NewsContainer pageSize={this.pageSize} country={"us"} category={"entertainment"}/></>
      },
      {
        path:"/health",
        element: <><Navbar/><NewsContainer pageSize={this.pageSize} country={"us"} category={"health"}/></>
      },
      {
        path:"/science",
        element: <><Navbar/><NewsContainer pageSize={this.pageSize} country={"us"} category={"science"}/></>
      },
      {
        path:"/sports",
        element: <><Navbar/><NewsContainer pageSize={this.pageSize} country={"us"} category={"sports"}/></>
      },
      {
        path:"/technology",
        element: <><Navbar/><NewsContainer pageSize={this.pageSize} country={"us"} category={"technology"}/></>
      }
    ])
    return (
      <RouterProvider router={router}/>
    )
  }
}
