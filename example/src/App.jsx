import Tydact from 'tydact'

/**@jsx Tydact.createElement */
function Counter() {
  const [state, setState] = Tydact.useState(1)
  return <h1 onClick={() => setState(c => c + 1)}>Count: {state}</h1>
}

const element = <Counter />
// eslint-disable-next-line no-undef
const container = document.getElementById('root')
Tydact.render(element, container)
