import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Hello } from './components/Hello'
declare let module: any

ReactDOM.render(
    // react dom renders the body of the page aka 'root'
    <Hello compiler="Typescript" framework="React" bundler="Webpack" />,
    document.getElementById('root')
)

if (module.hot) {
    module.hot.accept()
}
