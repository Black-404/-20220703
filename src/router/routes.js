const routes = [
    {
        name: 'mainPage',
        path: '',
        component: () => import('@/view/mainPage')
    },
    {
        name: 'quantityLine',
        path: '/quantityLine',
        component: () => import('@/view/quantityLine')
    },
    {
        name: 'quantityLine',
        path: '/quantityLine',
        component: () => import('@/view/LimitQuantity')
    },
    
];

export default routes
