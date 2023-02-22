import App from "./App";
import { MemoryRouter } from "react-router-dom";
import {render, screen} from "@testing-library/react";
import { act } from "react-dom/test-utils";

it("should have div with class wrapper", ()=> {

    const {container} = render(<MemoryRouter> <App /> </MemoryRouter>);
    expect(container.getElementsByClassName("wrapper").length).toBeGreaterThan(0);

});

it("should render NotFound page when entering a non existing route", () => {

    const {container} = render(
        <MemoryRouter initialEntries={["/blablabla"]}>
            <App />
        </MemoryRouter>
    );

    const h2 = container.getElementsByTagName("h2")[0];
    expect(h2.innerHTML).toBe("Pagina não encontrada !!!")

    // const notFoundTextElement = screen.getByText("Pagina não encontrada !!!");
    // expect(notFoundTextElement).toBeInTheDocument();
});

it("should go to the registration page when clicking on the register button", ()=> {

    const { container } = render(
        <MemoryRouter>
            <App />
        </MemoryRouter>
    );

    act(() => {
        let registerBtn = container.getElementsByClassName("header")[0].getElementsByTagName("a")[1];

        registerBtn?.click();
    });

    const registrationTitle = screen.getByText("Adicione um produto");
    expect(registrationTitle).toBeInTheDocument();

});