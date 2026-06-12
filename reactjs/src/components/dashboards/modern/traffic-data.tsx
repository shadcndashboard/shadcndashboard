
import { useMemo, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import {  CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { ArrowDownUp, ArrowLeft, ArrowRight, CirclePlus, Ellipsis, Pen, Star, Trash, ShoppingBag } from "lucide-react";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { DashboardCard } from "../../shared/dashboard-card";


interface ProductTableDataType {
  id: string;
  Source: string;
  description: string;
  review: number;
  Rate: string;
  status: string;

  bgcolor: string;
}

interface TableActionDataType {
  icon: React.ComponentType<{ className?: string }>;
  listtitle: string;
}


const RatingStars = ({ rating }: { rating: number }) => {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          size={16}
          className={star <= rating ? "text-orange-600" : "text-orange-600/40"}
          fill="currentColor"
          stroke="none"
        />
      ))}
    </div>
  );
};
export default function TrafficData() {
  const ProductTableData: ProductTableDataType[] = [
    {
      id: uuidv4(),
      Source: "AeroBeat X9 Earbuds",
      description: "High resolution drone",
      review: 4,
      Rate: "$1,499.00",
      status: "High Demand",
      bgcolor: "bg-chart-2/10! text-chart-2!",
    },
    {
      id: uuidv4(),
      Source: "DataDrive Secure X",
      description: "External SSD 2TB",
      review: 4,
      Rate: "$199.00",
      status: "Low Demand",
      bgcolor: "bg-orange-600/10! text-orange-600!",
    },
    {
      id: uuidv4(),
      Source: "FlexBook Infinity",
      description: "Convertible laptop",
      review: 4,
      Rate: "$1,499.00",
      status: "High Demand",
      bgcolor: "bg-chart-2/10! text-chart-2!",
    },
    {
      id: uuidv4(),
      Source: "PulseFit Tracker 2",
      description: "Advanced fitness watch",
      review: 3,
      Rate: "$1,499.00",
      status: "Low Demand",
      bgcolor: "bg-orange-600/10! text-orange-600!",
    },
  ];

  const tableActionData: TableActionDataType[] = [
    {
      icon: CirclePlus,
      listtitle: "Add",
    },
    {
      icon: Pen,
      listtitle: "Edit",
    },
    {
      icon: Trash,
      listtitle: "Delete",
    },
  ];

  const dropdownItems = ["4", "5", "6"];

  const [tableData, setTableData] = useState(ProductTableData);
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, _] = useState("");
  const [selectedRows, setSelectedRows] = useState<string[]>([]);

  // Generic sort handler
  type SortableKey = "Source" | "review" | "Rate" | "status";

  const handleSort = (key: SortableKey) => {
    const order = sortOrder === "asc" ? "desc" : "asc";
    setSortOrder(order);

    const sorted = [...tableData].sort((a, b) => {
      const aVal = a[key] as string | number;
      const bVal = b[key] as string | number;



      const parseValue = (val: string | number) => {
        if (typeof val === "number") return val;

        if (typeof val === "string" && val.includes("$")) {
          return parseFloat(val.replace(/[$,]/g, ""));
        }

        if (typeof val === "string" && val.includes("%")) {
          return parseFloat(val);
        }

        if (!isNaN(Number(val))) return Number(val);

        return val.toString().toLowerCase();
      };

      const aParsed = parseValue(aVal);
      const bParsed = parseValue(bVal);

      if (typeof aParsed === "string" && typeof bParsed === "string") {
        return order === "asc"
          ? aParsed.localeCompare(bParsed)
          : bParsed.localeCompare(aParsed);
      }

      return order === "asc"
        ? (aParsed as number) - (bParsed as number)
        : (bParsed as number) - (aParsed as number);
    });

    setTableData(sorted);
  };

  // Filtered data
  const filteredData = useMemo(() => {
    return tableData.filter((item) =>
      item.Source.toLowerCase().includes(searchQuery.toLowerCase()),
    );
  }, [searchQuery, tableData]);

  const totalRows = filteredData.length;
  const totalPages = Math.ceil(totalRows / rowsPerPage);
  const startIndex = (currentPage - 1) * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;
  const visibleData = filteredData.slice(startIndex, endIndex);

  const handleCheckboxChange = (id: string) => {
    setSelectedRows((prev) =>
      prev.includes(id) ? prev.filter((rowId) => rowId !== id) : [...prev, id],
    );
  };

  const allVisibleIds = visibleData.map((item) => item.id);
  const isAllSelected =
    visibleData.length > 0 &&
    allVisibleIds.every((id) => selectedRows.includes(id));

  const handleSelectAll = () => {
    if (isAllSelected) {
      setSelectedRows((prev) =>
        prev.filter((id) => !allVisibleIds.includes(id)),
      );
    } else {
      setSelectedRows((prev) => [...new Set([...prev, ...allVisibleIds])]);
    }
  };

  return (
    <DashboardCard className="gap-0!">
      <CardHeader className="border-b border-border">
        <CardTitle>
          <div className="flex items-center gap-2">
            <ShoppingBag size={16} className="text-muted-foreground" />
            <span>Top Selling Products</span>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col justify-between gap-0 h-full px-0!">
        <Table>
          <TableHeader className="text-muted-foreground ">
            <TableRow>
              <TableHead className="px-6 text-sm pl-4!">

                <Checkbox
                  checked={isAllSelected}
                  onCheckedChange={handleSelectAll}
                  disabled={visibleData.length === 0}
                  className="cursor-pointer"
                />


              </TableHead>
              <TableHead className="py-2 px-4 text-sm  text-muted-foreground  ">
                <div
                  onClick={() => handleSort("Source")}
                  className="hover:cursor-pointer"
                >
                  <h6 className="flex items-center gap-1.5 font-normal">
                    Item
                    <span>
                      <ArrowDownUp size={16} />
                    </span>
                  </h6>
                </div>
              </TableHead>
              <TableHead className="py-2 px-4  text-sm font-normal">
                <div
                  onClick={() => handleSort("review")}
                  className="hover:cursor-pointer group"
                >
                  <p className="flex items-center gap-1.5 text-muted-foreground">
                    Rating
                    <span>
                      <ArrowDownUp size={16} />
                    </span>
                  </p>
                </div>
              </TableHead>
              <TableHead className="py-2 px-4  text-sm font-normal ">
                <div
                  onClick={() => handleSort("Rate")}
                  className="hover:cursor-pointer group"
                >
                  <p className="flex items-center gap-1.5 text-muted-foreground">
                    Price
                    <span>
                      <ArrowDownUp size={16} />
                    </span>
                  </p>
                </div>
              </TableHead>
              <TableHead className="py-2 px-4  text-sm font-normal ">
                <div
                  onClick={() => handleSort("status")}
                  className="hover:cursor-pointer group"
                >
                  <p className="flex items-center gap-1.5 text-muted-foreground">
                    Status
                    <span>
                      <ArrowDownUp size={16} />
                    </span>
                  </p>
                </div>
              </TableHead>
              <TableHead className="py-2 px-4  text-sm font-normal ">
                <div className="hover:cursor-pointer group">
                  <p className="flex items-center gap-1.5 text-muted-foreground">
                    Action
                  </p>
                </div>
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className="border-b">
            {visibleData.map((item) => (
              <TableRow key={item.id}>
                <TableCell className="px-6 pl-4!">

                  <Checkbox
                    onCheckedChange={() => handleCheckboxChange(item.id)}
                    checked={selectedRows.includes(item.id)}
                  />

                </TableCell>
                <TableCell className="whitespace-nowrap px-4! py-3!">
                  <h6 className="text-sm font-medium">{item.Source}</h6>
                  <p className="text-sm font-normal text-muted-foreground">
                    {item.description}
                  </p>
                </TableCell>
                <TableCell className="whitespace-nowrap px-3 py-4">
                  <RatingStars rating={item.review} />
                </TableCell>
                <TableCell className="whitespace-nowrap px-3 py-4">
                  <p className="text-sm text-muted-foreground  ">{item.Rate}</p>
                </TableCell>
                <TableCell className="whitespace-nowrap px-3 py-4">
                  <Badge className={cn(item.bgcolor)}>{item.status}</Badge>
                </TableCell>
                <TableCell className="whitespace-nowrap px-3 py-4">
                  <DropdownMenu>
                    <DropdownMenuTrigger>
                      <Button
                        variant={"ghost"}
                        className={"text-foreground cursor-pointer"}
                      >
                        <Ellipsis size={16} />
                      </Button>
                    </DropdownMenuTrigger>

                    <DropdownMenuContent className="overflow-hidden p-1 dark:bg-black">
                      {tableActionData.map((item, index) => {
                        const IconComponent = item.icon;
                        return (
                          <DropdownMenuItem
                            key={index}
                            onSelect={(e) => e.preventDefault()} // keep dropdown open
                            className="flex gap-3 text-muted-foreground cursor-pointer"
                          >
                            <IconComponent />
                            <span>{item.listtitle}</span>
                          </DropdownMenuItem>
                        );
                      })}
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        <div className="flex items-center justify-between  flex-wrap lg:gap-0 gap-2 px-6 py-4">
          <div className="flex items-center gap-2">
            <p className="text-sm text-muted-foreground ">Show</p>
            <Select
              value={String(rowsPerPage)}
              onValueChange={(value) => {
                setRowsPerPage(Number(value));
                setCurrentPage(1);
              }}
            >
              <SelectTrigger className="w-fit me-0" aria-label="Rows per page">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {dropdownItems.map((item, index) => (
                  <SelectItem key={index} value={String(item)}>
                    {item}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <p className="text-sm text-muted-foreground ">per page</p>
          </div>
          <div className="flex items-center gap-5">
            <p className="text-sm text-muted-foreground">
              {startIndex + 1}-{Math.min(endIndex, totalRows)} of {totalRows}
            </p>
            <div className="flex items-center gap-2">
              <ArrowLeft
                className={`text-primary hover:text-primary cursor-pointer ${currentPage === totalPages
                  ? "opacity-50 cursor-not-allowed"
                  : ""
                  }`}
                width={20}
                height={20}
                onClick={() =>
                  currentPage > 1 && setCurrentPage(currentPage - 1)
                }
              />
              <span className="w-8 h-8  text-primary flex items-center justify-center rounded-md outline  text-sm font-normal">
                {currentPage}
              </span>
              <ArrowRight
                className={`text-primary dark:text-white hover:text-primary cursor-pointer ${currentPage === totalPages
                  ? "opacity-50 cursor-not-allowed"
                  : ""
                  }`}
                width={20}
                height={20}
                onClick={() =>
                  currentPage < totalPages && setCurrentPage(currentPage + 1)
                }
              />
            </div>
          </div>
        </div>
      </CardContent>
    </DashboardCard>
  );
}
