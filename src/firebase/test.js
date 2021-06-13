const firebase  = require('firebase');
require('firebase/firestore');
var firebaseConfig = {
    apiKey: "AIzaSyBVJT8XhjGug2Da0L0Jti2BFv9A_D6LdFA",
    authDomain: "commercial-web-app.firebaseapp.com",
    projectId: "commercial-web-app",
    storageBucket: "commercial-web-app.appspot.com",
    messagingSenderId: "836455877581",
    appId: "1:836455877581:web:f93a1074a1c6625b749284",
    measurementId: "G-01EE32KLY4"
  };
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
const list_food = [
    {
        id: 'rice',
        title: 'Rice',
        urlLink: 'mainfood/rice',
        items: [
            {
                id: 'CG01',
                title: 'Com ga xe',
                price: 8,
                urlImage: 'https://i.ibb.co/s1ryyhC/com-ga.jpg',
                urlLink: 'mainfood/rice/comgaxe'
            },
            {
                id: 'CG02',
                title: 'Com ga nuong',
                price: 9,
                urlImage: 'https://i.ibb.co/qkqcxdS/com-ga-nuong.jpg',
                urlLink: 'mainfood/rice/comganuong'
            },
            {
                id: 'CG03',
                title: 'Com ga chat',
                price: 9.5,
                urlImage: 'https://i.ibb.co/GP32WNb/com-ga-chat.jpg',
                urlLink: 'mainfood/rice/comgachat'
            },
            {
                id: 'CG04',
                title: 'Com ga roti',
                price: 9.5,
                urlImage: 'https://i.ibb.co/KVLBJSV/com-ga-roti.jpg',
                urlLink: 'mainfood/rice/comroti'
            },
            {
                id: 'CS01',
                title: 'Com suong bo',
                price: 9.5,
                urlImage: 'https://i.ibb.co/StcHd60/com-suong-bo.jpg',
                urlLink: 'mainfood/rice/comsuong'
            },
            {
                id: 'CS02',
                title: 'Com suong dac biet',
                price: 10,
                urlImage: 'https://i.ibb.co/VLxmmzz/com-suong-dac-biet.jpg',
                urlLink: 'mainfood/rice/comdacbiet'
            },
            {
                id: 'CS03',
                title: 'Com suong heo',
                price: 10,
                urlImage: 'https://i.ibb.co/VNSb4CR/com-suong-heo.jpg',
                urlLink: 'mainfood/rice/comheo'
            }
        ]
    }
,{
    id: 'meat',
    title: 'Meat',
    urlLink: 'mainfood/meat',
    items: [
        {
            id: 'M1',
            title: 'Ga chat',
            price: 25,
            urlImage: 'https://i.ibb.co/GfZmJZ7/ga-chat.jpg',
            urlLink: 'mainfood/meat/gachat'
        },
        {
            id: 'M2',
            title: 'Ga nuong',
            price: 35,
            urlImage: 'https://i.ibb.co/TYsWPRc/ga-nuong.jpg',
            urlLink: 'mainfood/meat/ganuong'
        },
        {
            id: 'M3',
            title: 'Ga nuong muoi ot',
            price: 45,
            urlImage: 'https://i.ibb.co/rQ7d580/nuong-mui-ot.jpg',
            urlLink: 'mainfood/meat/ganuongmuoiot'
        },
        {
            id: 'M4',
            title: 'Chung ga nuong',
            price: 45,
            urlImage: 'https://i.ibb.co/MkVY1bk/chan-ga-nuong-muoi-ot.jpg',
            urlLink: 'mainfood/meat/changanuongmuoiot'
        },
        {
            id: 'M5',
            title: 'Vit quay',
            price: 25,
            urlImage: 'https://i.ibb.co/PCPtwF6/vit-quay.jpg',
            urlLink: 'mainfood/meat/vitquay'
        },
        {
            id: 'M6',
            title: 'Vit luoc',
            price: 29,
            urlImage: 'https://i.ibb.co/54WtRkz/vit-luoc.jpg',
            urlLink: 'mainfood/meat/vitluoc'
        },
        {
            id: 'M7',
            title: 'Heo quay chat',
            price: 27,
            urlImage: 'https://i.ibb.co/556Gqb6/heo-quay.jpg',
            urlLink: 'mainfood/meat/heoquaychat'
        },
        {
            id: 'M8',
            title: 'Thit heo banh trang',
            price: 37,
            urlImage: 'https://i.ibb.co/bWPc9D3/thit-heo-banh-trang.png',
            urlLink: 'mainfood/meat/heobanhtrang'
        },
        {
            id: 'M9',
            title: 'Thit bo bit tet',
            price: 37,
            urlImage: 'https://i.ibb.co/ZSdLLNY/thit-bo-bit-tet.jpg',
            urlLink: 'mainfood/meat/bobitet'
        },
        {
            id: 'M10',
            title: 'Bo luc lac',
            price: 27,
            urlImage: 'https://i.ibb.co/W0tgcZP/bo-luc-lac.jpg',
            urlLink: 'mainfood/meat/boluclac'
        }
    ]
}

, {
    id: 'noodle',
    title: 'Noodle',
    urlLink: 'mainfood/noodle',
    items: [
        {
            id: 'N1',
            title: 'Bun bo hue',
            price: 10,
            urlImage: 'https://i.ibb.co/jLT13vD/Bun-Bo-Hue-46.jpg',
            urlLink: 'mainfood/noodle/bunbohue'
        },
        {
            id: 'N2',
            title: 'Bun thit nuong',
            price: 11,
            urlImage: 'https://i.ibb.co/93M3194/bun-thit-nuong.jpg',
            urlLink: 'mainfood/noodle/bunthitnuong'
        },
        {
            id: 'N3',
            title: 'My thit trung',
            price: 12,
            urlImage: 'https://i.ibb.co/Y2GHf1R/my-trung-thit.jpg',
            urlLink: 'mainfood/noodle/mythittrung'
        },
        {
            id: 'N4',
            title: 'My ga',
            price: 9,
            urlImage: 'https://i.ibb.co/LzSgncf/my-ga.jpg',
            urlLink: 'mainfood/noodle/myga'
        }
    ]
}

,{
    id: 'soup',
    title: 'Soup',
    urlLink: 'mainfood/soup',
    items: [
        {
            id: 'S1',
            title: 'Soup ga',
            price: 9,
            urlImage: 'https://i.ibb.co/tBrKRS8/soup-ga.jpg',
            urlLink: 'mainfood/soup/soupga'
        },
        {
            id: 'S2',
            title: 'Soup cua',
            price: 9.5,
            urlImage: 'https://i.ibb.co/mt1NMb6/soup-cua.jpg',
            urlLink: 'mainfood/soup/soupcua'
        },
        {
            id: 'S3',
            title: 'Soup ca',
            price: 8.5,
            urlImage: 'https://i.ibb.co/SdTs1rb/soup-ca.jpg',
            urlLink: 'mainfood/soup/soupca'
        },
        {
            id: 'S4',
            title: 'Soup rau cu',
            price: 8,
            urlImage: 'https://i.ibb.co/z2WqW36/soup-rau-cu.jpg',
            urlLink: 'mainfood/soup/soupraucu'
        }
    ]
}

, {
    id: 'salad',
    title: 'Salad',
    urlLink: 'lightfood/salad',
    items: [
        {
            id: 'SL1',
            title: 'Summer salad',
            price: 8.5,
            urlImage: 'https://i.ibb.co/G3GDmkH/summer-salad.jpg',
            urlLink: 'lightfood/salad/summersalad'
        },
        {
            id: 'SL2',
            title: 'Orange salad',
            price: 7.5,
            urlImage: 'https://i.ibb.co/dBvVTpJ/orage-salad.png',
            urlLink: 'lightfood/salad/orangesalad'
        },
        {
            id: 'SL3',
            title: 'Taco salad',
            price: 7.5,
            urlImage: 'https://i.ibb.co/Rb1KHKW/taco-salad.jpg',
            urlLink: 'lightfood/salad/taco'
        },
        {
            id: 'SL4',
            title: 'Creamy corn salad',
            price: 9.5,
            urlImage: 'https://i.ibb.co/b5FwySj/creamy-corn-salad-recipe.jpg',
            urlLink: 'lightfood/salad/creamycornsalad'
        }
    ]
}
,{
    id: 'shushi',
    title: 'Shushi',
    urlLink: 'lightfood/shushi',
    items: [
        {
            id: 'SL5',
            title: 'Tuna shushi',
            price: 10.5,
            urlImage: 'https://i.ibb.co/fG4M3L0/tuna-shushi.jpg',
            urlLink:'lightfood/shushi/tunashushi'
        },
        {
            id: 'SL6',
            title: 'boat shushi',
            price: 15,
            urlImage: 'https://i.ibb.co/XSdp0G9/shushi-boat.jpg',
            urlLink:'lightfood/shushi/boatshushi'
        },
    ]
}

, {
    id: 'che',
    title: 'Che',
    urlLink: 'lightfood/che',
    items: [
        {
            id: 'SL7',
            title: 'Che hat sen',
            price: 7,
            urlImage: 'https://i.ibb.co/WWSbn8r/che-ha-t-sen.jpg',
            urlLink:'lightfood/che/chehatsen'
        },
        {
            id: 'SL8',
            title: 'Che bi do',
            price: 7.5,
            urlImage: 'https://i.ibb.co/wCMy4g1/che-bi-do.jpg',
            urlLink:'lightfood/che/chebido'
        },
        {
            id: 'SL9',
            title: 'Che trai cay',
            price: 7.5,
            urlImage: 'https://i.ibb.co/cN2fYYF/che-trai-cay.jpg',
            urlLink:'lightfood/che/chebido'
        }
    ]
}
, {
    id: 'milk_tea',
    title: 'Milk Tea',
    urlLink:'drink/milktea',
    items:[
        {
            id: 'Dr1',
            title: 'Coffe milk tea',
            price: 5.5,
            urlImage: 'https://i.ibb.co/jrQt5xg/coffee-milk-tea-2.jpg',
            urlLink:'drink/milktea/coffeemilktea'
        },
        {
            id: 'Dr2',
            title: 'Matcha milk tea',
            price: 5.5,
            urlImage: 'https://i.ibb.co/ryynrXB/matcha-bubble-tea-2.jpg',
            urlLink:'drink/milktea/matchamilktea'
        },
        {
            id: 'Dr3',
            title: 'Chocolate milk tea',
            price: 4.5,
            urlImage: 'https://i.ibb.co/ryynrXB/matcha-bubble-tea-2.jpg',
            urlLink:'drink/milktea/chocolatemilktea'
        },
        {
            id: 'Dr4',
            title: 'Pochi milk tea',
            price: 5.5,
            urlImage: 'https://i.ibb.co/FXxSmmd/pochi.jpg',
            urlLink:'drink/milktea/pochimilktea'
        },
        {
            id: 'Dr5',
            title: 'Honey milk tea',
            price: 5.5,
            urlImage: 'https://i.ibb.co/0yMzqBR/honey-milk-tea.jpg',
            urlLink:'drink/milktea/honeymilktea'
        }
    ]
}

,{
    id: 'fruit_juice',
    title: 'Fruit Juice',
    urlLink: 'drink/fruitjuice',
    items: [
        {
            id: 'F1',
            title: 'Kiwi Juice',
            price: 5.5,
            urlImage: 'https://i.ibb.co/2dDVZZj/kiwi-juice.jpg',
            urlLink:'drink/fruitjuice/kiwijuice'
        },
        {
            id: 'F2',
            title: 'Lemon Juice',
            price: 4.5,
            urlImage: 'https://i.ibb.co/p3C1ysH/lemon-juice.jpg',
            urlLink:'drink/fruitjuice/lemonjuice'
        },
        {
            id: 'F3',
            title: 'Orange Juice',
            price: 5,
            urlImage: 'https://i.ibb.co/r0MSf5f/orage-juice.jpg',
            urlLink:'drink/fruitjuice/orangejuice'
        },
        {
            id: 'F4',
            title: 'Strawberry Juice',
            price: 5,
            urlImage: 'https://i.ibb.co/z6cdc6F/strawberry.jpg',
            urlLink:'drink/fruitjuice/strawberryjuice'
        },
        {
            id: 'F5',
            title: 'Mango Juice',
            price: 6,
            urlImage: 'https://i.ibb.co/gZFyz5D/mango-juice.jpg',
            urlLink:'drink/fruitjuice/mangojuice'
        }

    ]
}
, {
    id: 'coffee',
    title: 'Coffee',
    urlLink: 'drink/coffee',
    items: [
        {
            id: 'C1',
            title: 'Mocha coffee',
            price: 6,
            urlImage: 'https://i.ibb.co/NKF2n4h/mocha-coffee-main.jpg',
            urlLink:'drink/coffee/mochacoffee'
        },
        {
            id: 'C2',
            title: 'Vanilla coffee',
            price: 6,
            urlImage: 'https://i.ibb.co/4Tn9H72/vanilla-coffee.jpg',
            urlLink:'drink/coffee/vanillacoffee'
        },
        {
            id: 'C3',
            title: 'Hokkaido coffee',
            price: 3.5,
            urlImage: 'https://i.ibb.co/dD6HkDj/hokkaido.jpg',
            urlLink:'drink/coffee/hokkaidocoffee'
        },
        {
            id: 'C4',
            title: 'Ice coffee',
            price: 3.5,
            urlImage: 'https://i.ibb.co/q7wrM2V/ice-coffee.jpg',
            urlLink:'drink/coffee/icecoffee'
        }
    ]
}
,{
    id: 'birthday_cake',
    title: 'Birthday cake',
    urlLink: 'cake/birthdaycake',
    items: [
        {
            id: 'B1',
            title: 'Chocolate birthday cake',
            price: 10.5,
            urlImage: 'https://i.ibb.co/yBTzHFG/chocolate-cake.jpg',
            urlLink:'cake/birthdaycake/chocolatecake'
        },
        {
            id: 'B2',
            title: 'Fruit birthday cake',
            price: 13.5,
            urlImage: 'https://i.ibb.co/kgB0kpg/Fruit-chocolate-birthday-cake-On-a-white-background.jpg',
            urlLink:'cake/birthdaycake/fruitcake'
        },
        {
            id: 'B3',
            title: 'Cream birthday cake',
            price: 13.5,
            urlImage: 'https://i.ibb.co/HFjpDPT/cream-cake.jpg',
            urlLink:'cake/birthdaycake/creamcake'
        }
    ]
}

, {
    id: 'cookies',
    title: 'Cookies',
    urlLink: 'cake/cookies',
    items: [
        {
            id: 'C1',
            title: 'Chewy cookie',
            price: 2.5,
            urlImage: 'https://i.ibb.co/nkfyKRW/chewy-cookie.jpg',
            urlLink:'cake/cookies/chewycookie'
        },
        {
            id: 'C2',
            title: 'Strawberry cookie',
            price: 4.5,
            urlImage: 'https://i.ibb.co/1fX9y4d/strawberry-cookie.jpg',
            urlLink:'cake/cookies/strawberrycookie'
        },
        {
            id: 'C3',
            title: 'Egg cookie',
            price: 5,
            urlImage: 'https://i.ibb.co/3NBt4tY/egg-cookie.jpg',
            urlLink:'cake/cookies/eggcookie'
        }
    ]
}

, {
    id: 'rice_cake',
    title: 'Rice cake',
    urlLink: 'cake/ricecake',
    items: [
        {
            id: 'R1',
            title: 'Banh nam',
            price: 5,
            urlImage: 'https://i.ibb.co/KVhqwn1/1-banh-nam.jpg',
            urlLink:'cake/ricecake/banhnam'
        },
        {
            id: 'R2',
            title: 'Banh duc',
            price: 4,
            urlImage: 'https://i.ibb.co/JzThWWp/banh-duc.jpg',
            urlLink:'cake/ricecake/banhduc'
        },
        {
            id: 'R3',
            title: 'Banh beo',
            price: 4.5,
            urlImage: 'https://i.ibb.co/GP3sF1f/banh-beo.jpg',
            urlLink:'cake/ricecake/banhbeo'
        }
    ]
}
]


const db = firebase.firestore();
function inputePopulation(collectionName,items){
    return Promise.all(items.map(item => {
        const {id,...data} = item; 
        return db.collection(collectionName)
        .doc(id)
        .set(data);
    }))
}

Promise.all([
    inputePopulation('products',list_food),
]).then(()=>{
    console.log('done');
    process.exit();
}).catch(error => console.log(error));

// async function getMarkers() {
//     const events = await firebase.firestore().collection('side_bar')
//     events.get().then((querySnapshot) => {
//         const tempDoc = querySnapshot.docs.map((doc) => {
//           return { id: doc.id, ...doc.data() }
//         })
//         console.log(tempDoc)
//       })
//   }

// getMarkers()