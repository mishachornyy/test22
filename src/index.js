import React from "react";
import ReactDom from "react-dom";
import SessonDisplay from "./SessonDisplay";
import Spinner from "./Spinner";


class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = { lat: null, errorMessage: '' }


    }
     componentDidMount() {
         window.navigator.geolocation.getCurrentPosition(
             position => this.setState({ lat: position.coords.latitude }),
             err => this.setState({errorMessage: err.message})
         )
     }
    renderContent () {
        if (this.state.errorMessage && !this.state.lat ) {
            return <div>Erro: {this.state.errorMessage}</div>;
        }
        if (!this.state.errorMessage && this.state.lat ) {
            return <SessonDisplay lat={this.state.lat} />
        }
        return <Spinner  />;
}

    render() {
        return (
            <div className="border red">
                {this.renderContent()}
            </div>
        )
     }
}

ReactDom.render(
 <App />,
    document.querySelector('#root')
);