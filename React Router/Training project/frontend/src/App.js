import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/Home";
import EventPage from "./pages/Events";
import EditEventPage from "./pages/EditEvent";
import EventDetailPage from "./pages/EventDetail";
import NewEventPage from "./pages/NewEvent";
import Root from "./pages/Root";
import EventRootLayout from "./pages/EventsRoot";
const routerDefinition = createBrowserRouter([
  {
    path: "/",
    element: <Root />,

    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "events",
        element: <EventRootLayout />,
        children: [
          {
            index: true,
            element: <EventPage />,
          },
          {
            path: ":eventId",
            element: <EventDetailPage />,
          },
          {
            path: ":eventId/edit",
            element: <EditEventPage />,
          },
          {
            path: "new",
            element: <NewEventPage />,
          },
        ],
      },
    ],
  },
]);
function App() {
  return <RouterProvider router={routerDefinition} />;
}

export default App;
