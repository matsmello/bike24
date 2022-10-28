import React from 'react';
import { formatPrice } from '../../helpers/commons';
import { ShoppingCartProduct } from "../../types/shopping.page";

export default function Table({ shoppingCart }: { shoppingCart: ShoppingCartProduct[] }) {

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
                  ${formatPrice(item.total)}
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
                ${formatPrice(total)}
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
  
    )
  }