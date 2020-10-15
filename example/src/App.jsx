import Tydact from 'tydact'

/**@jsx Tydact.createElement */
function App(props) {
  return <div>Hi {props.name}</div>
}

const element = <App name="foo" />
// eslint-disable-next-line no-undef
const container = document.getElementById('root')
console.log({document})
Tydact.render(element, container)
