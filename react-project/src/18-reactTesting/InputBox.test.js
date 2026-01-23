import {render,screen,fireEvent} from '@testing-library/react';
import InputBox from './InputBox'

test('checking the input component',()=>{
  render(<InputBox/>);
  const input=screen.getByPlaceholderText("Type here");
  fireEvent.change(input,{target:{value:"Hello"}});
  expect(screen.getByText("Hello")).toBeInTheDocument();
})