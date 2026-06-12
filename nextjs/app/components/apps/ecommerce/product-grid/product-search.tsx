import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import React, { useContext } from "react";
import { ProductContext } from "@/app/context/ecommerce-context";
import PlaceholdersInput from "@/app/components/animated-components/animatedinput-placeholder";
import { SearchIcon } from "lucide-react";
import { Menu } from 'lucide-react';


type Props = {
  onClickFilter: (event: React.MouseEvent<HTMLElement>) => void;
};
const ProductSearch = ({ onClickFilter }: Props) => {
  const { searchProduct, searchProducts } = useContext(ProductContext);

  return (
    <>
      <div className="flex justify-between items-center">
        <div className="flex gap-3">
          <h5 className="text-base lg:flex hidden">Products</h5>
          <Button
            variant="ghost"
            className="!h-8 !w-8  p-0 lg:!hidden flex border border-border"
            onClick={onClickFilter}
          >
            <Menu size={18} />
          </Button>
        </div>
        <div className="relative">
          <PlaceholdersInput
            value={searchProduct}
            onChange={searchProducts}
            placeholders={[
              "Search Product...",
              "Find What you want...",
              "Look up Products...",
            ]}
          />
          <div className="absolute left-3 top-1/2 transform -translate-y-1/2  text-muted-foreground">

            <SearchIcon size={16} />

          </div>
        </div>
      </div>
    </>
  );
};

export default ProductSearch;
