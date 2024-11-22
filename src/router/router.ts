import { createMemoryHistory, createRouter } from 'vue-router'


const routes = [
    {
        path: '/',
        component: import('../views/Home.vue'),
        name: 'home',
        children: [
            {
                path: 'about',
                component: import('../views/About.vue'),
                name: 'about'
            },
        ]
    },
]

const router = createRouter({
    history: createMemoryHistory(),
    routes,
})

export default router