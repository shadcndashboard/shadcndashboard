"use client";

import React, { useContext, useState } from "react";
import { format } from "date-fns";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import SimpleBar from "simplebar-react";
import { ProductType } from "../../../../(dashboard-layout)/types/apps/ecommerce";
import { ProductContext } from "@/app/context/ecommerce-context";
import { Card } from "@/components/ui/card";
import {
  Table,
  TableHead,
  TableRow,
  TableHeader,
  TableCell,
  TableBody,
} from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Alert, AlertTitle } from "@/components/ui/alert";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Checkbox } from "@/components/ui/checkbox";
import {
  AnimatedTableWrapper,
  AnimatedTableBody,
  AnimatedTableRow,
} from "@/app/components/animated-components/animated-table";
import InputPlaceholderAnimate from "@/app/components/animated-components/animatedinput-placeholder";
import Image from "next/image";
import { EllipsisVertical, Funnel, Pen, SearchIcon } from "lucide-react";
import { Trash } from 'lucide-react';


const ProductTablelist = () => {
  const {
    filteredAndSortedProducts,
    deleteProduct,
    deleteAllProducts,
    searchProducts,
    updateProduct,
    getProductById,
  } = useContext(ProductContext);
  const [search, setSearch] = useState("");
  const [selectedProducts, setSelectedProducts] = useState<number[]>([]);
  const [selectAll, setSelectAll] = useState(false);
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [openEditModal, setOpenEditModal] = useState(false);
  const [editedProduct, setEditedProduct] = useState<ProductType | null>(null);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [imageURL, setImageURL] = useState<string>("");

  const handleSearch = (value: string) => {
    setSearch(String(value));
    searchProducts(value);
  };

  const handleEdit = (productId: string) => {
    const product = getProductById(productId);

    if (product) {
      setEditedProduct(product);
      setImageURL(product.photo);
      setOpenEditModal(true);
    }
  };

  const handleCloseEditModals = () => {
    setOpenEditModal(false);
    setEditedProduct(null);
    setImageURL("");
  };

  const handleSaveEdit = () => {
    if (editedProduct) {
      const updatedProduct = {
        ...editedProduct,
        photo: imageURL,
        created: selectedDate || editedProduct.created,
      };
      updateProduct(editedProduct.id.toString(), updatedProduct);
      handleCloseEditModals();
    }
  };

  const toggleSelectAll = () => {
    const selectAllValue = !selectAll;
    setSelectAll(selectAllValue);
    if (selectAllValue) {
      setSelectedProducts(
        filteredAndSortedProducts.map((product: { id: any }) => product.id)
      );
    } else {
      setSelectedProducts([]);
    }
  };

  const toggleSelectProduct = (productId: number) => {
    const index = selectedProducts.indexOf(productId);
    if (index === -1) {
      setSelectedProducts([...selectedProducts, productId]);
    } else {
      setSelectedProducts(
        selectedProducts.filter((id: number) => id !== productId)
      );
    }
  };

  const handleDelete = () => {
    if (selectedProducts.length === 0) {
      setShowAlert(true); // Show alert after adding contact
      setTimeout(() => {
        setShowAlert(false);
      }, 3000);
    } else {
      setOpenDeleteDialog(true);
    }
  };

  const handleCloseDeleteDialog = () => {
    setOpenDeleteDialog(false);
  };

  const handleConfirmDelete = () => {
    if (selectedProducts.length > 0) {
      if (selectedProducts.length === filteredAndSortedProducts.length) {
        deleteAllProducts();
      } else {
        selectedProducts.forEach((productId: number) => {
          deleteProduct(productId);
        });
      }
      setSelectedProducts([]);
      setSelectAll(false);
    }
    setOpenDeleteDialog(false);
  };

  const handleDateChange = (created: Date | null) => {
    setSelectedDate(created);
    if (editedProduct) {
      setEditedProduct({ ...editedProduct, created: created || new Date() });
    }
  };

  return (
    <>
      <Card className="p-6">
        {/* Search  */}
        <div className="flex gap-3 justify-between items-center mb-5">
          <div className="relative w-full sm:max-w-60">
            <span className="absolute left-3 top-1/2 -translate-y-1/2  text-muted-foreground">

              <SearchIcon size={16} />

            </span>
            <InputPlaceholderAnimate
              value={search}
              onChange={handleSearch}
              placeholders={[
                "Search products...",
                "Find top products...",
                "Look up products...",
              ]}
            />
          </div>
          <div className="flex gap-4">
            {selectAll ? (
              <Button
                variant={"destructive"}
                onClick={handleDelete}
              >
                <Trash size={18} />
              </Button>
            ) : (
              <Button variant={"outline"}>
                <Funnel size={18} />
              </Button>
            )}
          </div>
        </div>
        {/* Table */}
        <SimpleBar className="max-h-[580px]">
          <div className="border rounded-xl border-border overflow-x-auto">
            <AnimatedTableWrapper>
              <Table className="">
                <TableHeader>
                  <TableRow>
                    <TableHead className="text-base font-semibold py-3 cursor-pointer">
                      <Checkbox
                        checked={selectAll}
                        onCheckedChange={toggleSelectAll}
                      />
                    </TableHead>
                    <TableHead className="text-sm font-semibold py-3">
                      Products
                    </TableHead>
                    <TableHead className="text-sm font-semibold py-3">
                      Date
                    </TableHead>
                    <TableHead className="text-sm font-semibold py-3">
                      Status
                    </TableHead>
                    <TableHead className="text-sm font-semibold py-3">
                      Price
                    </TableHead>
                    <TableHead className="text-sm font-semibold py-3">
                      Action
                    </TableHead>
                  </TableRow>
                </TableHeader>
                {filteredAndSortedProducts.length === 0 ? (
                  <TableBody>
                    <TableRow>
                      <TableCell colSpan={6} className="text-center py-10">
                        <div className="flex flex-col items-center justify-center">
                          <Image
                            src="/images/svgs/no-data.webp"
                            alt="No data"
                            height={100}
                            width={100}
                            className="mb-4"
                          />
                          <p className="text-lg font-medium ">
                            No products available!
                          </p>
                        </div>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                ) : (
                  <AnimatedTableBody className="divide-y divide-border  ">
                    {filteredAndSortedProducts.map(
                      (item: ProductType, index: number) => (
                        <AnimatedTableRow key={index} index={index}>
                          <TableCell className="whitespace-nowrap">
                            <Checkbox
                              checked={selectedProducts.includes(
                                Number(item.id)
                              )}
                              className={"cursor-pointer"}
                              onCheckedChange={() =>
                                toggleSelectProduct(Number(item.id))
                              }
                            />
                          </TableCell>
                          <TableCell className="whitespace-nowrap lg:min-w-auto min-w-[250px]">
                            <div className="flex  gap-3 items-center">
                              <Image
                                src={item.photo as string}
                                alt="icon"
                                width={56}
                                height={56}
                                className="h-14 w-14 rounded-lg"
                              />
                              <div className="text-no-wrap">
                                <h6 className="text-base">{item.title}</h6>
                                <p className="text-sm  text-muted-foreground">
                                  {item.category}
                                </p>
                              </div>
                            </div>
                          </TableCell>
                          <TableCell className="whitespace-nowrap">
                            <p className="text-sm  font-medium text-muted-foreground">
                              {format(new Date(item.created), "E, MMM d yyyy")}
                            </p>
                          </TableCell>
                          <TableCell className="whitespace-nowrap">
                            <div className="flex gap-2 text-sm items-center  font-medium text-muted-foreground">
                              {item.stock ? (
                                <span className="h-2 w-2 p-0 rounded-md bg-chart-2"></span>
                              ) : (
                                <span className="h-2 w-2 p-0 rounded-md bg-chart-1"></span>
                              )}
                              {item.stock ? "InStock" : "Out of Stock"}
                            </div>
                          </TableCell>

                          <TableCell className="whitespace-nowrap">
                            <h5 className="text-base text-muted-foreground">
                              ${item.price}
                            </h5>
                          </TableCell>
                          <TableCell className="whitespace-nowrap">
                            <DropdownMenu modal={false}>
                              <DropdownMenuTrigger>
                                <span className="btn-circle-hover">
                                  <EllipsisVertical
                                    size={22}
                                    width={22}
                                  />
                                </span>
                              </DropdownMenuTrigger>
                              <DropdownMenuContent align="end" className="w-40">
                                <DropdownMenuItem
                                  className="flex gap-3 items-center cursor-pointer"
                                  onClick={() => handleEdit(item.id.toString())}
                                >
                                  <Pen
                                    size={18}
                                  />
                                  <span>Edit</span>
                                </DropdownMenuItem>
                                <DropdownMenuItem
                                  className="flex gap-3 items-center cursor-pointer"
                                  onClick={handleDelete}
                                >
                                  <Trash
                                    size={18}
                                  />
                                  <span>Delete</span>
                                </DropdownMenuItem>
                              </DropdownMenuContent>
                            </DropdownMenu>
                          </TableCell>
                        </AnimatedTableRow>
                      )
                    )}
                  </AnimatedTableBody>
                )}
              </Table>
            </AnimatedTableWrapper>
          </div>
        </SimpleBar>
      </Card>

      <Dialog open={openDeleteDialog} onOpenChange={handleCloseDeleteDialog}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Delete Confirmation</DialogTitle>
          </DialogHeader>

          <p className="text-center text-lg my-6">
            Are you sure you want to delete selected products?
          </p>

          <DialogFooter className="flex justify-center gap-2">
            <Button
              variant="destructive"
              className="rounded-md"
              onClick={handleConfirmDelete}
            >
              Delete
            </Button>
            <Button
              className="rounded-md "
              onClick={handleCloseDeleteDialog}
            >
              Cancel
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      <Dialog open={openEditModal} onOpenChange={handleCloseEditModals}>
        <DialogContent className="max-w-3xl">
          <DialogHeader>
            <DialogTitle>Edit Product</DialogTitle>
          </DialogHeader>

          {editedProduct && (
            <div className="grid grid-cols-12 gap-6 pt-4">
              <div className="col-span-12 lg:col-span-6">
                <Label htmlFor="ttl" className="mb-2 block capitalize">
                  Title
                </Label>
                <Input
                  id="ttl"
                  value={editedProduct.title}
                  onChange={(e) =>
                    setEditedProduct({
                      ...editedProduct,
                      title: e.target.value,
                    })
                  }
                />
              </div>

              <div className="col-span-12 lg:col-span-6">
                <Label htmlFor="price" className="mb-2 block capitalize">
                  Price
                </Label>
                <Input
                  id="price"
                  value={editedProduct.price}
                  onChange={(e) =>
                    setEditedProduct({
                      ...editedProduct,
                      price: e.target.value,
                    })
                  }
                />
              </div>

              <div className="col-span-12 lg:col-span-6">
                <Label htmlFor="stck" className="mb-2 block capitalize">
                  Stock
                </Label>
                <Select
                  value={editedProduct.stock ? "In Stock" : "Out of Stock"}
                  onValueChange={(value) =>
                    setEditedProduct({
                      ...editedProduct,
                      stock: value === "In Stock",
                    })
                  }
                >
                  <SelectTrigger id="stck" className="select-md-contact">
                    <SelectValue>
                      {editedProduct.stock ? "In Stock" : "Select Stock Status"}
                    </SelectValue>
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="In Stock">IN Stock</SelectItem>
                    <SelectItem value="Out of Stock">Out Stock</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="col-span-12 lg:col-span-6">
                <Label htmlFor="dt" className="mb-2 block capitalize">
                  Date
                </Label>
                <DatePicker
                  selected={selectedDate}
                  onChange={handleDateChange}
                  dateFormat="MMMM d, yyyy"
                  className=" w-full max-w-full py-[10px] border  rounded-md px-3"
                  id="dt"
                />
              </div>

              <div className="col-span-12 lg:col-span-6">
                <Label htmlFor="img" className="mb-2 block capitalize">
                  Image URL
                </Label>
                <Input
                  id="img"
                  placeholder="Paste image URL"
                  value={imageURL}
                  onChange={(e) => setImageURL(e.target.value)}
                />
              </div>

              <div className="col-span-12">
                <Label htmlFor="imgPreview" className="mb-2 block capitalize">
                  Image Preview
                </Label>
                {imageURL && (
                  <Image
                    id="imgPreview"
                    src={imageURL}
                    width={200}
                    height={200}
                    alt="Preview"
                    className="w-full max-w-[200px] h-auto object-cover rounded-md"
                  />
                )}
              </div>
            </div>
          )}

          <DialogFooter className="mt-6">
            <Button onClick={handleSaveEdit} >
              Save
            </Button>
            <Button
              type="button"
              onClick={handleCloseEditModals}
              variant={"destructive"}
            >
              Cancel
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      {showAlert && (
        <Alert className="fixed top-4 left-1/2 -translate-x-1/2 z-50 max-w-sm w-fit flex items-center gap-2 bg-destructive/12">
          <AlertTitle className="mb-0 text-destructive">
            Please select products to delete.
          </AlertTitle>
        </Alert>
      )}
    </>
  );
};

export default ProductTablelist;
