const app = Vue.createApp({
    data(){
        return{
            product: 'Shoes',
            discription :'This book is best seller in the world',
            image: './assets/images/socks_green.jpg',
            url_link: 'https://www.camt.cmu.ac.th',
            inStock : false,
            inventory : 100,
            onSale : true
        }
    }
})