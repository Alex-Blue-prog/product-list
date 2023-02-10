import * as C from "./styles";
import { ChangeEvent, FormEvent, useState, useContext } from "react";
//components
import { BackBtn } from "../../components/BackBtn";
//contextapi
import { Context } from "../../contexts/Context";

export const Create = () => {
  const {state, dispatch} = useContext(Context);
  const [inputs, setInputs] = useState({
      marketName: "",
      productName: "",
      price: 0,
      year: 2024
    });

  const addProduct = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if(inputs.marketName && inputs.productName && inputs.price) {
      dispatch({type: "ADD_PRODUCT", payload: inputs});
      alert("item adicionado com sucesso");

    } else {
      alert("campos em branco !!!");
    }
  
  }

  //input handlers
  const handleMarketName = (e: ChangeEvent<HTMLSelectElement>) => {
    setInputs({...inputs, marketName: e.target.value});
  }

  const handleProductName = (e: ChangeEvent<HTMLInputElement>) => {
    setInputs({...inputs, productName: e.target.value});
  }

  const handleProductPrice = (e: ChangeEvent<HTMLInputElement>) => {
    if(Number(e.target.value) < 0) return;
    setInputs({...inputs, price: Number(e.target.value)});
  }


  return (
    <C.Container>
        <C.Wrapper>
          <BackBtn />
          <C.FormContainer>

          <C.Form onSubmit={addProduct}>
              <C.FormTitle>Adicione um produto</C.FormTitle>
              <select name="marketName" onChange={handleMarketName}>
                <option value="">Selecione um dos mercados</option>
                <option value="extra">Extra</option>
                <option value="dias">Dias</option>
                <option value="rede krill">Rede krill</option>
                <option value="atacadao">Atacadão</option>
              </select>
              <input onChange={handleProductName} value={inputs.productName} type="text" placeholder="Digite o nome do produto" />
              <input onChange={handleProductPrice} value={inputs.price ? inputs.price : ""} type="number" placeholder="Digite o preço do produto" />
              <button>Confirmar</button>
          </C.Form>

          <C.FormImageContainer>
            ...
          </C.FormImageContainer>
  
          </C.FormContainer>
        </C.Wrapper>
    </C.Container>
  )
}
