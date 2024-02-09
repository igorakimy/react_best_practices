import {render} from "react-dom";
import {Counter} from "./components/Counter";

import './components/Counter.scss'

render(
    <div>
        <Counter />
    </div>,
    document.getElementById('root'),
)