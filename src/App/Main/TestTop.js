import react, { Component } from 'react'
import { Link } from 'react-router-dom'

class TestTop extends Component {
    state = {
        fv:false
    }

    changeFv = () => {
        this.setState((prevState) => ({
            fv: !prevState.fv
        }))
    }

    render() {
        const {
            id,
            postImg,
            postTitle,
            post_Title,
            postDescription,
            authorImg,
            authorName,
            postDate
        }=this.props

        return (
            <div className="post-top">
                <div className="post-image">
                    <Link to={`/post/${post_Title}`} className="post-image-link">
                        <img src={postImg} alt="post-img" className="post-img"/>
                    </Link>
                </div>
                <div className="categorie-favorit">
                    <button className="favorite-btn" onClick={() => this.changeFv()}>
                    {this.state.fv ? <span className="liked"></span> : <span className="noliked"></span>} 

                    </button>
                </div>
                <h4 className="post-title">{postTitle}</h4>
                <p className="post-description">{postDescription}</p>
                <div className="post-info">
                    <div className="author">
                        <Link to="/author" className="author-link"><img src={authorImg} alt="author-img" className="author-img"/></Link>
                    </div>
                    <div className="author-name">
                        <Link to="/author" className="author-name-link">{authorName}</Link>
                    </div>
                    <div className="dot"></div>
                    <div>
                        <p className="post-date">{postDate}</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default TestTop