const Item = ( {product} ) => {
    //vista de carts
    return(
        <div className="item">
            <img src={product.image} className="img-item" width={100} alt="" />
            <h2 className="text-item">{product.name}</h2>
            <p className="text-item">Precio: ${product.price} </p>
        </div>
    )
}
export default Item