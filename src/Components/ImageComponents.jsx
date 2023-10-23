import { Component } from "react"

class Image extends Component {
    render(){
    return(
        <img src={this.props.Immagine} alt={this.props.Immagine} />
    )
}
}
export default Image