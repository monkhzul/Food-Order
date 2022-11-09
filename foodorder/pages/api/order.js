// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from 'axios';

export default function handler(req, res) {
  const erpcode = req.body.erpcode;
  const quantity = req.body.quantity;

  const result = axios.post('https://122.201.28.34:8080/api/MyCokeFoodOrderQnt', {
      erpcode: `${erpcode}`,
      quantity: `${quantity}`
    })
  res.status(200).json(result.then((res) => console.log(res)))
}
