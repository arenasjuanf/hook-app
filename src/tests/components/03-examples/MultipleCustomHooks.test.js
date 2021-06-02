import { shallow } from "enzyme"
import { MultipleCustomHooks } from "../../../components/03-examples/MultipleCustomHooks"
import { useFetch } from "../../../hooks/useFetch";
jest.mock("../../../hooks/useFetch");

describe("tests <MultipleCustomHooks />", () => {


    test('should show successfully', () => {

        useFetch.mockReturnValue({
            data:null,
            loading: true,
            error: null
        });

        const wrapper = shallow( <MultipleCustomHooks/>);
        expect(wrapper).toMatchSnapshot();
    })

    test('should show url info', () => {
        useFetch.mockReturnValue({
            data:[{
                author: "juanf",
                quote: "hello world"
            }],
            loading: false,
            error: null
        });

        const wrapper = shallow( <MultipleCustomHooks/>);
        expect(wrapper.find(".alert").exists()).toBe(false);
        // expect(wrapper.find(".mb-0").text().trim()).toBe("hello world")
    })
    

})