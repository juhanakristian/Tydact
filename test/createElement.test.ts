import TypedReact from '../tydact'

describe('createElement', () => {
  test('returns correct object on simple div', () => {
    const result = TypedReact.createElement('div')

    expect(result).toMatchInlineSnapshot(`
      Object {
        "props": Object {
          "children": Array [],
        },
        "type": "div",
      }
    `)
  })

  test('returns correct object on div with child', () => {
    const a = TypedReact.createElement('div')
    const result = TypedReact.createElement('div', null, a)

    expect(result).toMatchInlineSnapshot(`
      Object {
        "props": Object {
          "children": Array [
            Object {
              "props": Object {
                "children": Array [],
              },
              "type": "div",
            },
          ],
        },
        "type": "div",
      }
    `)
  })

  test('returns correct object with text child', () => {
    const result = TypedReact.createElement('div', null, 'Hello')
    expect(result).toMatchInlineSnapshot(`
      Object {
        "props": Object {
          "children": Array [
            Object {
              "props": Object {
                "children": Array [],
                "nodeValue": "Hello",
              },
              "type": "TEXT_ELEMENT",
            },
          ],
        },
        "type": "div",
      }
    `)
  })
})
