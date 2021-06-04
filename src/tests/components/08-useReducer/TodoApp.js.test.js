import { TodoApp } from "../../../components/08-useReducer/TodoApp";
import {mount, shallow} from "enzyme";
import { demoTodos } from "../../fixtures/demoTodos";
import { act } from "@testing-library/react";


describe("<TodoApp/> tests", () => {
    
    const wrapper = shallow(<TodoApp/>);

    Storage.prototype.setItem = jest.fn(() => {});

    test('it should show sucessfully', () => {

        expect(wrapper).toMatchSnapshot();

    })


    test('it should add a todo', () => {
        const wrapper = mount(<TodoApp/>);
        act(() => {
            wrapper.find('TodoAdd').prop('handleAddTodo')(demoTodos[0]);
            wrapper.find('TodoAdd').prop('handleAddTodo')(demoTodos[1])
        });

        expect(wrapper.find('h1').text().trim()).toBe('Todo App  ( 2 )');
        expect(localStorage.setItem).toHaveBeenCalledTimes(2);

    });

    
});