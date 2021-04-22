import React, { Component } from 'react'
import { omit } from 'lodash'

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
        inFavorites: {},
        inFavoritesPage:{},
        modal:false,
        sliceFrom: 0,
        sliceTo: 6
    }

    changeCategory = ((name) => {
        this.setState({category: name})
    })

    changeSlice = ((from, to) => {
        this.setState({
            sliceFrom:from,
            sliceTo:to
        })
    })

    toggleModal = () => {
        this.setState((prevState) => {
            return {
                modal: !prevState.modal
            }
        })
    }

    toggleFavorite = (postId) => {
        this.setState(prevState => ({
            inFavorites: {
                ...prevState.inFavorites,
                [postId]: !prevState.inFavorites[postId]
            }
        }))
    }

    addToFavoritesPage = (postId) => {
        this.setState((prevState) => ({
            inFavoritesPage: {
                ...prevState.inFavoritesPage,
                [postId]:[postId]
            }
        }))
    }

    removeFromFavoritesPage = (postId) => {
        this.setState((prevState) => ({
            inFavoritesPage:omit(prevState.inFavoritesPage,[postId])
        }))
    }


    render () {
        return (
            <>
                <Header
                    category={this.state.category}
                    changeCategory={this.changeCategory}
                    toggleModal={this.toggleModal}
                    modal={this.state.modal}
                    inFavoritesPage={this.state.inFavoritesPage}
                />
                <Main
                    category={this.state.category}
                    changeCategory={this.changeCategory}
                    toggleFavorite={this.toggleFavorite}
                    inFavorites={this.state.inFavorites}
                    addToFavoritesPage={this.addToFavoritesPage}
                    removeFromFavoritesPage = {this.removeFromFavoritesPage}
                    inFavoritesPage={this.state.inFavoritesPage}
                    changeSlice={this.changeSlice}
                    sliceTo={this.state.sliceTo}
                    sliceFrom={this.state.sliceFrom}
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