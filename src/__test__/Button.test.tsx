import { screen , render } from "@testing-library/react";
import Button from "../component/Button/Button";
import React from "react";


describe("Test the button component" , () =>{
    test( "testing by id", () =>{
        render(<Button onClick={jest.fn()} title="Button" isPrimary />)

        // test by Id
        const buttonId = screen.getByTestId("button-test-id") ; 
        expect(buttonId).toBeInTheDocument()

        // test by text
        const buttontext  = screen.getByText("Button") ; 
        expect(buttontext).toBeInTheDocument() ; 

    })
})