import {useState, useEffect} from 'react'

const ContadorEventListener = () => {
  const [count, setCount ]= useState(1)

  const handleClickButton = () => {
    setCount( (prevCount) => prevCount + 1 )
  }


  useEffect(() => {
    const buttonAdd = document.getElementById("buttonAdd")

    buttonAdd.addEventListener("click", handleClickButton )
  
    //se ejecuta cuando el componente se desmonta.
    return ( ) => { 
        buttonAdd.removeEventListener("click", handleClickButton)
    }

  }, [])
  

    return (
    <div>
        <p>{count}</p>
        <button id="buttonAdd" >+</button>
    </div>
  )
}

export default ContadorEventListener
