import {useContext} from 'react'
import { UserContext } from './UserContext';

function Profile() {
    const username=useContext(UserContext);
  return (
    <div>
        <p>Hello this is {username}</p>
    </div>
  )
}

export default Profile
