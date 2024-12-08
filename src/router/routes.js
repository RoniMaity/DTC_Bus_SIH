const routes = [
  {
    path: '/',
    // component: () => import('layouts/MainLayout.vue'),
    component: () => import('src/layouts/DeeLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      { path: 'dee', component: () => import('pages/DeePage.vue') },
      { path: 'home', component: () => import('pages/HomePageNew.vue') },
      { path: 'home-old', component: () => import('pages/HomePageOld.vue') },
    ]
  },

  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
