import Home from "../components/views/Home";
import List from "../components/views/List";

export const routes = [
  {
    path: "/",
    title: "Home",
    element: <Home title="Studio Ghibli" />,
  },
  {
    path: "films",
    title: "Films",
    element: <List endpoint="films" />,
  },
  {
    path: "people",
    title: "People",
    element: <List endpoint="people" />,
  },
  {
    path: "locations",
    title: "Locations",
    element: <List endpoint="locations" />,
  },
  {
    path: "vehicles",
    title: "Vehicles",
    element: <List endpoint="vehicles" />,
  },
  {
    path: "Species",
    title: "Home",
    element: <List endpoint="species" />,
  },
];
