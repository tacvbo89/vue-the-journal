export default {

    name:'daybook',
    component: () => import(/* webpackChunkName: "daybook" */ '@/modules/daybook/layouts/DayBookLayout')
    ,children:[
        {
            path:'',
            name:'no-entry',
            component: () => import(/* webpackChunkName: "daybook-noentry" */ '@/modules/daybook/views/NoEntrySelected')    
        },
        {
            path:':id',
            name:'entry',
            component: () => import(/* webpackChunkName: "entry" */ '@/modules/daybook/views/EntryView')    
        },

    ]
}