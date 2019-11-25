import React, {Component} from 'react';
import './App.css';
import axios from "axios"
import './App.js'

export default class LoadoutSelect extends Component {
    constructor(props) {
        super(props)
        this.state = {
            char: '',
            kinetic: '',
            energy: '',
            heavy: '',
            userInput: '',
            charClass: 'Select Class',
            equip: 'Equip',
            kineticArr: [],
            energyArr: [],
            heavyArr: [],
            loadouts: []
        }
        this.editLoadout = this.editLoadout.bind(this)
        this.deleteLoadout = this.deleteLoadout.bind(this)
        this.handleToggle = this.handleToggle.bind(this)
        this.changeClass = this.changeClass.bind(this)
        this.getKinetic = this.getKinetic.bind(this)
        this.chooseK = this.chooseK.bind(this)
        this.getEnergy = this.getEnergy.bind(this)
        this.chooseE = this.chooseE.bind(this)
        this.getHeavy = this.getHeavy.bind(this)
        this.chooseH = this.chooseH.bind(this)
        this.equip = this.equip.bind(this)
    }

    changeClass(event) {
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
    });
    }

    chooseH(event) {
        this.setState({heavy: event.target.value})
        this.setState({
          getHeavy: !this.state.getHeavy
        })
    }

    deleteLoadout(id){
        axios.delete(`http://localhost:4000/api/loadouts/${id}` ).then( response => {
            this.setState({ messages: response.data });
        });
    }

    editLoadout(id){
        var{char, kinetic, energy, heavy} = this.state

        axios.put( `http://localhost:4000/api/loadouts/${id}`, {id, char, kinetic, energy, heavy } ).then( response => {
            this.setState({ loadouts: response.data });
        });
    }

    equip(event){
        this.setState({equip: 'Equipped'})
    }

    componentDidMount(){
        console.log('this is loading')
        axios.get('http://localhost:4000/api/loadouts').then(response => {
            this.setState({
                loadouts: response.data
            })
        })
    }

    render(){
        let loadoutChar = this.state.loadouts.map(obj => obj.char)
        let loadoutKin = this.state.loadouts.map(obj => obj.kinetic)
        let loadoutEn = this.state.loadouts.map(obj => obj.energy)
        let loadoutHe = this.state.loadouts.map(obj => obj.heavy)
        
        return(
            <div id='lower-div'>

                {!this.state.toggleMenu ?
                null
                  :
                  <nav id='menu'>
                    <option id='menu-item' value='Hunter'  onClick={this.changeClass}>Hunter</option>
                    <option id='menu-item' value='Titan'   onClick={this.changeClass}>Titan</option>
                    <option id='menu-item' value='Warlock' onClick={this.changeClass}>Warlock</option>
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

                <section id='lower-loadout'>
                    <section id='loadout'>
                        <output id='char-class' onClick={this.handleToggle}>{loadoutChar[0]}</output>
                        <output id='weapon-slot' onClick={this.getKinetic}>{loadoutKin[0]}</output>
                        <output id='weapon-slot' onClick={this.getEnergy}>{loadoutEn[0]}</output>
                        <output id='weapon-slot' onClick={this.getHeavy}>{loadoutHe[0]}</output>
                    </section>
                    <div id='btns-div'>
                        <section id='btn-section'>
                            <button id='equip-button' onClick={this.equip}>{this.state.equip}</button>
                        </section>
                        <section id='btn-section'>
                            <button id='loadout-button' onClick={() => this.editLoadout(this.state.loadouts[0].id)}>Save</button>
                        </section>
                        <section id='btn-section'>
                            <button id='loadout-button' onClick={this.deleteLoadout}>Delete</button>
                        </section>
                    </div>
                </section>

                <section id='lower-loadout'>
                    <section id='loadout'>
                        <output id='char-class' onClick={this.handleToggle}>{loadoutChar[1]}</output>
                        <output id='weapon-slot' onClick={this.getKinetic}>{loadoutKin[1]}</output>
                        <output id='weapon-slot' onClick={this.getEnergy}>{loadoutEn[1]}</output>
                        <output id='weapon-slot' onClick={this.getHeavy}>{loadoutHe[1]}</output>
                    </section>
                    <div id='btns-div'>
                        <section id='btn-section'>
                            <button id='equip-button' onClick={this.equip}>{this.state.equip}</button>
                        </section>
                        <section id='btn-section'>
                            <button id='loadout-button' onClick={() => this.editLoadout(this.state.loadouts[1].id)}>Save</button>
                        </section>
                        <section id='btn-section'>
                            <button id='loadout-button' onClick={this.deleteLoadout}>Delete</button>
                        </section>
                    </div>
                </section>

                <section id='lower-loadout'>
                    <section id='loadout'>
                    <output id='char-class' onClick={this.handleToggle}>{loadoutChar[2]}</output>
                        <output id='weapon-slot' onClick={this.getKinetic}>{loadoutKin[2]}</output>
                        <output id='weapon-slot' onClick={this.getEnergy}>{loadoutEn[2]}</output>
                        <output id='weapon-slot' onClick={this.getHeavy}>{loadoutHe[2]}</output>
                    </section>
                    <div id='btns-div'>
                        <section id='btn-section'>
                            <button id='equip-button' onClick={this.equip}>{this.state.equip}</button>
                        </section>
                        <section id='btn-section'>
                            <button id='loadout-button' onClick={() => this.editLoadout(this.state.loadouts[2].id)}>Save</button>
                        </section>
                        <section id='btn-section'>
                            <button id='loadout-button' onClick={this.deleteLoadout}>Delete</button>
                        </section>
                    </div>
                </section>
            </div>
        );
    }
}
