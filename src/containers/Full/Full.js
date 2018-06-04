import React, {Component} from 'react';
import {Link, Switch, Route, Redirect} from 'react-router-dom';
import {Container} from 'reactstrap';
import Header from '../../components/Header/';
import Sidebar from '../../components/Sidebar/';
import Breadcrumb from '../../components/Breadcrumb/';
import Aside from '../../components/Aside/';
import Footer from '../../components/Footer/';

//MIT
import Dashboard from '../../views/Dashboard/';
import Cards from '../../views/Components/Cards/';
import Lecture6009 from '../../views/6.009/Lecture';
import Tutorial6009 from '../../views/6.009/Tutorial';
import Lecture3091 from '../../views/3.091/Lecture';
import Recitation3091 from '../../views/3.091/Recitation';
import Crib3091 from '../../views/3.091/Crib';
import Lecture6006 from '../../views/6.006/Lecture';
import Recitation6006 from '../../views/6.006/Recitation';

import Crib6006 from '../../views/6.006/Crib';
  import Crib6006_Final from '../../views/6.006/CribFinal';
  import Crib6006_Q1 from '../../views/6.006/CribQuiz1';
  import Crib6006_Q2 from '../../views/6.006/CribQuiz2';


import Textbook6042 from '../../views/6.042/Textbook';
import Pset6042 from '../../views/6.042/Pset';
import Crib6042 from '../../views/6.042/Crib';
import Lecture608 from '../../views/6.08/Lecture';
import Crib608 from '../../views/6.08/Crib';
import Lecture7012 from '../../views/7.012/Lecture';
import Recitation7012 from '../../views/7.012/Recitation';
import Pset7012 from '../../views/7.012/Pset';
import Lecture1470 from '../../views/14.70/Lecture';

// BGHS
import APPhysics1 from '../../views/APPhysics1';
import APPhysicsC from '../../views/APPhysicsC';
import APEcon from '../../views/APEcon';
import APCalcBC from '../../views/APCalcBC';
import Calc3 from '../../views/Calc3';
import DiffEq from '../../views/DiffEq';

class Full extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <div className="app-body">
          <Sidebar {...this.props}/>
          <main className="main">
            <Breadcrumb />
            <Container fluid>
              <Switch>
                <Route path="/dashboard" name="Dashboard" component={Dashboard}/>
                <Route path="/components/cards" name="Cards" component={Cards}/>
                <Route path="/6.009/Lecture" name="Lecture" component={Lecture6009}/>
                <Route path="/6.009/Tutorial" name="Tutorial" component={Tutorial6009}/>
                <Route path="/3.091/Lecture" name="Lecture" component={Lecture3091}/>
                <Route path="/3.091/Recitation" name="Recitation" component={Recitation3091}/>
                <Route path="/3.091/Crib" name="Crib" component={Crib3091}/>
                <Route path="/6.006/Lecture" name="Lecture" component={Lecture6006}/>
                <Route path="/6.006/Recitation" name="Recitation" component={Recitation6006}/>
                <Route path="/6.006/Crib" name="Crib" component={Crib6006}/>
                <Route path="/6.042/Textbook" name="Textbook" component={Textbook6042}/>
                <Route path="/6.042/Pset" name="Pset" component={Pset6042}/>
                <Route path="/6.042/Crib" name="Crib" component={Crib6042}/>
                <Route path="/6.08/Lecture" name="Lecture" component={Lecture608}/>
                <Route path="/6.08/Crib" name="Crib" component={Crib608}/>
                <Route path="/7.012/Lecture" name="Lecture" component={Lecture7012}/>
                <Route path="/7.012/Recitation" name="Recitation" component={Recitation7012}/>
                <Route path="/7.012/Pset" name="Pset" component={Pset7012}/>
                <Route path="/14.70/Lecture" name="Lecture" component={Lecture1470}/>
                <Route path="/APPhysics1" name="APPhysics1" component={APPhysics1}/>
                <Route path="/APPhysicsC" name="APPhysicsC" component={APPhysicsC}/>
                <Route path="/APEcon" name="APEcon" component={APEcon}/>
                <Route path="/APCalcBC" name="APCalcBC" component={APCalcBC}/>
                <Route path="/Calc3" name="Calc3" component={Calc3}/>
                <Route path="/DiffEq" name="DiffEq" component={DiffEq}/>

                <Route path="/6.006/CribFinal" component={Crib6006_Final}/>
                <Route path="/6.006/CribQuiz1" component={Crib6006_Q1}/>
                <Route path="/6.006/CribQuiz2" component={Crib6006_Q2}/>

                <Redirect from="/" to="/dashboard"/>
              </Switch>
            </Container>
          </main>
          <Aside />
        </div>
        <Footer />
      </div>
    );
  }
}

export default Full;



                
                
