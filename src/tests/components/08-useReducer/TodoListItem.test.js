import { shallow } from "enzyme";
import { TodoListItem } from "../../../components/08-useReducer/TodoListItem";
import { demoTodos } from "../../fixtures/demoTodos";

describe("<TodoListItem /> tests", () => {

    const todo = demoTodos[0];
    const handleDelete = jest.fn();
    const handleToggle = jest.fn();


    const wrapper = shallow(
        <TodoListItem
            todo={todo}
            index={0}
            handleToggle={handleToggle}
            handleDelete={handleDelete}
        />
    );

    test('it should show successfully', () => {
        expect(wrapper).toMatchSnapshot();
    })

    test('should call handleDelete', () => {
        wrapper.find("button").simulate("click");
        expect(handleDelete).toHaveBeenCalledWith(todo.id);
    });

    test('should show the text', () => {
        const p = wrapper.find("p");
        expect(p.text()).toBe(`${0}. ${todo.desc}`)
    });

    test('className done if done === true', () => {
        
        const wrapper = shallow(<TodoListItem
            todo={{...todo, done:true}}
        />);

        expect(wrapper.find("p").hasClass("complete")).toBe(true);

    });
    
});