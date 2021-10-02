class newResume extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            name: "Jeff",
            appVersion: ""
        }
    }
    render(){
        return(
            <div>
            <h2>Hi I'm {this.state.name} Lynch</h2>
            <button>Click Link</button>
            </div>
        )
    }
}