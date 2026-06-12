import { useContext } from "react";
import Image from "next/image";
import OrderSummary from "./order-summary";
import { ProductType } from "@/app/(dashboard-layout)/types/apps/ecommerce";
import { ProductContext } from "@/app/context/ecommerce-context/index";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Trash } from 'lucide-react';

interface OrderSummaryProps {
  Discount: number;
  total: number;
}

const ProductCart = ({ Discount, total }: OrderSummaryProps) => {
  const { cartItems, incrementQuantity, removeFromCart, decrementQuantity } =
    useContext(ProductContext);

  return (
    <>
      {/* Table  */}
      <div className="overflow-x-auto">
        <Table className="">
          <TableHeader>
            <TableRow>
              <TableHead className="text-sm font-semibold py-3 md:min-w-[100px] min-w-[250px]">
                Product
              </TableHead>
              <TableHead className="text-sm font-semibold py-3">
                Quantity
              </TableHead>
              <TableHead className="text-sm font-semibold py-3 text-end">
                Price
              </TableHead>
            </TableRow>
          </TableHeader>
          {cartItems.map((product: ProductType, index) => (
            <TableBody key={index} className="divide-y divide-border ">
              <TableRow>
                <TableCell className="whitespace-nowrap py-5 lg:min-w-auto min-w-[300px]">
                  <div className="flex gap-3 items-center ">
                    <Image
                      src={product.photo}
                      alt="product"
                      className="rounded-md"
                      width={80}
                      height={80}
                    />
                    <div className="">
                      <h6 className="text-base">{product.title}</h6>
                      <p className="text-sm  mb-1"> {product.category}</p>
                      <Trash
                        size={15}
                        className="text-destructive cursor-pointer"
                        onClick={() => removeFromCart(product.id)}
                      />
                    </div>
                  </div>
                </TableCell>
                <TableCell className="whitespace-nowrap py-5">
                  <form className="max-w-xs">
                    <div className="relative flex items-center text-wrap">
                      <button
                        type="button"
                        id="decrement-button"
                        data-input-counter-decrement="quantity-input"
                        onClick={() => decrementQuantity(product.id)}
                        className=" cursor-pointer focus:ring-0 focus:outline-none border border-border h-[32px] min-w-10 rounded-s-md rounded-e-none text-center flex justify-center items-center hover:bg-primary/5 hover:text-primary"
                      >
                        <span className="text-2xl">-</span>
                      </button>

                      <input
                        type="text"
                        id="quantity-input"
                        data-input-counter
                        aria-describedby="helper-text-explanation"
                        className="!rounded-s-none !rounded-e-none text-center h-[32px] !border-x-0 w-fit max-w-12 border-y border-border !focus:ring-0 focus:border-border focus:ring-transparent focus:ring-offset-0 bg-transparent text-sm"
                        placeholder="0"
                        required
                        readOnly
                        value={product.qty}
                      />

                      <button
                        type="button"
                        id="increment-button"
                        data-input-counter-increment="quantity-input"
                        onClick={() => incrementQuantity(product.id)}
                        className=" cursor-pointer focus:ring-0 focus:outline-none border border-border h-[32px] min-w-10 rounded-e-md rounded-s-none text-center flex justify-center items-center  hover:bg-primary/5 hover:text-primary"
                      >
                        <span className="text-xl">+</span>
                      </button>
                    </div>
                  </form>
                </TableCell>
                <TableCell className="whitespace-nowrap py-5 text-end">
                  <h5 className="text-base">${product.price * product.qty}</h5>
                </TableCell>
              </TableRow>
            </TableBody>
          ))}
        </Table>
      </div>

      {/* Order Summery */}
      <OrderSummary Discount={Discount} total={total} />
    </>
  );
};

export default ProductCart;
