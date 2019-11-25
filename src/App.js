import React, {Component} from 'react';
import './App.css';
import axios from "axios"
import './loadoutselect'
import LoadoutSelect from './loadoutselect';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      char: '',
      kinetic: 'Select Kinetic',
      energy: 'Select Energy',
      heavy: 'Select Heavy',
      userInput: '',
      charClass: 'Select Class',
      equip: 'Equip',
      kineticArr: [],
      energyArr: [],
      heavyArr: [],
      loadouts: []
    };

    this.chooseClass = this.chooseClass.bind(this)
    this.getKinetic = this.getKinetic.bind(this)
    this.chooseK = this.chooseK.bind(this)
    this.createLoadout = this.createLoadout.bind(this)
    this.getEnergy = this.getEnergy.bind(this)
    this.chooseE = this.chooseE.bind(this)
    this.getHeavy = this.getHeavy.bind(this)
    this.chooseH = this.chooseH.bind(this)
    this.equip = this.equip.bind(this)
  }

  chooseClass(event) {
    this.setState({char: event.target.value})
    this.setState({charClass: event.target.value})
    this.setState({
      toggleMenu: !this.state.toggleMenu
    })
  }

  handleToggle = () => {
    this.setState({
      toggleMenu: !this.state.toggleMenu
    })
  }

  getKinetic = () => { axios.get('http://localhost:4000/api/kinetic').then( response => {
      this.setState({
        kineticArr: response.data
      })
      this.setState({
        getKinetic: !this.state.getKinetic
      })
    });
  }

  chooseK(event) {
    this.setState({kinetic: event.target.value})
    this.setState({
      getKinetic: !this.state.getKinetic
    })
  }

  getEnergy = () => { axios.get('http://localhost:4000/api/energy').then( response => {
      this.setState({
        energyArr: response.data
      })
      this.setState({
        getEnergy: !this.state.getEnergy
      })
    });
  }

  chooseE(event) {
    this.setState({energy: event.target.value})
    this.setState({
      getEnergy: !this.state.getEnergy
    })
  }

  getHeavy = () => { axios.get('http://localhost:4000/api/heavy').then( response => {
      this.setState({
        heavyArr: response.data
      })
      this.setState({
        getHeavy: !this.state.getHeavy
      })
    })
    .catch(console.log(
      'Error Message'
    ))
  }

  chooseH(event) {
    this.setState({heavy: event.target.value})
    this.setState({
      getHeavy: !this.state.getHeavy
    })
  }

  equip(event){
    this.setState({equip: 'Equipped'})
  }

  createLoadout(event) {
    const {name, char, kinetic, energy, heavy} = this.state;

    axios.post( 'http://localhost:4000/api/loadouts', {name, char, kinetic, energy, heavy} ).then(response => {
      this.setState({ loadouts: response.data });
    })
    .catch(console.log(
      'Error Message'
    ))
  }

  render(){
    
    console.log(this.state.kineticArr)
    return (
      <div className="App">
        <header className="app-header">
          <section id='spacing-div'></section>
          <section id='siva'>SIVA</section>
          <section>
            <img id='image' src='https://i.ya-webdesign.com/images/destiny-siva-logo-png.png' />
          </section>
          <section id='sign-in-section'>
            <button id='sign-in'>Sign-in</button>
          </section>
        </header>
        <body>
          <div id='current-loadout'>

                {!this.state.toggleMenu ?
                null
                  :
                  <nav id='menu'>
                    <option id='menu-item' value='Hunter'  onClick={this.chooseClass}>Hunter</option>
                    <option id='menu-item' value='Titan'   onClick={this.chooseClass}>Titan</option>
                    <option id='menu-item' value='Warlock' onClick={this.chooseClass}>Warlock</option>
                  </nav>
                }

                {!this.state.getKinetic ?
                null
                  :
                  <nav id='k-menu'>
                    <option id='menu-item' value={this.state.kineticArr[0].name} onClick={this.chooseK}>{this.state.kineticArr[0].name}</option>
                    <option id='menu-item' value={this.state.kineticArr[1].name} onClick={this.chooseK}>{this.state.kineticArr[1].name}</option>
                    <option id='menu-item' value={this.state.kineticArr[2].name} onClick={this.chooseK}>{this.state.kineticArr[2].name}</option>
                    <option id='menu-item' value={this.state.kineticArr[3].name} onClick={this.chooseK}>{this.state.kineticArr[3].name}</option>
                    <option id='menu-item' value={this.state.kineticArr[4].name} onClick={this.chooseK}>{this.state.kineticArr[4].name}</option>
                    <option id='menu-item' value={this.state.kineticArr[5].name} onClick={this.chooseK}>{this.state.kineticArr[5].name}</option>
                    <option id='menu-item' value={this.state.kineticArr[6].name} onClick={this.chooseK}>{this.state.kineticArr[6].name}</option>
                    <option id='menu-item' value={this.state.kineticArr[7].name} onClick={this.chooseK}>{this.state.kineticArr[7].name}</option>
                    <option id='menu-item' value={this.state.kineticArr[8].name} onClick={this.chooseK}>{this.state.kineticArr[8].name}</option>
                    <option id='menu-item' value={this.state.kineticArr[9].name} onClick={this.chooseK}>{this.state.kineticArr[9].name}</option>
                    <option id='menu-item' value={this.state.kineticArr[10].name} onClick={this.chooseK}>{this.state.kineticArr[10].name}</option>
                </nav>}

                {!this.state.getEnergy ?
                null
                  :
                  <nav id='e-menu'>
                    <option id='menu-item' value={this.state.energyArr[0].name} onClick={this.chooseE}>{this.state.energyArr[0].name}</option>
                    <option id='menu-item' value={this.state.energyArr[1].name} onClick={this.chooseE}>{this.state.energyArr[1].name}</option>
                    <option id='menu-item' value={this.state.energyArr[2].name} onClick={this.chooseE}>{this.state.energyArr[2].name}</option>
                    <option id='menu-item' value={this.state.energyArr[3].name} onClick={this.chooseE}>{this.state.energyArr[3].name}</option>
                    <option id='menu-item' value={this.state.energyArr[4].name} onClick={this.chooseE}>{this.state.energyArr[4].name}</option>
                    <option id='menu-item' value={this.state.energyArr[5].name} onClick={this.chooseE}>{this.state.energyArr[5].name}</option>
                    <option id='menu-item' value={this.state.energyArr[6].name} onClick={this.chooseE}>{this.state.energyArr[6].name}</option>
                    <option id='menu-item' value={this.state.energyArr[7].name} onClick={this.chooseE}>{this.state.energyArr[7].name}</option>
                    <option id='menu-item' value={this.state.energyArr[8].name} onClick={this.chooseE}>{this.state.energyArr[8].name}</option>
                    <option id='menu-item' value={this.state.energyArr[9].name} onClick={this.chooseE}>{this.state.energyArr[9].name}</option>
                </nav>}

                {!this.state.getHeavy ?
                null
                  :
                  <nav id='e-menu'>
                    <option id='menu-item' value={this.state.heavyArr[0].name} onClick={this.chooseH}>{this.state.heavyArr[0].name}</option>
                    <option id='menu-item' value={this.state.heavyArr[1].name} onClick={this.chooseH}>{this.state.heavyArr[1].name}</option>
                    <option id='menu-item' value={this.state.heavyArr[2].name} onClick={this.chooseH}>{this.state.heavyArr[2].name}</option>
                    <option id='menu-item' value={this.state.heavyArr[3].name} onClick={this.chooseH}>{this.state.heavyArr[3].name}</option>
                    <option id='menu-item' value={this.state.heavyArr[4].name} onClick={this.chooseH}>{this.state.heavyArr[4].name}</option>
                    <option id='menu-item' value={this.state.heavyArr[5].name} onClick={this.chooseH}>{this.state.heavyArr[5].name}</option>
                    <option id='menu-item' value={this.state.heavyArr[6].name} onClick={this.chooseH}>{this.state.heavyArr[6].name}</option>
                </nav>}

            <div id='internal-div'>
            
              <section id='loadout'>
                <output id='class-selector' onClick={this.handleToggle} >{this.state.charClass}</output>
                <output id='weapon-slot' onClick={this.getKinetic}>{this.state.kinetic}</output>
                <output id='weapon-slot' onClick={this.getEnergy}>{this.state.energy}</output>
                <output id='weapon-slot' onClick={this.getHeavy}>{this.state.heavy}</output>
              </section>
              <div id='btns-div'>
                  <section id='btn-section'>
                    <button id='equip-button' onClick={this.equip}>{this.state.equip}</button>
                  </section>
                  <section id='btn-section'>
                    <button id='loadout-button' onClick={this.createLoadout}>Save</button>
                  </section>
              </div>
            </div>
          </div>
          <div id='loadout-select'>
            <LoadoutSelect />
          </div>
        </body>
      </div>
    );
  }
}

export default App;
