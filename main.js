const app = Vue.createApp({
    data(){
        return{
            product: 'Shoes',
            discription :'This book is best seller in the world',
            image: './assets/images/socks_green.jpg',
            url_link: 'https://www.camt.cmu.ac.th',
            inStock : false,
            inventory : 100,
            details: ['50% cotton', '30% woll' , '20% polyester'],
            variants: [
                { id : 2234 , color : 'green'},
                { id : 2235 , color : 'blue'}
            ],
            cart : 0,
            onSale : true ,
            sizes: [
                "S",
                "M",
                "L"
            ]
        }
    }
})