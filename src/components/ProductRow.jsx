function ProductRow (props) {

  

  let list = props.productsProp
  .filter(product => product.name.toLowerCase().includes(props.searchProp.toLowerCase()))
     console.log("list:",list);

 if (props.checkedProp) {
     list = list.filter(product => product.inStock === true)
 } 


 const filteredList = list.map(product => {
     return( 

      <div className="row">
       <table>
         <tr key={product.id}>
             <th id="name" style={product.inStock ? {color:"black"} : {color:"red"} }>{product.name}</th>
             <th id="price"  >{product.price}</th>
         </tr>
         </table>  
      </div>                            
     )  
           
 })

 return (
     <>{filteredList}</>
 )

}

export default ProductRow;