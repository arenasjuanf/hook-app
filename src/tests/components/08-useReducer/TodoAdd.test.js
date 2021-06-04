import { shallow } from "enzyme"
import { TodoAdd } from '../../../components/08-useReducer/TodoAdd';


describe("<TodoAdd/> tests", () => {
    
    const handleAddTodo = jest.fn();

    const wrapper = shallow(<TodoAdd 
        handleAddTodo={handleAddTodo}
    />);

    test('it show successfully', () => {
        expect(handleAddTodo).toMatchSnapshot();
    });

    test('it shouldn"t call handleAddTodo', () => {
        const formSubmit = wrapper.find('form').prop('onSubmit');
        formSubmit({preventDefault(){}});
        expect(handleAddTodo).toHaveBeenCalledTimes(0);
    });

    test('it should call handleAddTodo', () => {

        const value = 'learn react';

        wrapper.find('input').simulate('change', {target:  {
            value,
            name: 'description'
        }});

        const formSubmit = wrapper.find('form').prop('onSubmit');
        formSubmit({preventDefault(){}});
        expect(handleAddTodo).toHaveBeenCalledTimes(1);
        expect(handleAddTodo).toHaveBeenCalledWith( {
            "desc": value,
            "done": false,
            "id": expect.any(Number),
        })

        expect(wrapper.find('input').prop('value')).toBe('')
    });

})