import { Flex } from "./Styled";


export const ProductCard = ({ ...item }) => {
  console.log(item.brand)
  return (
    
      <Flex data-testid="single-product-item" key={item.id}>
        {/* display item info here  */}
        <h1>{item.brand}</h1>
      </Flex>
   
  );
};
