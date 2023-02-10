import * as C from "./styles";
import {IoIosArrowBack} from "react-icons/io";
import { useNavigate } from "react-router-dom";

export const BackBtn = () => {
  const navigate = useNavigate();

  return (
    <C.Button onClick={() => navigate(-1)}>
        <C.Icon><IoIosArrowBack/></C.Icon>
        <p> Voltar </p>
    </C.Button>
  )
}
