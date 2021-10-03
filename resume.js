const e = React.createElement;

class Resume extends React.Component {
  constructor(props) {
    super(props);
    this.state = { newResume: false };
  }

  render() {
    if (this.state.newResume) {
      return 'You liked this.';
    }

    return e(
      'button',
      { onClick: () => this.setState({ newResume: true }) },
      'Resume'
    );
  }
}
const domContainer = document.querySelector('#newResume');
ReactDOM.render(e(LikeButton), domContainer);