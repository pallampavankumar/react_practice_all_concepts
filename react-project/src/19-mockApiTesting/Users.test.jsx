import {render,screen} from '@testing-library/react'
import Users from './Users'

test('testing api success',async ()=>{
    global.fetch=jest.fn(()=>
        Promise.resolve({json:()=>
            Promise.resolve([
                {id:1,name:"pavan"},
                {id:2,name:"kumar"}
            ])
        })
    );
    render(<Users/>);
    const user1=await screen.findByText("pavan");
    const user2=await screen.findByText("kumar");

    expect(user1).toBeInTheDocument();
    expect(user2).toBeInTheDocument();
})

test('testing error scenario', async ()=>{
    global.fetch=jest.fn(()=>Promise.reject('Api failed'));
    render(<Users/>);

    const error=await screen.findByText("Failed to load users");
    expect(error).toBeInTheDocument();
})
test('testing loading scenario',async ()=>{
    render(<Users/>);
    const loading=await screen.findByText("Loading...");
    expect(loading).toBeInTheDocument();
})