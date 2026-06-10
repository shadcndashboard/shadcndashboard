"use client";

import { ProductType } from "@/app/(dashboard-layout)/types/apps/ecommerce";
import {
  deleteFetcher,
  getFetcher,
  postFetcher,
  putFetcher,
} from "@/app/api/global-fetcher";
import React, { createContext, useState, useEffect } from "react";

import useSWR from "swr";

// Define ProductContextType based on imported types
interface ProductContextType {
  products: ProductType[];
  searchProduct: string;
  selectedCategory: string;
  sortBy: string;
  priceRange: string;
  selectedGender: string;
  selectedColor: string;
  loading: boolean;
  error: any;
  cartItems: ProductType[];
  setProducts: React.Dispatch<React.SetStateAction<ProductType[]>>;
  setSearchProduct: React.Dispatch<React.SetStateAction<string>>;
  setSelectedCategory: React.Dispatch<React.SetStateAction<string>>;
  setSortBy: React.Dispatch<React.SetStateAction<string>>;
  setPriceRange: React.Dispatch<React.SetStateAction<string>>;
  setSelectedGender: React.Dispatch<React.SetStateAction<string>>;
  setSelectedColor: React.Dispatch<React.SetStateAction<string>>;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  setCartItems: React.Dispatch<React.SetStateAction<ProductType[]>>;
  deleteProduct: (productId: number | string) => void;
  searchProducts: (searchText: string) => void;
  updateSortBy: (sortOption: string) => void;
  updatePriceRange: (range: string) => void;
  selectCategory: (category: string) => void;
  selectGender: (gender: string) => void;
  selectColor: (color: string) => void;
  incrementQuantity: (id: number | string) => void;
  decrementQuantity: (id: number | string) => void;
  removeFromCart: (id: number | string) => void;
  addToCart: (item: any) => void;
  deleteAllProducts: () => void;
  filteredAndSortedProducts: ProductType[];
  filterReset: () => void;
  getProductById: (productId: string) => ProductType | undefined;
  updateProduct: (productId: string, updatedProduct: ProductType) => void;
}

// Create Context with the specified type
export const ProductContext = createContext<ProductContextType>(
  {} as ProductContextType
);

