//Secret_key: sk_test_c46Cm2fymcdGMnv6LuJ38eDu001RAZ5glJ
// CoffeeId: price_1LwlMSApfUoZorgCNjN1cxNo
// Sunglasses: price_1LwlQPApfUoZorgCZIc8L9FV
// Camera: price_1LwlTKApfUoZorgCHzHkHKUD
const express = require('express');
const cors = require('cors');
const stripe = require('stripe')('sk_test_c46Cm2fymcdGMnv6LuJ38eDu001RAZ5glJ');

const app = express();
app.use(cors());
app.use(express.static('public'));
app.use(express.json());

app.post('/checkout', async (req, res) => {
  const items = req.body.items;
  let lineItems = [];
  items.forEach((item) => {
    lineItems.push({ price: item.id, quantity: item.quantity });
  });

  const session = await stripe.checkout.sessions.create({
    line_items: lineItems,
    mode: 'payment',
    success_url: 'http://localhost:3000/success',
    cancel_url: 'http://localhost:3000/cancel',
  });

  res.send(JSON.stringify({ url: session.url }));
});

app.listen(4000, () => console.log('listening on port 4000'));
