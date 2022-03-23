import {Input, Search} from '@wfp/ui'
import {ChangeEvent} from "react";

export default function NewOrder() {
  const filterProducts = (text: ChangeEvent<Input>) => {
    console.log('text')
  }
  return (
    <>
      <Search
        id={'search-product'}
        className="search-product"
        name="search-product"
        placeholder="Search product"
        onChange={filterProducts}
      />
      <div>product categories</div>
      <div className={''}>Products</div>
    </>
  )
}
