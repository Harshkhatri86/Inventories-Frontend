import {screen, render , act} from '@testing-library/react' ;
import Input from '../component/Input/Input';
import React from "react";

describe("Test the Input component" , () =>{
    test("testing by Id" , () =>{
        render(<Input placeholder='test' name='test' onChange={jest.fn()} type='text' value='' error=''/>)

        

        const inputId = screen.getByTestId("Input-test-id"); 
        expect(inputId).toBeInTheDocument() ; 
    })
})

