import { shallow } from 'enzyme';
import { TodoList } from '../../../components/08-useReducer/TodoList';
import { demoTodos } from "../../fixtures/demoTodos";

describe("<TodoList /> tests", () => {

    const handleDelete = jest.fn();
    const handleToggle = jest.fn();

    const wrapper = shallow(<TodoList
        todos={ demoTodos }
        handleDelete  = { handleDelete }
        handleToggle = { handleToggle }
    />);

    test('it should show succesfully', () => {

        expect(wrapper).toMatchSnapshot();

    })

    test('it should have two <TodoListItem/>', () => {
        expect(wrapper.find('TodoListItem').length).toBe(2);
        expect(wrapper.find('TodoListItem').at(0).prop('handleDelete')).toEqual(expect.any(Function));
    })
    
})