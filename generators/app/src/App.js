require('common/main.sass');

var versionInfo = (__DEV__ ? `v${require("../package.json").version}` : "");

// App
let App = React.createClass({
  getInitialState:() => ({
    loaded: false,
  }),
  componentDidMount(){
    this.setState({loaded:true});
    console.log('loaded')
  },
  render(){
    var activeRouteName = this.props.location.pathname || '/';
    let start = (!this.state.loaded ? 1 : 0);
    return (
      <div className='app'>
        <div style={{display: 'block', height: '100%'}}>
          {this.props.children}
        </div>
      </div>
    );
  }
});

module.exports = App;
