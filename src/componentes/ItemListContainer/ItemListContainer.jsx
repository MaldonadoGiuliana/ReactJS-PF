import { useState, useEffect } from "react"
import { getProducts } from "../../data/data"
import { useParams } from "react-router-dom"
import ItemList from "./ItemList"
import "./itemlistcontainer.css"

const ItemListContainer = ( {saludo} ) => {
    const [products, setProducts] = useState([])

    const { idCategory } = useParams()

    useEffect( () => {
        getProducts()
            .then( (dataProducts) => {
                if(idCategory){
                //filtramos la data por esa category
                    const filterProducts = dataProducts.filter( (product)=> product.category === idCategory )
                    setProducts(filterProducts)
                }else{
                    //guardamos todos los products
                    setProducts(dataProducts)
                }
            })
            .catch( (error) =>{
                console.error(error)
            })
            .finally( () => {
                console.log("Finalizo la promesa")
            } )
    },[idCategory]) 
    
    return(
        <div className="itemlistcontainer">
            <h2 className="saludo">{saludo }</h2>
            <ItemList products={products}/>
        </div>
    )
}
export default ItemListContainer