
import cart from './cart.svg'
import cylvenda from './cylvenda.jpg'
import oceantree from './oceantree.jpg'
import addCart from './plus.svg'
import minusCart from './minus.svg'
import cartcount from './cart-add.svg'
import Logo from './logo.jpg'
import logout from './logout.svg'
import order from './order.svg'
import user from './user.svg'
import menu from './menu.svg'
import close from './x.svg'

// food pic
import foodImage001 from './b4chps.jpg'
import foodImage002 from './biscuit.jpg'
import foodImage003 from './bk_pg.jpg' // background
import foodImage004 from './cceg.jpg'
import foodImage005 from './chpsmshkkach.jpg'
import foodImage006 from './cpcyaiduar.jpg'
import foodImage007 from './jackies_restaurant.jpg'
import foodImage008 from './mishkak.jpg'
import foodImage009 from './on_pain.jpg'
import foodImage010 from './chpskach.jpg'
import foodImage011 from './shawarma.jpg'
import foodImage012 from './sosagechp.jpg'
import foodImage013 from './sup_kongoro.jpg'
import foodImage014 from './tamb.jpg'
import foodImage015 from './wali_kuku.jpg'
import foodImage016 from './yai_chpz.jpg'
import foodImage017 from './yai_kuku.jpg'
import foodImage018 from './yai_uji.jpg'
import foodImage019 from './yai_wali.jpg'
import foodImage020 from './soup_kuku.jpg'
import foodImage021 from './mixed_chips_nyam.jpg'

// social medias
import sX from './x.png'
import sFb from './fb.png'
import sYb from './yt.png'
import sWhup from './whts.png'
import sIg from './ig.png'


export const assets = {
    cylvenda,
    oceantree,
    Logo,
    logout,
    user,
    order,
    menu,
    close,

    cart,
    addCart,
    minusCart,
    cartcount,

    sX,
    sFb,
    sWhup,
    sIg,
    sYb,

    foodImage001,
    foodImage002,
    foodImage003,
    foodImage004,
    foodImage005,
    foodImage006,
    foodImage007,
    foodImage008,
    foodImage009,
    foodImage010,
    foodImage011,
    foodImage012,
    foodImage013,
    foodImage014,
    foodImage015,
    foodImage016,
    foodImage017,
    foodImage018,
    foodImage019,
    foodImage020,
    foodImage021,
}

export const menu_list = [
    {
        menu_name: 'Chips',
        menu_image: foodImage021
    },
    {
        menu_name: 'Fish',
        menu_image: foodImage003
    },
    {
        menu_name: 'Sosage',
        menu_image: foodImage012
    },
    {
        menu_name: 'Mishkaki',
        menu_image: foodImage008
    },
    {
        menu_name: 'Wali',
        menu_image: foodImage019
    },
];


export const food = [
    {
        id: 1,
        name: 'Chips',
        image: foodImage001,
        price: 2500,
        category: 'Chips'
    },
    {
        id: 2,
        name: 'Biscuts Mix',
        image: foodImage002,
        price: 3000,
        category: 'Biscuts'
    },
    {
        id: 3,
        name: 'Fish Mix',
        image: foodImage003,
        price: 5000,
        category: 'Fish'
    },
    {
        id: 4,
        name: 'Chips Yai',
        image: foodImage004,
        price: 2000,
        category: 'Chips'
    },
    {
        id: 5,
        name: 'Chips Yai',
        image: foodImage005,
        price: 1500,
        category: 'Chips'
    },
    {
        id: 6,
        name: 'Mchuz Mix',
        image: foodImage006,
        price: 3000,
        category: 'Rojo'
    },
    {
        id: 7,
        name: 'Chips Fish',
        image: foodImage007,
        price: 5000,
        category: 'Fish'
    },
    {
        id: 8,
        name: 'Mishkaki',
        image: foodImage008,
        price: 1000,
        category: 'Mishkaki'
    },
    {
        id: 9,
        name: 'Chips Roast',
        image: foodImage009,
        price: 3000,
        category: 'Chips'
    },
    {
        id: 10,
        name: 'Chips',
        image: foodImage010,
        price: 5000,
        category: 'Chips'
    },
    {
        id: 11,
        name: 'Chips Kuku',
        image: foodImage011,
        price: 3000,
        category: 'Chips'
    },
    {
        id: 12,
        name: 'Sosage',
        image: foodImage012,
        price: 1500,
        category: 'Sosage'
    },
    {
        id: 13,
        name: 'Kongoro Soup',
        image: foodImage013,
        price: 3000,
        category: 'Soup'
    },
    {
        id: 14,
        name: 'Tambi Yai',
        image: foodImage014,
        price: 2500,
        category: 'Tambi'
    },
    {
        id: 15,
        name: 'wali Mix',
        image: foodImage015,
        price: 3000,
        category: 'Wali'
    },
    {
        id: 16,
        name: 'Chips Yai',
        image: foodImage016,
        price: 3000,
        category: 'Chips'
    },
    {
        id: 17,
        name: 'Chips Sosage',
        image: foodImage017,
        price: 3500,
        category: 'Sosage'
    },
    {
        id: 18,
        name: 'Rojo Mix',
        image: foodImage018,
        price: 5000,
        category: 'Rojo'
    },    
    {
        id: 19,
        name: 'Wali Pilau',
        image: foodImage019,
        price: 5000,
        category: 'Wali'
    },   
     {
        id: 20,
        name: 'Chicken Soup',
        image: foodImage020,
        price: 2000,
        category: 'Soup'
    },
    {
        id: 21,
        name: 'Chips Nyama',
        image: foodImage021,
        price: 2000,
        category: 'Chips'
    }
]