import './App.css';
import Accordion from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";
import {Star} from "./components/Rating/Rating";



//function declaration
function App() {
    // полезное что-то
    // обязана вернуть JSX
    console.log('App rendering')
  return (
    <div>
        <AppTitle/>
        <Rating/>
        <Accordion/>
        <Star />
        <Rating/>
    </div>
  );
}

function AppTitle() {
    console.log('AppTitle rendering')
    return <>This is APP component</>
}


export default App;
