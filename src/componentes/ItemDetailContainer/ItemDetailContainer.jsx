import { useEffect, useState } from "react"
import { getProducts } from "../../data/data"
import ItemDetail from "./ItemDetail"
//traigo la info de los productos
const ItemDetailContainer = () => {
    const [product, setProduct] = useState([])

    useEffect( ()=>{
        //itera sobre los productos del array
        getProducts()
            //busca cual coincide con la condicion, guardandolo en la variable de estado
            .then( (data)=>{
                const findProduct = data.find((product)=> product.id === "RT3452" )
                setProduct(findProduct)
            } )
    },[])

    return (
        <ItemDetail product={product} />
    )
}

export default ItemDetailContainer
