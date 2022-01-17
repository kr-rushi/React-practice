import logo from "./logo.svg";
import "./App.css";
import React from "react";
import Greeting from "./components/Greet";
import { Greetq } from "./components/Greet1";
import Jsximplementation from "./components/Jsximplementation";
import Message from "./components/Message";
import Counter from "./components/Counter";
import FunctionClick from "./components/FunctionClick";
import ClassClick from "./components/ClassClick";
import EventHandler from "./components/EventHandler";
import ParentComponent from "./components/ParentComponent";
import Conditional from "./components/Conditional";
import PersonsList from "./components/PersonsList";
import { Form } from "./components/Form";
import LifeCycleA from "./components/LifeCycleA";
import ComponentParent from "./components/ComponentParent";
import RefsDemo from "./components/RefsDemo";
import FocusInput from "./components/FocusInput";
import Portaldemo from "./components/Portaldemo";
import ErrorHero from "./components/ErrorHero";
import { ErrorBoundary } from "./components/ErrorBoundary";
import ClickCounter from "./components/ClickCounter";
import HoverCounter from "./components/HoverCounter";
import ClickCounterTwo from "./components/ClickCounterTwo";
import HoverCounterTwo from "./components/HoverCounterTwo";
import User from "./components/User";
import CounterTwo from "./components/CounterTwo";
import { UserProvider } from "./components/UserContext";
import ComponentC from "./components/ComponentC";
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import HookCounter from "./components/HookCounter";
import HookCounterTwo from "./components/HookCounterTwo";
import HookCounterThree from "./components/HookCounterThree";
import HookCounterFour from "./components/HookCounterFour";
import HookCounteruseeffectone from "./components/HookCounteruseeffectone";
import HooksMouseHover from "./components/HooksMouseHover";
import MouseContainer from "./components/MouseContainer";
import IntervalHookCounter from "./components/IntervalHookCounter";
import DataFetchingHooks from "./components/DataFetchingHooks";
import HooksContext from "./components/HooksContext";
export const UserContext = React.createContext();
export const ChannelContext = React.createContext();
function App() {
  return (
    <div className="App">
      <UserContext.Provider value={"vishwas"}>
        <ChannelContext.Provider value={"hii"}>
          <HooksContext />
        </ChannelContext.Provider>
      </UserContext.Provider>

      {/* <UserProvider value="Rushi">
        <ComponentC />
      </UserProvider> */}
      {/* <PostList /> */}
      {/* <PostForm /> */}
      {/* <HookCounter /> */}
      {/* <HookCounterTwo /> */}
      {/* <HookCounterThree /> */}
      {/* <HookCounterFour /> */}
      {/* <HookCounteruseeffectone /> */}
      {/* <HooksMouseHover /> */}
      {/* <MouseContainer /> */}
      {/* <IntervalHookCounter /> */}
      {/* <DataFetchingHooks /> */}
      {/* <ParentComponent/> */}
      {/* <Conditional/> */}
      {/* <PersonsList/> */}
      {/* <Form/> */}
      {/* <RefsDemo/> */}
      {/* <FocusInput/> */}
      {/* <Portaldemo/> */}
      {/* <ErrorBoundary>
      <ErrorHero heroName='Batman'/>
      </ErrorBoundary>
      <ErrorBoundary>
      <ErrorHero heroName='Superman'/>
      </ErrorBoundary>
      <ErrorBoundary>
      <ErrorHero heroName='joker'/>
      </ErrorBoundary> */}
      {/* <ClickCounter name='Rushi'/>
      <HoverCounter></HoverCounter> */}
      {/* <ClickCounterTwo/>
      <HoverCounterTwo/> */}
      {/* <CounterTwo render={(count,incrementCount)=>(
        <ClickCounterTwo count={count} incrementCount={incrementCount}/>
      )}/>
      <CounterTwo render={(count,incrementCount)=>(
        <HoverCounterTwo count={count} incrementCount={incrementCount}/>
      )}/> */}
      {/* <User name={(isLoggedIn)=>isLoggedIn?'rushi':'Guest'}/> */}
      {/* <ComponentParent/> */}
      {/* <LifeCycleA/> */}
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
