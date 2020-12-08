import React from "react";
import { Tag } from "@chakra-ui/react";

const CategoryTag = ({ category, handleCategoryQuery, ...rest }) => {
  const getCategory = (category) => handleCategoryQuery(category);

  return (
    <Tag
      {...rest}
      bg="brand.darkGrey"
      color="brand.bg"
      variant="solid"
      fontFamily="heading"
      justifyContent="center"
      size="sm"
      p={1}
      minW="100px"
      borderRadius={0}
      onClick={() => getCategory(category)}
      _hover={{
        cursor: "pointer",
        bgColor: "brand.black",
      }}
      className="cat-tag"
    >
      {category}
    </Tag>
  );
};

export default CategoryTag;
