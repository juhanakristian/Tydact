import Tydact from 'tydact'

/**@jsx Tydact.createElement */
function App(props) {
  return <div>Hi {props.name}</div>
}

const element = <App name="foo" />
const container = document.getElementById('root')
Tydact.render(element, container)
