import './App.css';
import Header  from './components/header/header.component';
import MainSection from './components/main-section/main-section.component';
import OftenAskedSection from './components/often-asked/often-asked-section.component'
import data from './textData.json';

function App() {
    return (
        <div className="App">
            <Header headerData={data.header} popupData={data.popup} />
            <MainSection mainSectionData={data.body.mainSection}/>
            <OftenAskedSection oftenAskedData={data.body.oftenAsked}/>
        </div>
    );
}

export default App;
