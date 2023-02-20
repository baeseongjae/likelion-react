import { useState } from 'react';

function Counter(props){
  // 함수 안에 지역 변수 선언
  // let count = 1; //리액트는 지역변수값 바뀐다고 업데이트❌

  // React Hook
  // 상태 관리 React.useState();
  // 객체 { prop1, prop2 }
  // 배열 [ state, setState ]

  let [ count, setCount ] = useState(props.count);

  // 함수 안에 이벤트 청취 함수를 작성합니다.
  const handleIncrement = () => {
    console.log('증가')
    setCount(count+props.step);

  }
  const handleDecrement = () => {
    console.log('감소')
    setCount(count-props.step);
  }
  

  return(
    <div className="Counter">
      <button type="button" onClick={handleIncrement}>+</button>
      <output>{count}</output>
      <button type="button" onClick={handleDecrement}>-</button>
    </div>
  )
}

// 클래스 방식에서의 static 멤버처럼 사용되는 것.
Counter.defaultProps = {
  count: 1,
  min: 1,
  max: 10,
  step: 1,
}

export default Counter;