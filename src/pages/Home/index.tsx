import * as C from "./styles";

//contextapi
import { useContext, useState } from "react";
import { Context } from "../../contexts/Context";

//components
import { ProductList } from "../../components/ProductList";
import { BlankList } from "../../components/BlankList";

export const Home = () => {
  const {state, dispatch} = useContext(Context);
  

  return (
    <C.Container>
      <C.Wrapper>

        <C.TopContent>
          <p>Lista de produtos</p>
          <p>Total: {state.products.length} produtos</p>
        </C.TopContent>

        { state.products.length > 0 ?

        <C.Ul className="list">
          {state.products.map(value => (
            <ProductList key={value.id} data={value} />
          ))}
        </C.Ul>

        :

        <BlankList />
        
        }
        

      </C.Wrapper>
    </C.Container>
  )
}
