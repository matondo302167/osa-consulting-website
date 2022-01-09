import Header from './banner/App';
import Stack from './components/Stack';
import Work from './components/Work';
import Prices from './components/Prices';
import Villes from './villes/Villes';
import Services from './service/Services';
import Contact from '../ComponentContact/Contact';
import AppMobile from '../app/AppMobile';
import { homeObjOne} from '../app/Data';
function App() {
  return (
    <>
      <div id="header">
        <Header />
      </div>
      <div id="work">
        <Work />
      </div>
      <div id="villes">
        <Villes/>
      </div>
      <div id="price">
        <Prices/>
      </div>
      <div id="services">
        <Services/>
      </div>
      <div id="">
        <AppMobile {...homeObjOne} />
      </div>
      <div id="stack">
        <Stack />
      </div>
      <div id="contact">
        <Contact/>
      </div>
    </>
  );
}

export default App;