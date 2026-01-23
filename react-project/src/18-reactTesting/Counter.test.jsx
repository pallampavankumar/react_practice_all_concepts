import {render,screen,  fireEvent} from '@testing-library/react'
import Counter from './Counter';

test('testing incerment button',()=>{
    render(<Counter/>);
    const button=screen.getByText("Increase");
    fireEvent.click(button);
    const text=screen.getByText("Count: 1");
    expect(text).toBeInTheDocument();
});