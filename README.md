# Movie App 2024

#### React JS Fundamentals Course 2024

> 스프링을 공부하다가 분위기 전환 겸 관심가던 리액트 앱 클론코딩을 진행했습니다. 
> 2020년도가 기준인 강의 내용이기에 예제 코드를 일부 수정해서 진행한 부분이 있습니다.

###### 2024년 7월 기준의 React Router v6 사용.
1. **App.js**에서 Route 컴포넌트는 Routes의 자식 컴포넌트로 사용해야 합니다. Route 컴포넌트를 단일로 쓰려고 하면 에러가 발생합니다.
2. **Movie.js**에서 Link 컴포넌트로 props 를 전달하는 양식을 변경했습니다. 
 기존  `<Link to={{ pathname: ‘/movie-detail’, state: { year, title, summary, poster, genres }, }} >` 
변경 `<Link to='/movie-detail' state={{year:year, title:title, summary:summary, poster:poster, genres:genres}} >` 
변경 이유: 기존 코드를 사용할 경우, state가 정상적으로 전달되지 않습니다. 
3. **Detail.js**에서 리다이렉트 기능을 history가 아닌, useNavigation을 사용하여 구현하였습니다. 조건은 state가 undefined인 경우는 이전과 동일합니다. React 클래스 컴포넌트가 아닌, 함수형 컴포넌트 형태로 구현했습니다. 따라서 생명주기 메서드인 componentDidMount() 는 사용하지 않습니다.
