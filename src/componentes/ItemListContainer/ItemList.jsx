import Item from "./Item"
const ItemList = ( {products} ) => {
    //mapea, recibe los productos y por cada uno crea una cart
    return(
        <div className="itemlist">
            {
                products.map( (product)=> (
                    <Item product={product} key={product.id}/>
                ))
            }
        </div>
    )
}
export default ItemList