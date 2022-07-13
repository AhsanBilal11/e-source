import bcrypt from 'bcryptjs'
const data={
    users:[
        {
            name:'admin',
            email:'admin@admin.com',
            password:bcrypt.hashSync('123456',8),
            isAdmin:true
        },
        {
            name:'Bilal',
            email:'ahsan@bilal.com',
            password:bcrypt.hashSync('123456',8),
            isAdmin:false
        }
    ],
    products:[
        {

            name:'Ahsan Bilal',
            category:'Shirt',
            image:'/images/p1.jpg',
            price:300,
            brand:'Adidas',
            countInStack:10,
            rating:3.1,
            numReviews:10,
            description:'lorem ipsupmit not working'
        },
        {

            name:'Ahsan Bilal2',
            category:'Puma',
            price:3002,
            countInStack:20,
            image:'/images/p2.jpg',
            brand:'Adidas',
            rating:3.5,
            numReviews:102,
            description:'l222orem ipsupmit not working'
        },
        {

            name:'Ahsan Bilal3',
            image:'/images/p3.jpg',
            category:'Lacoste',
            price:3003,
            brand:'Adidas',
            countInStack:0,
            rating:4.5,
            numReviews:103,
            description:'l333orem ipsupmit not working'
        },
        {

            name:'Ahsan Bilal4',
            image:'/images/p4.jpg',
            category:'Pants',
            price:3004,
            brand:'Lacoste',
            countInStack:9,
            rating:4.1,
            numReviews:104,
            description:'l4444orem ipsupmit not working'
        },
        {

            name:'Ahsan Bilal5',
            category:'Nike',
            image:'/images/p5.jpg',
            countInStack:10,
            price:3005,
            brand:'Adidas',
            rating:4.0,
            numReviews:105,
            description:'l5orem ipsupmit not working'
        },
        {

            name:'Ahsan Bilal6',
            category:'Shirt',
            price:3006,
            countInStack:7,
            brand:'Nike',
            image:'/images/p6.jpg',
            rating:2.5,
            numReviews:106,
            description:'l6666  orem ipsupmit not working'
        },

    ],
}
export default data