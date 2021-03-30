import React, { Component } from 'react'

import "../common/style/reset.css"
import "../common/style/base.css"

import Header from './Header/Header'
import Main from './Main/Main'
import Subscribe from './Subscribe/Subscribe'
import Footer from './Footer/Footer'
import SearchModal from './SearchModal/SearchModal'


class App extends Component {

    state = {
        category: 'travel',
        inFavorites: false,
        modal:false
    }

    changeCategory = ((name) => {
        this.setState({category: name})
    })

    toggleModal = () => {
        this.setState((prevState) => {
            return {
                modal: !prevState.modal
            }
        })
    }

    addFavorite = () => {
        this.setState((prevState) => {
            return {
                inFavorites: !prevState.inFavorites
            }
        })
    }

    render () {
        return (
            <>
                <Header
                    category={this.state.category}
                    changeCategory={this.changeCategory}
                    toggleModal={this.toggleModal}
                    modal={this.state.modal}
                />
                <Main
                    category={this.state.category}
                    changeCategory={this.changeCategory}
                    addFavorite={this.addFavorite}
                    inFavorites={this.state.inFavorites}
                />
                <Subscribe/>
                <Footer/>
                <SearchModal 
                    toggleModal={this.toggleModal}
                    modal={this.state.modal}
                />
            </>
        )
    }
    
}

export default App