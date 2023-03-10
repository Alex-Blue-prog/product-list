import * as C from "./styles";
import { ChangeEvent, FormEvent, useState, useContext, useEffect } from "react";
//components
import { BackBtn } from "../../components/BackBtn";
//contextapi
import { Context } from "../../contexts/Context";
//imgs
import marketIcon from "../../assets/marketIcon.png";
import capitalize from "../../helpers/Capitalize";
import { useNavigate, useParams } from "react-router-dom";

export const Create = () => {
  const {id} = useParams();
  const navigate = useNavigate();

  const {state, dispatch} = useContext(Context);
  const [inputs, setInputs] = useState({
      marketName: "",
      productName: "",
      price: 0,
      year: new Date().getFullYear()
    });

  useEffect(() => {
    if(id) {
      const product = state.products.find(value => value.id === id);
      if(product) {
        setInputs({...product, year: new Date().getFullYear()});
      } 
    } else {
      setInputs({
        marketName: "",
        productName: "",
        price: 0,
        year: new Date().getFullYear()
      })

    }
  },[id, state.products])


  //input handlers
  const handleMarketName = (e: ChangeEvent<HTMLSelectElement>) => {
    setInputs({...inputs, marketName: e.target.value});
  }

  const handleProductName = (e: ChangeEvent<HTMLInputElement>) => {
    setInputs({...inputs, productName: capitalize(e.target.value)});
  }

  const handleProductPrice = (e: ChangeEvent<HTMLInputElement>) => {
    if(Number(e.target.value) < 0) return;
    setInputs({...inputs, price: Number(e.target.value)});
  }

  //add producto to the context
  const addProduct = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if(inputs.marketName && inputs.productName && inputs.price) {
      
      if(!id) {
        dispatch({type: "ADD_PRODUCT", payload: inputs});
        alert("Produto adicionado com sucesso!");
        setInputs({...inputs, marketName: "", productName: "", price: 0 });

      } else {
        dispatch({type: "EDIT_PRODUCT", payload: {id: id, data: inputs}});
        alert("Produto editado com sucesso!");
      }
     
      navigate("/");

    } else {
      alert("campos em branco!");
    }
  
  }

  return (
    <C.Container>
        <C.Wrapper>
          <BackBtn />
          <C.FormContainer>

          <C.Form onSubmit={addProduct}>
              <C.FormTitle>Adicione um produto</C.FormTitle>
              <select name="marketName" onChange={handleMarketName} value={inputs.marketName}>
                <option value="">Selecione um dos mercados</option>
                <option value="extra">Extra</option>
                <option value="dia">Dia</option>
                <option value="carrefour">Carrefour</option>
                <option value="atacadao">Atacad??o</option>
              </select>
              <input onChange={handleProductName} value={inputs.productName} type="text" placeholder="Digite o nome do produto" />
              <input onChange={handleProductPrice} value={inputs.price ? inputs.price : ""} type="number" placeholder="Digite o pre??o do produto" />
              <button>Confirmar</button>
          </C.Form>

          <C.FormImageContainer>
            {inputs.marketName &&
            <img src={require(`../../assets/${inputs.marketName}.png`)} />

            ||

            <C.NoMarket src={marketIcon} />
            }
          </C.FormImageContainer>
  
          </C.FormContainer>
        </C.Wrapper>
    </C.Container>
  )
}
