import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Portal } from './components/Portal'
declare let module: any

ReactDOM.render(
    // react dom renders the body of the page aka 'root'
    <Portal />,
    document.getElementById('root')
)

if (module.hot) {
    module.hot.accept()
}
