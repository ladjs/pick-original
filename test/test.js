const ObjectID = require('bson-objectid');
const test = require('ava');

const pickOriginal = require('..');

test('picks original', t => {
  t.deepEqual(
    pickOriginal(
      {
        foo: {
          boop: { baz: false },
          array: [0, 1, 2, 3, 4, 5, 6, 7, 8],
          arr: [
            {
              baz: true,
              bar: false,
              beep: {
                foo: [
                  1,
                  {
                    baz: 'foo'
                  },
                  3
                ]
              }
            }
          ]
        }
      },
      {
        foo: {
          array: [0, 1, 2, 3, 4],
          arr: [
            {
              baz: true,
              beep: {
                foo: [
                  1,
                  {
                    baz: 'foo'
                  }
                ]
              }
            }
          ]
        }
      }
    ),
    {
      foo: {
        array: [0, 1, 2, 3, 4],
        arr: [
          {
            baz: true,
            beep: {
              foo: [
                1,
                {
                  baz: 'foo'
                }
              ]
            }
          }
        ]
      }
    }
  );
});

test('works with mongodb objectid', t => {
  const _id = new ObjectID();
  t.deepEqual(
    pickOriginal(
      {
        _id
      },
      {
        _id
      }
    ),
    {
      _id
    }
  );
});
