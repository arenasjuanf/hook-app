import { useForm } from "../../hooks/useForm";
import { renderHook, act } from '@testing-library/react-hooks';

describe("useForm tests", () => {

    const initialForm = {
        name: "juanf",
        email:"juanfa107@gmail.com"
    };

    test("return default form", () => {
        const {result} = renderHook( () => useForm(initialForm) );
        const [values] = result.current;
        expect(values).toBe(initialForm);
    });

    test("it should change form value", () => {

        const {result} = renderHook( () => useForm(initialForm) );
        const [, handleInputChange ] = result.current;
        act(() => {

            handleInputChange({
                target: {
                    name: "name", 
                    value: "leydy"
                }
            });
        });

        const [values] = result.current;

        expect(values.name).toEqual("leydy");        
    })

    test("reset form ", () => {

        const {result} = renderHook( () => useForm(initialForm) );
        const [,,reset] = result.current;

        const [, handleInputChange ] = result.current;
        act(() => {

            handleInputChange({
                target: {
                    name: "name", 
                    value: "leydy"
                }
            });
        });        
                
        act( () => reset());

        const [values] = result.current;
        
        expect(values).toBe(initialForm);
    })


})