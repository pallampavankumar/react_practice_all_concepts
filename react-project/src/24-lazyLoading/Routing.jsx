import {React,Suspense,lazy} from 'react'
import {Routes,Route} from 'react-router-dom'
import ProtectedRoute from './ProtectedRoute';
const Login=lazy(()=>import('./Login'));
const DashBoard = lazy(() =>
  new Promise(resolve =>
    setTimeout(() => resolve(import("./DashBoard")), 20000)
  )
);
const Profile=lazy(()=>import('./Profile'));

function Routing() {
  return (
    <div>
      <Suspense fallback={<p>Loading.....</p>}>
      <Routes>

        <Route path="/dashboard" element={
            <ProtectedRoute>
                <DashBoard/>
            </ProtectedRoute>}></Route>
        <Route path="/profile" element={
            <ProtectedRoute>
                <Profile/>
            </ProtectedRoute>}></Route>
        <Route path="/" element={<Login/>}></Route>
        <Route path="*" element={<Login/>}></Route>

      </Routes>
      </Suspense>
    </div>
  )
}

export default Routing
