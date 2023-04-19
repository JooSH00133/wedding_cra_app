import HeaderComponent from './HeaderComponent.jsx';
import MainComponent from './MainComponent.jsx';
import FooterComponent from './FooterComponent.jsx';
import ModalComponent from './ModalComponent.jsx';
import GotopComponent from './GotopComponent.jsx';

export default function WrapComponent(){
  return(
    <div id="wrap">
        <HeaderComponent/>
        <MainComponent/>
        <FooterComponent/>
        <ModalComponent/>
        <GotopComponent/>
    </div>
  )
}