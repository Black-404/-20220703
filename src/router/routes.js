const routes = [
    {
        name: 'HelloWorld',
        path: '',
        component: () => import('@/components/HelloWorld')
    },
    {
        name: 'a',
        path: '/a',
        component: () => import('@/view/A')
    },
    {
        name: 'b',
        path: '/b',
        component: () => import('@/view/B')
    },
    
];

export default routes
