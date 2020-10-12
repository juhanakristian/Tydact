import Tydact from './tydact'

/**@jsx Tydact.createElement */
function App(props) {
  return <h1>Hi {props.name}</h1>
}

const element = <App name="foo" />
const container = document.getElementById('root')
Tydact.render(element, container)
