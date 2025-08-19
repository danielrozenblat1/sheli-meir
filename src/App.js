
import './App.css';
import ByMe from './components/ByMe/ByMe';
import NavBarNew from './components/CourseNav/NavBarNew';
import FloatingButton from './components/FloatButton/FloatButton';
import Me from './components/me/Me';
import Certificates from './components/recommends/Certificates';
import StudentsWorks from './components/recommends/StudentsWorks';
import Works from './components/recommends/Works';
import PrivacyPolicy from './privacy/Privacy';
import FifthScreen from './screens/FifthScreen';
import ForthScreen from './screens/ForthScreen';
import FirstScreen from './screens/NewFirstScreen';
import SecondScreen from './screens/SecondScreen';
import SixthScreen from './screens/SixthScreen';
import ThirdScreen from './screens/ThirdScreen';

function App() {
  return <>
  <NavBarNew/>
  <FirstScreen/>
  <SecondScreen/>
  <Works/>
  <Me/>
  <Certificates/>
  <ThirdScreen/>
  <StudentsWorks/>
  <ForthScreen/>
  <SixthScreen/>
  <FifthScreen/>
<PrivacyPolicy 
  ownerName="שלי מאיר" 
  email="shelimeir998@gmail.com" 
  phone="053-621-6926" 
  domain="https://shelimeir-academy.co.il/" 
/>
  <ByMe/>
    {/* <FloatingButton /> */}
  </>
}

export default App;
