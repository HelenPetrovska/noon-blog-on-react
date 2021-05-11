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
        modal:false,
        sliceFrom: 0,
        sliceTo: 6,
        mobileMenu: false,
        submenu: false
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

    toggleMobileMenu = () => {
        this.setState((prevState) => {
            return {
                mobileMenu: !prevState.mobileMenu
            }
        })
    }

    toggleSubmenu = () => {
        this.setState((prevState) => {
            return {
                submenu: !prevState.submenu
            }
        })
    }
    hideSubmenu = () => {
        this.setState((prevState) => {
            return {
                submenu:false
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
                    toggleMobileMenu={this.toggleMobileMenu}
                    toggleSubmenu={this.toggleSubmenu}
                    hideSubmenu={this.hideSubmenu}
                    mobileMenu={this.state.mobileMenu}
                    submenu={this.state.submenu}
                />
                <Main
                    category={this.state.category}
                    changeCategory={this.changeCategory}
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