// Provider Component
export const ProductProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [products, setProducts] = useState<ProductType[]>([]);
  const [searchProduct, setSearchProduct] = useState<string>("");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [sortBy, setSortBy] = useState<string>("newest");
  const [priceRange, setPriceRange] = useState<string>("All");
  const [selectedGender, setSelectedGender] = useState<string>("All");
  const [selectedColor, setSelectedColor] = useState<string>("All");
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<any>(null);
  const [cartItems, setCartItems] = useState(() => {
    // Check if localStorage is defined (for client-side rendering)
    if (typeof window !== "undefined") {
      const storedCartItems = localStorage.getItem("cartItems");
      return storedCartItems ? JSON.parse(storedCartItems) : [];
    } else {
      return [];
    }
  });

  // Fetch products data from the API
  const {
    data: productsData,
    isLoading: isProductsLoading,
    error: productsError,
    mutate,
  } = useSWR("/api/ecommerce", getFetcher);

  useEffect(() => {
    if (productsData) {
      setProducts(productsData.data);
      setLoading(isProductsLoading);
    } else if (productsError) {
      setError(productsError);
      setLoading(isProductsLoading);
    } else {
      setLoading(isProductsLoading);
    }
  }, [productsData, productsError]);

  // Fetch products data from the API
  const {
    data: cartsData,
    isLoading: isCartsLoading,
    error: cartsError,
    mutate: cartMutate,
  } = useSWR("/api/ecommerce/carts", getFetcher);

  useEffect(() => {
    if (cartsData) {
      setCartItems(cartsData.data);
      setLoading(isCartsLoading);
    } else if (cartsError) {
      setError(cartsError);
      setLoading(isCartsLoading);
    } else {
      setLoading(isCartsLoading);
    }
  }, [cartsData, cartsError]);

  // UseEffect to update local storage whenever cartItems changes
  useEffect(() => {
    if (cartItems) {
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
    }
  }, [cartItems]);

  // UseEffect to initialize cartItems from local storage when the component mounts
  useEffect(() => {
    const storedCartItems = localStorage.getItem("cartItems");
    if (storedCartItems) {
      setCartItems(JSON.parse(storedCartItems));
    }
  }, []);

  // Function to filter products based on search, category, price range, gender, and color
  const filterProducts = (product: ProductType) => {
    const matchesSearch = product.title
      .toLowerCase()
      .includes(searchProduct.toLowerCase());
    const matchesCategory =
      selectedCategory === "All" || product.category.includes(selectedCategory);
    const withinPriceRange =
      priceRange === "All" ||
      (priceRange === "0-50" && product.price <= 50) ||
      (priceRange === "50-100" && product.price > 50 && product.price <= 100) ||
      (priceRange === "100-200" &&
        product.price > 100 &&
        product.price <= 200) ||
      (priceRange === "200-99999" && product.price > 200);
    const matchesGender =
      selectedGender === "All" || product.gender === selectedGender;
    const matchesColor =
      selectedColor === "All" || product.colors.includes(selectedColor);

    return (
      matchesSearch &&
      matchesCategory &&
      withinPriceRange &&
      matchesGender &&
      matchesColor
    );
  };

  // Function to sort filtered products based on selected sort option
  const sortProducts = (filteredProducts: ProductType[]) => {
    switch (sortBy) {
      case "newest":
        return filteredProducts.sort(
          (a, b) =>
            new Date(b.created).getTime() - new Date(a.created).getTime()
        );
      case "priceDesc":
        return filteredProducts.sort((a, b) => b.price - a.price);
      case "priceAsc":
        return filteredProducts.sort((a, b) => a.price - b.price);
      case "discount":
        return filteredProducts.sort(
          (a, b) => (b.discount || 0) - (a.discount || 0)
        );
      default:
        return filteredProducts;
    }
  };

  // Function to fetch a product by its ID
  const getProductById = (productId: string) => {
    const product = products.find((p) => p.id === Number(productId));
    return product;
  };

  // Filter and sort products
  const filteredProducts = products.filter(filterProducts);
  const filteredAndSortedProducts = sortProducts(filteredProducts);

  // Function to handle selecting a category
  const selectCategory = (category: string) => setSelectedCategory(category);

  // Function to update the sort option
  const updateSortBy = (sortOption: string) => setSortBy(sortOption);

  // Function to update the price range
  const updatePriceRange = (range: string) => setPriceRange(range);

  // Function to select a gender
  const selectGender = (gender: string) => setSelectedGender(gender);

  // Function to select a color
  const selectColor = (color: string) => setSelectedColor(color);

  // Function to search products based on text input
  const searchProducts = (searchText: string) => setSearchProduct(searchText);

  // Function to add an item to the cart
  const addToCart = async (productId: number | string) => {
    try {
      await cartMutate(postFetcher("/api/ecommerce/carts", { productId }));
    } catch (error) {
      console.error("Error adding product to cart:", error);
    }
  };

  // Function to remove an item from the cart
  const removeFromCart = async (id: number | string) => {
    await cartMutate(
      deleteFetcher("/api/ecommerce/carts", { id, action: "Increment" })
    );
  };

  // Function to increment quantity of a product in the cart
  const incrementQuantity = async (id: number | string) => {
    await cartMutate(
      putFetcher("/api/ecommerce/carts", { id, action: "Increment" })
    );
  };

  // Function to decrement quantity of a product in the cart
  const decrementQuantity = async (id: number | string) => {
    await cartMutate(
      putFetcher("/api/ecommerce/carts", { id, action: "Decrement" })
    );
  };

  // Function to delete a product
  const deleteProduct = (productId: number | string) => {
    setProducts(products.filter((product) => product.id !== productId));
  };

  // Function to delete all products
  const deleteAllProducts = () => {
    setProducts([]);
  };

  //  Function to update a product
  const updateProduct = (productId: string, updatedProduct: ProductType) => {
    setProducts(
      products.map((product) =>
        product.id === Number(productId) ? updatedProduct : product
      )
    );
  };

  const filterReset = () => {
    setSelectedCategory("All");
    setSelectedColor("All");
    setSelectedGender("All");
    setPriceRange("All");
    setSortBy("newest");
  };

  return (
    <ProductContext.Provider
      value={{
        products,
        searchProduct,
        selectedCategory,
        sortBy,
        priceRange,
        selectedGender,
        selectedColor,
        loading,
        error,
        cartItems,
        setProducts,
        setSearchProduct,
        setSelectedCategory,
        setSortBy,
        setPriceRange,
        setSelectedGender,
        setSelectedColor,
        setLoading,
        setCartItems,
        deleteProduct,
        searchProducts,
        updateSortBy,
        updatePriceRange,
        selectCategory,
        selectGender,
        selectColor,
        incrementQuantity,
        decrementQuantity,
        removeFromCart,
        addToCart,
        deleteAllProducts,
        filteredAndSortedProducts,
        filterReset,
        getProductById,
        updateProduct,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
