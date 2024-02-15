
import Loading from './Loading.tsx';
import DiscoverButton from './discoverButton.tsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Progress_Bar from './Progress_Bar.tsx';
import Found from './Found.tsx';
import LightsHome from './lightsHome.tsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <> 
    <Progress_Bar/>
    <DiscoverButton label = "Discover Hue" /></>

  },
  {
    path: "/loading",
    element:<> <Progress_Bar/><Loading/></> 
  },
  {
    path: "/foundBridge",
    element :<> <Progress_Bar/><Found/></> 
  },
  {
    path: "/lightsHome",
    element :<> <LightsHome/></>	
  }
]);

function App(){
  return (  
    <> 
  
     <RouterProvider router = {router}/></>
  );
}
export default App;