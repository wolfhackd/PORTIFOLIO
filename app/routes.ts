import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index("routes/MainRoute.tsx"),
    route("inProgress", "routes/InProgressRoute.tsx"),
    route("projeto/:id", "routes/ProjectRoute.tsx"),
    route("projetos", "routes/ProjectsRoute.tsx"),
] satisfies RouteConfig;
