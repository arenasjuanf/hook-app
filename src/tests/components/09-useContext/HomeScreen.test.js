import { shallow } from "enzyme";
import { HomeScreen } from "../../../components/09-useContext/HomeScreen";
import { UserContext } from "../../../components/09-useContext/UserContext";

describe("<HomeScreen/> tests", () =>{
    const wrapper = shallow(
        <UserContext.Provider value={{user: "juanf", email:"nada@nothing.com"}}>
            <HomeScreen/>
        </UserContext.Provider>
    );

    test('it should show successfully', () => {
        expect(wrapper).toMatchSnapshot();
    })
    
})