import "./itemdetailcontainer.css"
const ItemDetail = ( {product} ) => {
  return (
    <div className="item-detail" > 
      <img src={product.image} className="img-detail" alt="" />
      <div className="detail">
        <h2>{product.name} </h2>
        <p> Precio: ${product.price} </p>
      </div>
    </div>
  )
}

export default ItemDetail
