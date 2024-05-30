import Func_component from "./Component_task/Func_component";
import Class_component from "./Component_task/Class_component";
import Jsx_component from "./JSX_task/Jsx_component";

import Home from "./Layout_task/Pages/Home";
import About from "./Layout_task/Pages/About";
import Contact from "./Layout_task/Pages/Contact";

import Func_props from "./Props_task/Func_props";
import Main_props from "./Props_task/Main_props";
import Css from "./Css_task/Css";
import Module_css from "./Module_css-task/Module_css";
import Sass_css from "./Sass-task/Sass_css";

import Simple_bootstrap from "./Bootstrap-task/Simple_bootstrap";
import React_Bootstrap from "./Bootstrap-task/React_Bootstrap";

import Mui_component from "./MUI-task/Mui_component";
import Styled_component from "./Styled_component-task/Styled_component";

import Func_state from "./State_task/Function/Func_state";
import Class_state from "./State_task/Class/Class_state";

import App_main from "./Routing_Task/Pages/App_main";

import Class_Life from "./Lifecycle/Class/Class_Life";
import Func_Life from "./Lifecycle/Function/Func_Life";


// ====================task==============================
import Func_component1 from "./Component_task/Func_component1";
import Class_component1 from "./Component_task/Class_component1";
import Jsx_component01 from "./JSX_task/Jsx_component01";
import Home1 from "./Layout_task/Page-1/Home1";
import About1 from "./Layout_task/Page-1/About1";
import Contact1 from "./Layout_task/Page-1/Contact1";

import Main_lazy from "./Lazy_suspense-task/Main_lazy";
import Main_app from "./Props_Drilling-task/Main_app";

import UseReducer from "./UseReducer-task/UseReducer";
import Useref from "./UseRef-task/Useref";
import UseContext_app from "./UseContext-task/UseContext_app";

//className="container md-5"
function App() {

  return (
    <div > 
      {
        // Component-task
       // <Func_component/>
       // <Class_component/>

       // JSX-task
       //<Jsx_component/>

       //layout-task
      // <Home/>
       //<About/>
       //<Contact/>

       // Props-task
       //<Main_props/>

        //css  & module css & sass css - task
        //<Css/>
        //<Module_css/>
       // <Sass_css/>

        // Bootstrap / React_Bootstrap
       // <Simple_bootstrap/>
       // <React_Bootstrap/>


       // Mui / styled component
       //<Mui_component/>
       //<Styled_component/>

       //state-task
       //<Func_state/>
       //<Class_state/>

       //Routing-Task, Router
       //<App_main/>

       //Lifecycle
       //<Class_Life/>
       //<Func_Life/>
//============================task=======================================================
       // component-repeat
       //<Func_component1/>
       //<Class_component1/>

       // Jsx-component-repeat
      // <Jsx_component01/>

      //Layout-repeat
      //<Home1/>
     // <About1/>
     //<Contact1/>

     //  Lazy_suspense-Loading
      // <Main_lazy/>

     // Props_Drilling   
      // <Main_app/>

      // useReducer
     // <UseReducer/>

     // useRef
     //<Useref/>

     // UseContext
     <UseContext_app/>




      }
    </div>
  );
}

export default App;
