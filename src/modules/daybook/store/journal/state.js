//reactividad
export default ()=>({
    isLoading:true,
    entries:[
        { 
            id:new Date().getTime(),
            date:new Date().toDateString(),
            text:'Ut est reprehenderit occaecat nostrud aliquip veniam duis dolore proident voluptate. Ipsum nisi anim est anim duis ad minim ullamco ullamco exercitation amet Lorem. Veniam consequat eu aliqua eu enim proident. Sunt id mollit duis magna ex est do id anim.',
            picture:null,
        },{ 
            id:new Date().getTime()+1000,
            date:new Date().toDateString(),
            text:'Amet minim velit tempor non dolor. Lorem ex cupidatat adipisicing deserunt duis. Ullamco tempor veniam eiusmod eu dolore occaecat. In sint dolor ea magna.',
            picture:null,
        },
        { 
            id:new Date().getTime()+2000,
            date:new Date().toDateString(),
            text:'Qui aliquip nisi pariatur adipisicing et esse et consequat culpa aute duis proident. Fugiat incididunt aute magna occaecat non velit fugiat. Nostrud laborum et tempor et et nisi nisi sint fugiat eiusmod do. Do nostrud mollit exercitation cillum non qui sit.',
            picture:null,
        },
    ]
})