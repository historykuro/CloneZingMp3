import Discover from "~/pages/Discover";
import Singer from "~/pages/Singer";
import Zingchart from "~/pages/Zingchart";
const publicRoutes = [
  { path: "/", component: Discover },
  { path: "/singer", component: Singer },
  { path: "/zingchart", component: Zingchart },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
