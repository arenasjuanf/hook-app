import { shallow } from "enzyme"
import { RealExampleRef } from "../../../components/04-useRef/RealExampleRef"

describe("<RealExampleRef /> tests", () => {
    const wrapper = shallow(<RealExampleRef />);
    
    test("it should show successfully", () => {
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('MultipleCustomHooks').exists()).toBe(false);
    })

    test("it should show <MultipleCustomHooks /> successfully", () => {

        wrapper.find("button").simulate("click");
        expect(wrapper.find('MultipleCustomHooks').exists()).toBe(true);
    })
})