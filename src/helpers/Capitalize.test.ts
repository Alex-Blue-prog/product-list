import capitalize from "./Capitalize";

describe("testing word capitalize", ()=> {

    it("should capitalize the first char", () => {

        let result = capitalize("some name");
        expect(result).toBe("Some name");
        
    });

});