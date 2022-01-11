import logo from './logo.svg';
import './App.css';
import Greeting from './components/Greet';
import {Greetq} from './components/Greet1';
import Jsximplementation from './components/Jsximplementation';
import Message from './components/Message';
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventHandler from './components/EventHandler';
import ParentComponent from './components/ParentComponent';
import Conditional from './components/Conditional';
import PersonsList from './components/PersonsList';
import { Form } from './components/Form';
import LifeCycleA from './components/LifeCycleA';
function App() {
  return (
    <div className="App">
      {/* <ParentComponent/> */}
      {/* <Conditional/> */}
      {/* <PersonsList/> */}
      {/* <Form/> */}
      <LifeCycleA/>
{/* <Message/> */}
{/* <Counter/> */}
{/* <ClassClick/>
<FunctionClick/> */}
{/* <EventHandler/> */}
     {/* <Greeting name='hi' check='yes'>
       <p>
         heelloo buddy
       </p>
     </Greeting>
     <Greeting name='hii' check='No'>
       <button>buddy2</button>
     </Greeting>
     <Greeting name='hiii' check='yes'>
       <p>yess</p>
     </Greeting>
     <Greeting name='hiiii' check='No'></Greeting>
     <Greetq name='hi' check='yes'>
       <p>
         heelloo buddy
       </p>
     </Greetq>
     <Greetq name='hii' check='No'>
       <button>buddy2</button>
     </Greetq>
     <Greetq name='hiii' check='yes'>
       <p>yess</p>
     </Greetq>
     <Greetq name='hiiii' check='No'></Greetq>
     <Jsximplementation/> */}
    </div>
  );
}

export default App;
