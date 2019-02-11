import React from 'react'


class BoredGenerator extends React.Component {
    constructor() {
        super()
        this.state = {
          bored: {}
        }
        this.handleClick = this.handleClick.bind(this)
    }
    
    // componentDidMount() {11
    //     this.setState({loading: true})
    //     fetch("http://www.boredapi.com/api/activity/")
    //         .then(response => response.json())
    //         .then(data => {
    //             this.setState({
    //                 loading: false,
    //                 bored: data
    //             })
    //         })
    // }

    handleClick() {
        fetch("http://www.boredapi.com/api/activity/")
            .then(response => response.json())
            .then(data => {
                this.setState({
                    bored: data
                })
            })
    }

    render() {   

        return (            
            <div className="container">
                <div className="col-sm-12">
                    <h1>{this.state.bored.activity ? this.state.bored.activity : "Aren't you bored?"}</h1>
                </div>
                <div className="col-sm-12 pt-5">
                    <button onClick={this.handleClick} className="btn btn-dark">I AM BORED</button>
                </div>
            </div>
            
        )
    }
}

export default BoredGenerator