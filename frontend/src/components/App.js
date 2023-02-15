class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      headline: 'React Application',
      isDisabled: false,
    };

    this.handleChangeHeadline = this.handleChangeHeadline.bind(this);
  }

  handleChangeHeadline() {
    this.setState({
      headline: 'NEW HEADLINE! 😃',
      isDisabled: true,
    });
  }

  render() {
    return (
      <div data-component="App">
        <h1>{this.state.headline}</h1>
        {/* React의 JSX(React 엘리먼트)에 연결한 이벤트 리스너(함수)는 언제 실행되는가? */}
        <button 
          disabled={this.state.isDisabled}
          type="button" 
          onClick={this.handleChangeHeadline}>
          헤드라인 업데이트
        </button>
      </div>
    );
  }
}

export default App;