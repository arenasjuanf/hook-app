import { renderHook, act } from '@testing-library/react-hooks';
import { useCounter } from '../../hooks/useCounter';

describe("useCounter tests", () => {
    
    test("it should return default values", () => {

        const { result } = renderHook( () => useCounter() );
        expect(result.current.state).toBe(10);
        expect(typeof result.current.increment).toBe("function");
        expect(typeof result.current.decrement).toBe("function");
        expect(typeof result.current.reset).toBe("function");
    })



    test("state should to be 100 | 101", () => {
        const { result } = renderHook( () => useCounter(100) );
        const { increment } = result.current;

        expect(result.current.state).toBe(100);
        act( () => increment());
        expect(result.current.state).toBe(101);
    })


    test("reset state = 100", () => {
        const { result } = renderHook( () => useCounter(100) );
        const { increment, reset } = result.current;

        act( () => {
            increment();
            reset();
        });

        expect(result.current.state).toBe(100);

    })

    test("state decrement = 99", () => {
        const { result } = renderHook( () => useCounter(100) );
        const { decrement } = result.current;

        act( () => {
            decrement();;
        });

        expect(result.current.state).toBe(99);

    })


});