import {render,screen} from '@testing-library/react'
import Greeting from './Greeting'

test('render greeting text',()=>{
    render(<Greeting name="pavan"/>)
    const text=screen.getByText(/Hello pavan/i);
    expect(text).toBeInTheDocument();
});