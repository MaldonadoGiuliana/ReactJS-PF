const products = [
    {
        id: "DF2121",
        name: "Remera Naranja ",
        description: "",
        stock:10,
        price: 2000,
        image: "/img/remeranar.jpg",
        category: "remeras"
    },
    {
        id: "RT3452",
        name: "Remera Malibu",
        description: "",
        price: 2500,
        image: "/img/topmalibu.jpg",
        category: "remeras"
    },
    {
        id: "SW2471",
        name: "Jean Beige",
        description: "",
        stock: 3,
        price: 2300,
        image: "/img/jeans.jpg",
        category: "jeans"
    },
    {
        id: "XP7621",
        name: "Jeans Oxfort",
        description: "",
        stock: 5,
        price: 3000,
        image: "/img/jeans-cargo.jpg",
        category: "jeans"
    },
    {
        id: "OI0232",
        name: "Campera Winstong",
        description: "",
        stock: 5,
        price: 2000,
        image: "/img/buzo-Winstong.jpg",
        category: "camperas"
    },
    {
        id: "QA2096",
        name: "Campera Canguro",
        description: "",
        stock: 5,
        price: 2000,
        image: "/img/canguro.jpg",
        category: "camperas"
    }
]
/*
    const promesa = new Promise( (resolve, reject) => {
        if(condicion){
            resolve("Se resolvio")
        }else{
            reject("Se rechazo la promesa")
        }
    }) 
*/
const getProducts = () => {
    return new Promise((resolve, reject)=>{
        setTimeout( ()=> {
            resolve(products)
        },2000)
    })
}

export {getProducts}