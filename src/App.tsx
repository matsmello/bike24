import React from 'react';
import './App.css';
import products from './data/products.json';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
interface Product {
  "id": string;
  "productName": string;
  "maxAmount": number;
  "taxRate": number;
  "price": number;
}

function Table({ shoppingCart }: { shoppingCart: ShoppingCartProduct[] }) {

  const total = React.useMemo(() => shoppingCart.reduce((previousValue, currentValue) => previousValue + currentValue.total, 0), [shoppingCart]);

  return (
    <div className="overflow-x-auto relative mx-auto max-h-128 max-w-full">
      <table className="w-full text-sm text-left text-gray-500 text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 bg-gray-700 text-gray-400">
          <tr>
            <th scope="col" className="text-white py-3 px-6">
              Product name
            </th>
            <th scope="col" className="text-white hidden sm:block py-3 px-6">
              Tax Rate
            </th>
            <th scope="col" className="text-white py-3 px-6">
              Quantity
            </th>
            <th scope="col" className="text-white py-3 px-6">
              Price
            </th>
          </tr>
        </thead>
        <tbody>
          {shoppingCart.map(item => (
            <tr className="bg-white border-b bg-gray-800 border-gray-700">
              <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap text-white">
                {item.productName}
              </th>
              <td className="hidden sm:block py-4 px-6">
                {item.taxRate}
              </td>
              <td className="py-4 px-6">
                {item.quantity}
              </td>
              <td className="py-4 px-6">
                ${item.total}
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr className="bg-white bg-gray-800">
            <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap text-white">  </th>
            <td className="hidden sm:block py-4 px-6"></td>
            <td className="py-4 px-6">
              Sum
            </td>
            <td className="py-4 px-6">
              ${Number.parseFloat(`${total}`).toFixed(2)}
            </td>
          </tr>
        </tfoot>
      </table>
    </div>

  )
}
interface ShoppingCartProduct extends Product {
  quantity: number;
  total: number;
}

function App() {
  const [product, setProduct] = React.useState<undefined | Product>();
  const [quantity, setQuantity] = React.useState<number>(1);
  const [shoppingCart, setShoppingCart] = React.useState<ShoppingCartProduct[]>([]);

  const onSelectProduct = (index: string) => {
    const productIndex = +index;
    const selectedProduct = products[productIndex];

    // Only update the selected product if it's not already selected
    if (selectedProduct.id !== product?.id) {
      setProduct(products[productIndex]);
      setQuantity(1);
    }
  }

  const addToShoppingCart = () => {
    if (product) {
      setShoppingCart([...shoppingCart, ...[{ ...product, quantity: quantity, total: quantity * product.price }]])
      setProduct(undefined);
      setQuantity(1);
    }
  };

  const onBuy = () => {
    setShoppingCart([]);
    toast(' 🚀 Congratulations, you have successfully bought your shopping cart.', {
      type: 'success'
    })

  }

  const isShoppingCartEmpty = React.useMemo(() => shoppingCart.length === 0, [shoppingCart]);
  const shoppingCartDisabledStyle = React.useMemo(() => isShoppingCartEmpty && 'bg-gray-400 text-gray-600', [isShoppingCartEmpty]);
  const undefinedProductDisabledStyle = React.useMemo(() => product === undefined && 'bg-gray-400 text-gray-600', [product]);

  return (
    <div className="bg-gray-600">
      <div className='main grid sm:grid-rows-3'>
        <div className="grid sm:grid-cols-3 gap-x-10 self-center mx-10 sm:mx-0">
          <div className='grid self-center'>
            <select id="products" onChange={(e) => onSelectProduct(e.currentTarget.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500 text-white">
              <option selected>Select a Product 📦</option>
              {products.map((item, index) => <option value={index} selected={product?.id === item.id}>{item.productName}</option>)}
            </select>
          </div>

          <div className='mt-10 sm:mt-0'>
            <label htmlFor="quantity" className="block mb-2 text-sm font-medium text-gray-900 text-gray-300">Quantity</label>
            <input className='mx-auto w-full' disabled={product === undefined} type="range" min={1} step={1} value={quantity} onChange={(e) => setQuantity(+e.target.value)} max={product?.maxAmount} />
            <div className={`grid ${product && 'grid-cols-4'}`}>
              <input type="number" value={quantity} id="quantity" disabled={product === undefined} onChange={(e) => setQuantity(+e.target.value)} className="mx-auto w-16 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" placeholder="" required />
              {product && (
                <div className='grid grid-cols-6 col-span-3'>
                  <span className='text-white text-center p-0 m-0 pt-1 font-bold'>x</span>
                  <span className='text-white text-center p-0 m-0 pt-1 font-bold col-span-2'>{product?.price}</span>
                  <span className='text-white text-center p-0 m-0 pt-1 font-bold'> = </span>
                  <span className='text-white text-center p-0 m-0 pt-1 font-bold col-span-2'>{parseFloat(`${+product?.price * quantity}`).toFixed(2)}</span>
                </div>
              )}
            </div>
          </div>

          <div className='grid self-center mt-10 sm:mt-0'>
            <button type="button" disabled={product === undefined} onClick={addToShoppingCart} className={`mx-auto w-44 h-12 px-4 rounded-full text-white bg-blue-400 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-md px-5 py-2.5 bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-blue-800 ${undefinedProductDisabledStyle}`}>Add to Cart</button>
          </div>
        </div>

        {!isShoppingCartEmpty && (
          <div className="flex flex-row mx-auto self-center md:max-h-48 max-h-64 -mt-10 sm:mt-0">
            <Table shoppingCart={shoppingCart} />
          </div>
          )
        }

        <div className="grid grid-cols-3 justify-between self-center">
          <div className='grid self-center'>
            <button type="button" onClick={() => setShoppingCart([])} disabled={isShoppingCartEmpty} className={`mx-auto rounded-full text-white bg-gray-100 font-medium rounded-lg text-md px-5 py-2.5 focus:outline-none ${shoppingCartDisabledStyle}`}>🗑</button>
          </div>
          <div />
          <div className='grid self-center'>
            <button type="button" onClick={onBuy} disabled={isShoppingCartEmpty} className={`mx-auto px-10 rounded-full text-white bg-blue-400 font-medium rounded-lg text-md px-5 py-2.5 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 ${shoppingCartDisabledStyle}`}>Buy</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
