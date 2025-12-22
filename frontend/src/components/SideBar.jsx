import logo from '../assets/logo.png';
import TextFields from './TextFields.jsx';

function SideBar() {
  return(
    <div className="w-1/4 h-screen flex flex-col space-y-8">
      <img src={logo} alt="Logo" className="w-32 h-32"/>
      <TextFields />
    </div>
  )
}

export default SideBar;