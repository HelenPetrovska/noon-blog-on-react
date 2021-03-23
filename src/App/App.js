import React, { Component } from 'react'

import "../common/style/reset.css"
import "../common/style/base.css"

import Header from './Header/Header'
import Main from './Main/Main'
import Subscribe from './Subscribe/Subscribe'
import Footer from './Footer/Footer'


class App extends Component {

    state = {
        category: 'travel'
    }

    changeCategory = ((name) => {
        this.setState({category: name})
    })

    render () {
        return (
            <>
                <Header
                    category={this.state.category}
                    changeCategory={this.changeCategory}
                />
                <Main
                    category={this.state.category}
                    changeCategory={this.changeCategory}
                />
                <Subscribe/>
                <Footer/>
            </>
        )
    }
    
}

export default App