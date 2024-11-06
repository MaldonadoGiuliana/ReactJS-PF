import { useEffect, useState } from "react"
import { getProducts } from "../../data/data"
import { useParams } from "react-router-dom"
import ItemDetail from "./ItemDetail"

//traigo la info de los productos
const ItemDetailContainer = () => {
    const [product, setProduct] = useState({})
    const [loading, setLoading] = useState(true)
    const { idProduct } = useParams()

    useEffect( ()=>{
        setLoading(true)
        //itera sobre los productos del array
        getProducts()
            //busca cual coincide con la condicion, guardandolo en la variable de estado
            .then( (data)=>{
                const findProduct = data.find((product)=> product.id === idProduct )
                setProduct(findProduct)
            } )
            .finally(() => setLoading(false))
    },[idProduct])

    return (
        <>  
            {
                loading === true ? (<div>Cargando...</div>) : <ItemDetail product={product} />
            }
        </>
    )
}

export default ItemDetailContainer
