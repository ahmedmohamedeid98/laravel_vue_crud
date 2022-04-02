import {createRouter, createWebHistory} from 'vue-router'
import CompanyIndex from '../components/companies/CompaniesIndex.vue'
import CompaniesCreate from '../components/companies/CompaniesCreate.vue'
import CompaniesEdit from '../components/companies/CompaniesEdit.vue'

const routes = [
    {
        path: '/dashboard',
        name: 'companies.index',
        component: CompanyIndex
    },
    {
        path: '/companies/create',
        name: 'companies.create',
        component: CompaniesCreate,
    },
    {
        path: '/companies/edit',
        name: 'companies.edit',
        component: CompaniesEdit,
        props: true
    }
];

export default createRouter({
    history: createWebHistory(),
    routes
});