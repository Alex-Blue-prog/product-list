import * as C from "./styles";
import { useEffect, useState, useContext } from "react";
//icons
import { RxDotsVertical } from "react-icons/rx"
//types
import { Product } from "../../types/Product";
import { Link } from "react-router-dom";
//context
import { Context } from "../../contexts/Context"; 

type Props = {
  data: Product
}

export const ProductList = ({data}:Props) => {
  const {state, dispatch} = useContext(Context);
  const [showOp, setShowOp] = useState(false);
  const [showOp2, setShowOp2] = useState(false);

  //show options if dots were clicked
  const showOptions = () => {
    setShowOp(!showOp);
    setTimeout(()=> {setShowOp2(!showOp2)}, 0o0);
  }

  //hide options if dots were not clicked
  useEffect(() => {
    window.addEventListener('click', hidePoint);

    return () => window.removeEventListener('click', hidePoint);
  }, []);

  const hidePoint = (e: MouseEvent) => {

      if(!(e.target as HTMLElement).hasAttribute('data-dot') && !(e.target as HTMLElement).parentElement?.hasAttribute("data-dot")) {

        setShowOp(false);
        setShowOp2(false);
      } 
  }

  //delete product from context
  const handleProductDelete = () => {
    dispatch({type: "REMOVE_PRODUCT", payload: {id: data.id}});
  }
 
  return (
    <C.Li>
      <C.LiImg> 
        <div>
          <img src={require(`../../assets/${data.marketName}.png`)} /> 
        </div>
        <p>{data.productName}</p> 
      </C.LiImg> 
      <C.Liyear> {data.year} </C.Liyear> 
      <C.Price> R$ {data.price.toFixed(2)} </C.Price> 
      <C.Dots data-dot={true} onClick={showOptions}> <RxDotsVertical data-dot={true} /></C.Dots> 

      <C.Options showOp={showOp} showOp2={showOp2}>
         <Link to={`/create/${data.id}`} style={{textDecoration: "none"}}><div>Editar</div></Link> 
         <div onClick={handleProductDelete}>Excluir</div>
      </C.Options>
    </C.Li>
  )
}

