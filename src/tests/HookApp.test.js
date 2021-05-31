import { HookApp } from '../HookApp';
import { shallow } from 'enzyme';

describe("<HookApp /> Tests", () =>{

    test("should display correctly", () => {
        const wrapper = shallow( <HookApp /> );
        expect(wrapper).toMatchSnapshot();
    });

});