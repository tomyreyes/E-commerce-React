const totalPrice = require('../units/totalPrice')

it('Base price', ()=>{
  expect(totalPrice({
      cart: [
        {
          name: 'Chateau Palmer Margaux 2016',
          price: 4000,
          picture: '../images/chateau_palmer_1.jpg',
          type: 'Bordeaux'
        },
        {
          name: 'Chateau Palmer Margaux 2016',
          price: 4000,
          picture: '../images/chateau_palmer_1.jpg',
          type: 'Bordeaux'
        }
      ]
    })).toBe(8000)
})

it('Shipping', ()=>{
  expect(totalPrice({
      cart: [
        {
          name: 'Chambolle-Musigny 2006',
          price: 240,
          picture: '../images/burgundy.jpg',
          type: 'Burgundy'
        }
      ]
    })).toBe(290)
})

it.only('Shipping', () => {
  expect(
    totalPrice({
      cart: [
        {
          name: 'Chambolle-Musigny 2006',
          price: 240,
          picture: '../images/burgundy.jpg',
          type: 'Burgundy'
        }
      ]
    })
  ).toBe(252)
})

