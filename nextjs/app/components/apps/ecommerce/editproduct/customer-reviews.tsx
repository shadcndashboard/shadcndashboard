"use client";

import Image from "next/image";
import { Card } from "@/components/ui/card";
import {
  Table,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  AnimatedTableWrapper,
  AnimatedTableBody,
  AnimatedTableRow,
} from "@/app/components/animated-components/animated-table";
import RatingStars from "@/app/components/shared/rating-stars";

const LatestReviewData = [
  {
    profile: "/images/profile/user-2.png",
    customername: "Arlene McCoy",
    customeremail: "macoy@arlene.com",
    review: 5,
    reviewtext: "I like this design",
    time: "1 day ago",
  },
  {
    profile: "/images/profile/user-3.png",
    customername: "Jerome Bell",
    customeremail: "belljerome@yahoo.com",
    review: 4,
    reviewtext:
      "Awesome quality with great materials used, but could be more comfortable",
    time: "Today",
  },
  {
    profile: "/images/profile/user-4.png",
    customername: "Jacob Jones",
    customeremail: "jones009@hotmail.com",
    review: 4,
    reviewtext:
      "The best experience we could hope for.Customer service team is amazing and thequality of their products",
    time: "Nov 8",
  },
  {
    profile: "/images/profile/user-5.png",
    customername: "Annette Black",
    customeremail: "blackanne@yahoo.com",
    review: 3,
    reviewtext:
      "The controller is quite comfy for me. Despiteits increased size, the controller still fits well",
    time: "Nov 10",
  },
  {
    profile: "/images/profile/user-3.png",
    customername: "Jerome Bell",
    customeremail: "belljerome@yahoo.com",
    review: 4,
    reviewtext:
      "Awesome quality with great materials used, but could be more comfortable",
    time: "Today",
  },
  {
    profile: "/images/profile/user-4.png",
    customername: "Jacob Jones",
    customeremail: "jones009@hotmail.com",
    review: 4,
    reviewtext:
      "The best experience we could hope for.Customer service team is amazing and thequality of their products",
    time: "Nov 8",
  },
  {
    profile: "/images/profile/user-5.png",
    customername: "Annette Black",
    customeremail: "blackanne@yahoo.com",
    review: 3,
    reviewtext:
      "The controller is quite comfy for me. Despiteits increased size, the controller still fits well",
    time: "Nov 10",
  },
];

const CustomerReviews = () => {
  return (
    <Card className="p-6">
      <h5 className="text-base">Customer Reviews</h5>
      <AnimatedTableWrapper className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="text-sm font-semibold pb-2">
                Customer
              </TableHead>
              <TableHead className="text-sm font-semibold pb-2">
                Comment
              </TableHead>
              <TableHead className="text-sm font-semibold pb-2">Date</TableHead>
            </TableRow>
          </TableHeader>
          <AnimatedTableBody className="divide-y divide-border ">
            {LatestReviewData.map((item, index) => (
              <AnimatedTableRow key={index} index={index}>
                <TableCell className="whitespace-nowrap ps-6 md:min-w-auto min-w-[200px]">
                  <div className="flex gap-3 items-center">
                    <Image
                      src={item.profile}
                      alt={item.customername}
                      width={32}
                      height={32}
                      className="h-8 w-8 rounded-full"
                    />
                    <h6 className="text-base">{item.customername}</h6>
                  </div>
                </TableCell>
                <TableCell className="whitespace-normal md:min-w-auto min-w-[200px]">
                  <RatingStars rating={item.review} />

                  <p className=" line-clamp-2 max-w-56 text-sm mt-1 text-muted-foreground">
                    {item.reviewtext}
                  </p>
                </TableCell>
                <TableCell className="whitespace-nowrap">
                  <p className=" text-sm text-muted-foreground">{item.time}</p>
                </TableCell>
              </AnimatedTableRow>
            ))}
          </AnimatedTableBody>
        </Table>
      </AnimatedTableWrapper>
    </Card>
  );
};

export default CustomerReviews;
