const products = [
    {
        id: "DF2121",
        name: "Remera roja",
        description: "",
        stock:10,
        price: 2000,
        image: "/img/remeranar.jpg",
        category: "remeras"
    },
    {
        id: "RT3452",
        name: "Remera Malibu",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis rem quidem eveniet maiores, voluptate deleniti vitae impedit necessitatibus culpa maxime consequuntur asperiores ad tempora? Aliquid, officiis ab. Possimus, animi obcaecati!",
        stock: 5,
        price: 2500,
        image: "/img/topmalibu.jpg",
        category: "buzos"
    },
    {
        id: "SW2471",
        name: "Jeans beige",
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
        category: "buzos"
    },
    {
        id: "OI0232",
        name: "Buzo Winstong",
        description: "",
        stock: 5,
        price: 2000,
        image: "/img/buzo-Winstong.jpg",
        category: "buzos"
    },
    {
        id: "QA2096",
        name: "Buzo canguro",
        description: "",
        stock: 5,
        price: 2000,
        image: "/img/canguro.jpg",
        category: "buzos"
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