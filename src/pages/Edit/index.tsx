import * as C from "./styles";
import { useParams } from 'react-router-dom'


export const Edit = () => {
    const params = useParams();

  return (
    <C.Container>
        Edit {params.id}
    </C.Container>
  )
}
