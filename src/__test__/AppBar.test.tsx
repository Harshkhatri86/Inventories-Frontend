import React from 'react' ; 
import {screen , render } from '@testing-library/react' ; 
import AppBarComp from '../component/AppBar/AppBar';


describe("Test the AppBar" , () =>{
    test("Test by id " , () =>{
        render(<AppBarComp/>)

        const appBarId = screen.getByTestId("AppBar-test-id") ; 
        expect(appBarId).toBeInTheDocument() ; 
    })
})