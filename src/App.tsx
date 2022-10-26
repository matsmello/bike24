import React from 'react';
import logo from './logo.svg';
import './App.css';
import products from './data/products.json';

// TODO - Add logic
// TODO - Add breakpoints
// TODO - Be responsive mobile, table and desktop
// TODO - Add extra functions
// TODO - Add transitions
// TODO - Load data from JSON file
// TODO - Refactor into components
// TODO - Use hooks if necessary: memo, usecallback, usememo, useeffect...
// TODO - Add tests?
// TODO - Test some edge cases (invalid inputs, empty shopping cart...)
// TODO - Message after the purchase
// TODO - HOST NETLIFY
// TODO - remove unecessary files
// TODO - As a customer I want to be able to select the quantity of products with a slider
// TODO - As a customer I want to be able to see the quantity selected with the slider also in the input field
// TODO - As a customer I want to see the new total for the selected quantity only after a few milliseconds
// TODO - Create the README.MD

function Table() {
  return (

    <div className="overflow-x-auto relative">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="py-3 px-6">
              Product name
            </th>
            <th scope="col" className="py-3 px-6">
              Color
            </th>
            <th scope="col" className="py-3 px-6">
              Category
            </th>
            <th scope="col" className="py-3 px-6">
              Price
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
              Apple MacBook Pro 17"
            </th>
            <td className="py-4 px-6">
              Sliver
            </td>
            <td className="py-4 px-6">
              Laptop
            </td>
            <td className="py-4 px-6">
              $2999
            </td>
          </tr>
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
              Microsoft Surface Pro
            </th>
            <td className="py-4 px-6">
              White
            </td>
            <td className="py-4 px-6">
              Laptop PC
            </td>
            <td className="py-4 px-6">
              $1999
            </td>
          </tr>
          <tr className="bg-white dark:bg-gray-800">
            <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
              Magic Mouse 2
            </th>
            <td className="py-4 px-6">
              Black
            </td>
            <td className="py-4 px-6">
              Accessories
            </td>
            <td className="py-4 px-6">
              $99
            </td>
          </tr>
        </tbody>
        <tfoot>
          <tr className="bg-white dark:bg-gray-800">
            <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">  </th>
            <td className="py-4 px-6"></td>
            <td className="py-4 px-6">
              Sum
            </td>
            <td className="py-4 px-6">
              $99
            </td>
          </tr>
        </tfoot>
      </table>
    </div>

  )
}

function App() {
  return (
    <div className="App bg-yellow-600 h-screen">
      <div className="flex flex-row">
        <div>
          <label htmlFor="countries" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Select an option</label>
          <select id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            <option selected>Select a Product</option>
            <option value="US">United States</option>
            <option value="CA">Canada</option>
            <option value="FR">France</option>
            <option value="DE">Germany</option>
          </select>
        </div>

        <div className="slidecontainer">
          <input type="range" min={1} step={1} onChange={(e) => console.log(e.target.value)} max="100" className="slider" id="myRange" />
        </div>
        <div>
          <label htmlFor="visitors" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Unique visitors (per month)</label>
          <input type="number" value={100} id="visitors" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required />
        </div>
        <span>x</span>
        <span>1,99</span>
        <span> = </span>
        <span>3,98</span>

        <button type="button" className="rounded-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-md px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Add to Cart</button>
      </div>

      <div className="flex flex-row">
        <Table />
      </div>

      <div className="flex flex-row justify-between">
      <button type="button" className="rounded-full text-white bg-gray-100 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-md px-5 py-2.5 mr-2 mb-2 focus:outline-none dark:focus:ring-blue-800">🗑</button>
      <button type="button" className="px-10 rounded-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-md px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Buy</button>
      </div>
    </div>
  );
}

export default App;
