import {Owners} from "../pages/Owners/Owners";
import {About} from "../pages/About/About";
import {Owner} from "../pages/Owner/Owner";
import App from "../App";

export const routes = [
  {
    element: <App />,
    children: [
      { path: "/", element: <Owners /> },
      { path: "/about", element: <About /> },
      { path: "/owners/:id", element: <Owner /> },
    ],
  },
];