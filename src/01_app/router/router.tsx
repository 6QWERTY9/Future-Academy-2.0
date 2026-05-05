import { HomePage } from "@pages/HomePage/HomePage";
import {type RouteObject } from "react-router-dom";
import { ROUTE_PATH } from "./routePath";
import { FilterTags } from "@features/CourseFilters/ui/FilterTags";





interface RouteMeta {
    title?: string;
    description?: string;
}

interface AppRoute extends Omit<RouteObject, 'children'> {
    meta?: RouteMeta;
    children?: AppRoute[];
};


export const routes: AppRoute[] = [
    {
        path: ROUTE_PATH.HOME,
        element: <HomePage />,
        children: [
            {
                index: true,
                element: <FilterTags /> 
            },
            {
                path: 'courses/:groupId', 
                element: <FilterTags/>
            }
        ]
    }
];