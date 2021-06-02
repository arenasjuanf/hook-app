import { todoReducer } from "../../../components/08-useReducer/todoReducer"
import { demoTodos } from "../../fixtures/demoTodos";



describe("todoReducer Tests", () => {

    test('should return default state', () => {
        const state = todoReducer(demoTodos, {});
        expect(state).toEqual(demoTodos);
    });

    test('should add a todo', () => {

        const payload = {id: 3, desc: "to rest", done: true};

        const state = todoReducer(demoTodos, {type: 'add', payload});
        
        expect(state.length).toBe(3);
        // expect(state).toBe([...state, payload]);
    });

    test('should delete a todo', () => {

        const idToDelete = 2;
        const state = todoReducer(demoTodos, {type: 'delete', payload: idToDelete});
        
        expect(state.length).toBe(1);
    })

    test('should toggle a todo', () => {

        const payload = {...demoTodos[0]};
        const state = todoReducer(demoTodos, {type: 'toggle', payload: payload.id});

        const [todo] = state.filter( t => t.id = payload.id);
        expect(!todo.done).toBe(payload.done);
    })
    
})