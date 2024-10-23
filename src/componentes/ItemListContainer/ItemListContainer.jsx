import { useState, useEffect } from "react"
import { getProducts } from "../../data/data"
import ItemList from "./ItemList"
import "./itemlistcontainer.css"

const ItemListContainer = ( {saludo} ) => {
    const [products, setProducts] = useState([])

    useEffect( () => {
        getProducts()
            .then( (dataProducts) => {
                setProducts(dataProducts)
            })
            .catch( (error) =>{
                console.error(error)
            })
            .finally( () => {
                console.log("Finalizo la promesa")
            } )
    },[]) 
    
    return(
        <div className="itemlistcontainer">
            <h2 className="saludo">{saludo }</h2>
            <ItemList products={products}/>
        </div>
    )
}
export default ItemListContainer