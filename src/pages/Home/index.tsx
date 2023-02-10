import * as C from "./styles";

//contextapi
import { useContext, useState } from "react";
import { Context } from "../../contexts/Context";

//components
import { ProductList } from "../../components/ProductList";

export const Home = () => {
  const {state, dispatch} = useContext(Context);
  

  return (
    <C.Container>
      <C.Wrapper>

        <C.TopContent>
          <p>Lista de produtos</p>
          <p>Total: {state.products.length} produtos</p>
        </C.TopContent>

        <C.Ul>
          {state.products.map(value => (
            <ProductList key={value.id} data={value} />
          ))}
        </C.Ul>

      </C.Wrapper>
    </C.Container>
  )
}
