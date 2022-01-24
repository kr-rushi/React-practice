import logo from "./logo.svg";
import "./App.css";
import React, { useReducer } from "react";
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
import UseReducerCounterOne from "./components/useReducercounterone";
import UseReducerCounterTwo from "./components/UseReducerCounterTwo";
import UseReducerCounterThree from "./components/UseReducerCounterThree";
import UseReducerComponentA from "./components/UseReducerComponentA";
import UseReducerComponentB from "./components/UseReducerComponentB";
import UseReducerComponentC from "./components/UseReducerComponentC";
import UseReducerDataFetching from "./components/UseReducerDataFetching";
import UseMemoCounter from "./components/UseMemoCounter";
import UseRefHookTimer from "./components/UseRefHookTimer";
import CustomHookOne from "./components/CustomHookOne";
import CustomHookTwo from "./components/CustomHookTwo";
import UserForm from "./components/UserForm";
import CustomHooksCounterOne from "./components/CustomHooksCounterOne";
import CustomHooksCounterTwo from "./components/CustomHooksCounterTwo";
import {
  StyledButton,
  FancyButton,
  SubmitButton,
} from "./components/StyledComponents/Button.Styles";
export const UserContext = React.createContext();
export const ChannelContext = React.createContext();
export const CountContext = React.createContext();
// const initialState = 0;
// const reducer = (state, action) => {
//   switch (action.type) {
//     case "increment":
//       return state + action.value;
//     case "decrement":
//       return state - action.value;
//     case "reset":
//       return initialState;
//     default:
//       return state;
//   }
// };

function App() {
  // const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <div className="App">
      {/* <CountContext.Provider
        value={{ countstate: count, countdispatch: dispatch }}
      >
        <UseReducerComponentA />
        <UseReducerComponentB />
        <UseReducerComponentC />
      </CountContext.Provider>
      count {count} */}
      {/* <UseReducerDataFetching /> */}
      {/* <UseMemoCounter /> */}
      {/* <UseRefHookTimer /> */}
      {/* <CustomHookOne />
      <CustomHookTwo /> */}
      {/* <CustomHooksCounterOne />
      <CustomHooksCounterTwo />
      <UserForm /> */}
      {/* <UserContext.Provider value={"vishwas"}>
        <ChannelContext.Provider value={"hii"}>
          <HooksContext />
        </ChannelContext.Provider>
      </UserContext.Provider> */}
      {/* <UseReducerCounterOne /> */}
      {/* <UseReducerCounterTwo /> */}
      {/* <UseReducerCounterThree /> */}
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
      {/* <ClickCounterTwo />
      <HoverCounterTwo /> */}
      <StyledButton type="submit">StyledButtonS</StyledButton>
      <StyledButton variant="outline">StyledButtonS</StyledButton>
      <FancyButton as="a">Fancy Button</FancyButton>
      <SubmitButton>submit</SubmitButton>
      {/* <CounterTwo
        render={(count, incrementCount) => (
          <ClickCounterTwo count={count} incrementCount={incrementCount} />
        )}
      />
      <CounterTwo
        render={(count, incrementCount) => (
          <HoverCounterTwo count={count} incrementCount={incrementCount} />
        )}
      /> */}
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
