import { Link } from "react-router-dom"

const Item = ( {product} ) => {
    //vista de carts
    return(
        <div className="item">
            <img src={product.image} className="img-item" alt="" />
            <h2 className="text-item">{product.name}</h2>
            <p className="text-item">Precio: ${product.price} </p>
            <Link to={"/detail/" + product.id} className="link-diteil" >Ver Detalles</Link>
        </div>
    )//estilar la etiqueta LINK
}
export default Item