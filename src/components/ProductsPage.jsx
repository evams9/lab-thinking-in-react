import { useState } from 'react';
import jsonData from '../data.json';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

function ProductsPage () {
  const [products] = useState(jsonData);
  const [search, setSearch] = useState('')
  const [checked, setChecked] = useState(false)


  return(
      <div>
        <h1>IronStore</h1>
        <SearchBar 
        setSearchProp={setSearch} 
        setCheckedProp={setChecked}
        />
        <ProductTable 
        productsProp={products}
        searchProp={search}
        checkedProp={checked}
        />
      </div>    
  )
}

export default ProductsPage;