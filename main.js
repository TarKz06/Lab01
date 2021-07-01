const app = Vue.createApp({
    data(){
        return{
            product: 'Shoes',
            discription :'This book is best seller in the world',
            image: './assets/images/socks_green.jpg',
            url_link: 'https://www.camt.cmu.ac.th',
            inStock : true,
            inventory : 100,
            details: ['50% cotton', '30% woll' , '20% polyester'],
            variants: [
                { id : 2234 , color : 'green' , image: './assets/images/socks_green.jpg'},
                { id : 2235 , color : 'blue' ,image: './assets/images/socks_blue.jpg'}
            ],
            cart : 0,
            onSale : true ,
            sizes: [
                "S",
                "M",
                "L"
            ],
        }
    },
    methods:{
        addToCart(){
            this.cart += 1
        },
        updateImage(variantImage){
            this.image = variantImage
        },
        checkStatus(){
            this.inStock = !this.inStock
        }
    }
})