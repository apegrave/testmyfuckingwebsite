// import React, { Component } from "react";
// import {
//     Route,
//     NavLink,
//     HashRouter
//   } from "react-router-dom";
// import art_01 from "./art_01";

// class Home extends Component {
//   render() {
//     return (
//         <HashRouter>
//             <div>
//                 <div id="container">
//                     <NavLink exact to="/"><div class="el"></div></NavLink>
//                     <NavLink to="/art_01"><div class="el"></div></NavLink>
//                     <div class="el"></div>
//                     <div class="el"></div>
//                     <div class="el"></div>
//                     <div class="el"></div>
//                     <div class="el"></div>
//                     <div class="el"></div>
//                     <div class="el"></div>
//                     <div class="el"></div>
//                     <div class="el"></div>
//                 </div>
//                 <div className="content">

//                 <Route exact path="/" component={Home}/>
//                 <Route path="/art_01" component={art_01}/>
                
//                 </div>
//             </div>
//         </HashRouter>
//     );
//   }
// }
 
// export default Home;

import React, { Component } from "react";
 
class Stuff extends Component {
  render() {
    return (
<div id="container">
                <div class="el"></div>
                     <a href="./#/art_01"><div class="el">asdad</div></a>
                     <div class="el"></div>
                     <div class="el"></div>
                     <div class="el"></div>
                     <div class="el"></div>
                     <div class="el"></div>
                     <div class="el"></div>
                     <div class="el"></div>
                 </div>
    );
  }
}
 
export default Stuff;