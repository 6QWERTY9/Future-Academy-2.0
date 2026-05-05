export const ROUTE_PATH = {
    HOME: '/',
    COURSES: 'courses',
    COURSE_CATEGORY: 'courses/:groupId', 
} as const;


export type RoutePath = typeof ROUTE_PATH[keyof typeof ROUTE_PATH];