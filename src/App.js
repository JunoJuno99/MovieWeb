import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Detail from "./routes/Detail";
import Home from "./routes/Home";

function App() {
  return (
    <Router> {/* 라우팅을 하겠다는 의미 */}
      <Switch> {/* 한번에 하나의 라우터만 렌더링하기 위함 -> 사용하지 않을 시, 다수의 라우터를 동시에 렌더링 가능 */}
        <Route path="/movie/:id"> {/* ':'을 쓰면 ':id'가 1,2,3,4 등등 개발자가 원하는 값(변수)이 될 수 있다 */}
          <Detail />
        </Route>
        <Route path="/"> {/* 라우트 = 유저가 접근하는 url이며, 해당 url(path)로 접근시 보여줄 내용을 라우트 컴포넌트 내부에 담는다 */}
         <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
