import { Link } from "react-router-dom";
import * as C from "./styles";

export const Header = () => {
  return (
    <C.Container>
        <C.Wrapper className="header">
            <Link to={"/"} style={{textDecoration: "none"}}>
                <div>
                    Product List
                </div>
            </Link>
            <Link to={"/create"}><button>Adicionar</button></Link>
        </C.Wrapper>
    </C.Container>
  )
}
