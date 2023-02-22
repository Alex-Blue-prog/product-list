import { Home } from "./index";
import { MemoryRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";

it("should have a list of products", ()=> {
    const { container } = render(
        <MemoryRouter>
            <Home />
        </MemoryRouter>
    );

    const listEl = container.getElementsByClassName("list");
    expect(listEl.length).toBeGreaterThan(0);

});

it("should have 4 products in the list", ()=> {
    const { container } = render(
        <MemoryRouter>
            <Home />
        </MemoryRouter>
    );

    const productItem = container.getElementsByClassName("productItem");
    expect(productItem.length).toBe(4);

});