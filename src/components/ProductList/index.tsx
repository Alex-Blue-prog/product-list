import * as C from "./styles";
import { useState } from "react";
//icons
import { RxDotsVertical } from "react-icons/rx"
//types
import { Product } from "../../types/Product";
import { Link } from "react-router-dom";

type Props = {
  data: Product
}

export const ProductList = ({data}:Props) => {
  const [showOp, setShowOp] = useState(false);
  const [showOp2, setShowOp2] = useState(false);

  const showOptions = () => {
    setShowOp(!showOp);
    setTimeout(()=> {setShowOp2(!showOp2)}, 0o0);
  }
 
  return (
    <C.Li>
      <C.LiImg> 
        <img src={require(`../../assets/${data.marketName}.png`)} /> 
        <p>{data.productName}</p> 
      </C.LiImg> 
      <C.Liyear> {data.year} </C.Liyear> 
      <C.Price> R$ {data.price.toFixed(2)} </C.Price> 
      <C.Dots data-dot={true} onClick={showOptions}> <RxDotsVertical data-dot={true} /></C.Dots> 

      <C.Options showOp={showOp} showOp2={showOp2}>
         <Link to={"/"} style={{textDecoration: "none"}}><div>Editar</div></Link> 
         <div>Excluir</div>
      </C.Options>
    </C.Li>
  )
}

