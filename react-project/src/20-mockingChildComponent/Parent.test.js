import {render,screen} from '@testing-library/react'
import Parent from './Parent'
jest.mock("./child",()=>{
    return function mockChild(props){
        return <div data-testid="child">{props.message}</div>
    }
})

test('props passed to child',()=>{
    render(<Parent/>);
    const comp=screen.getByTestId("child");
    expect(comp).toHaveTextContent("Hello from parent");
})