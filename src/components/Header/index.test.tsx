import { Header } from "./index";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

it("should have button Adicionar", ()=> {

    render(<MemoryRouter> <Header /> </MemoryRouter>);
    let result = screen.getByText("Adicionar");
    
    expect(result).toBeInTheDocument();
});