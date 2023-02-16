import LogIn from './pages/LogIn.js';
import Browse from './pages/Browse.js';
import Home from './pages/Home.js';

// import { likeLionMembers } from './data/likeLionMembers.js';

class App extends React.Component {

  // 2022 6. 표준 기술
  // public, private 클래스 필드, 피처

  // 조건부 렌더링 (CSR) vs. 조건부 표시 (CSS : display, visibility, overflow, opacity)
  // React (JavaScript) vs. Vue (directives: v-if, v-show)

  // 선언형
  // React 처럼 생각하기
  
  state = {
    headline: 'React Application',
    // isDisabled: false;
    isPaid: true,
    isToggle: false,
    isLoading: !true,
    hasError: null,
    // likeLionMembers
  };

  // 클래스에서는 이렇게 기억할 수 있는 임의의 데이터를 관리할 수 있다.
  // 그럼 함수는? 못한다. React Hooks (useRef)
  // 메모이제이션 패턴

  originalHeadline = this.state.headline;
  willUpdateHeadline = 'NEW HEADLINE! 😎';

  unknown = null;

  handleChangeHeadline = () => {

    // const { hasError: error } = this.state;

    // 1. 문
    // if (error === null || error === undefined) {
    //   console.log('현재 앱에는 오류(error)가 발생하지 않았습니다.');
    // }

    // 2. 터너리
    // (error === null || error === undefined) ? 
    //   console.log('현재 앱에는 오류(error)가 발생하지 않았습니다.') : 
    //   null;

    // 3. null 병합 연산자
    // error ?? console.log('현재 앱에는 오류(error)가 발생하지 않았습니다.');

    // 옵셔널 체이닝을 사용해 조건 처리해봅니다.
    // if (error) {
    //   if (typeof error.log === 'function') {
    //     error.log();
    //   }
    // }


    // error && typeof error.log === 'function' && error.log();

    // let error = {
    //   log() {
    //     console.log('this is logger')
    //   }
    // }

    // error.log?.();

    // 조건 처리
    // 문을 사용할 것인가?

    if(this.state.isToggle){
      this.setState({
        isToggle: false,
        headline: this.originalHeadline
      });
    } else{
      this.setState({
        isToggle: true,
        headline: this.willUpdateHeadline
      });
    }

    // 아니면 식을 사용할 것인가?

    // this.setState({
    //   headline: 'NEW HEADLINE! 😃',
    //   isDisabled: true,
    // });
    
  }

  render() {
    console.log(this);
    const {
      isLoading,
      isToggle, 
      isPaid, 
      headline,
      hasError,
      likeLionMembers
    } = this.state;

    if (isLoading) {
      return <div role="alert">데이터 로딩 중...</div> 
    }

    if(hasError){
      return <div role="alert">{hasError.message}</div>
    }

    return <Home />;
    

    return (
      <div className="App">
        <h1>{headline}</h1>
        <button 
          // disabled={this.state.isDisabled}
          type="button" 
          onClick={this.handleChangeHeadline}
        >
          { isToggle ? '오리지널 헤드라인으로 변경' : '뉴 헤드라인으로 변경'}
        </button>

        <LogIn />

        {/* 조건부 렌더링 (화면에 그리지 않음: 민감, 보안, 결제 등 요구) */}  
        { isPaid && <Browse /> }

      </div>
    );
  }
}

export default App;