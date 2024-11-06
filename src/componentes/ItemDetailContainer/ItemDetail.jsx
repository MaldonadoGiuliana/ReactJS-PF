import { useState } from "react"
import "./itemdetailcontainer.css"
const ItemDetail = ( {product} ) => {

  const [currentImage, setCurrentImage] =useState(product.image[0])

  const images = product.image.filter( (image)=> image !== currentImage )
  return (
    <div className="item-detail" > 
      <div className="images-detail-container">
        <div className="secondary-images">
          {
            images.map ((image) =>(
              <img src={image} key={image} onClick={ () => setCurrentImage(image) } />
            ))
          }
        </div>

        <div className="main-image">
          <img src={currentImage} />
        </div>

      </div>
      <div className="detail">
        <h2>{product.name} </h2>
        <p> Precio: ${product.price} </p>
      </div>
    </div>
  )
}

export default ItemDetail
