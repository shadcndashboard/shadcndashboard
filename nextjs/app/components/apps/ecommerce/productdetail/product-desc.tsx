"use client";
import OutlineCard from "@/app/components/shared/outline-card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Pen } from "lucide-react";
import RatingStars from "@/app/components/shared/rating-stars";

const ProductDesc = () => {
  return (
    <Tabs defaultValue="description" className="w-full p-6 ">
      <TabsList>
        <TabsTrigger value="description" className={"cursor-pointer"}>Description</TabsTrigger>
        <TabsTrigger value="reviews" className={"cursor-pointer"}>Reviews</TabsTrigger>
      </TabsList>

      <TabsContent value="description">
        <div className="py-4">
          <h5 className="text-lg mb-6">
            Sed at diam elit. Vivamus tortor odio, pellentesque eu tincidunt a,
            aliquet sit amet lorem.
          </h5>
          <p className="text-sm text-muted-foreground mb-6">
            Cras eget elit semper, congue sapien id, pellentesque diam. Nulla
            faucibus diam nec fermentum ullamcorper. Praesent sed ipsum ut augue
            vestibulum malesuada. Duis vitae volutpat odio. Integer sit amet
            elit ac justo sagittis dignissim.
          </p>
          <p className="text-sm text-muted-foreground">
            Cras eget elit semper, congue sapien id, pellentesque diam. Nulla
            faucibus diam nec fermentum ullamcorper. Praesent sed ipsum ut augue
            vestibulum malesuada. Duis vitae volutpat odio. Integer sit amet
            elit ac justo sagittis dignissim.
          </p>
        </div>
      </TabsContent>

      <TabsContent value="reviews">
        <div className="py-4">
          <div className="grid grid-cols-12 gap-5">
            {/* Average Rating Card */}
            <div className="lg:col-span-4 col-span-12">
              <OutlineCard className="shadow-none w-full h-full">
                <div className="flex flex-col justify-center items-center py-5">
                  <h6 className="text-sm text-muted-foreground">
                    Average Rating
                  </h6>
                  <h2 className="text-4xl text-primary my-3">4/5</h2>
                  <div className="flex space-x-1">
                    <RatingStars rating={4} />
                  </div>
                </div>
              </OutlineCard>
            </div>

            {/* Star Distribution */}
            <div className="lg:col-span-4 col-span-12">
              <OutlineCard className="shadow-none w-full h-full">
                <div className="flex flex-col gap-3 p-4">
                  {[
                    { stars: "1 Stars", value: 45, count: 485 },
                    { stars: "2 Stars", value: 30, count: 215 },
                    { stars: "3 Stars", value: 25, count: 110 },
                    { stars: "4 Stars", value: 80, count: 620 },
                    { stars: "5 Stars", value: 20, count: 160 },
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-5">
                      <span className="text-xs text-muted-foreground">
                        {item.stars}
                      </span>
                      <div className="grow">
                        <Progress
                          value={item.value}
                          className="
    [&_[data-slot=progress-track]]:bg-primary/5
    [&_[data-slot=progress-indicator]]:bg-primary
  "
                        />
                      </div>
                      <span className="text-sm font-semibold text-muted-foreground">
                        ({item.count})
                      </span>
                    </div>
                  ))}
                </div>
              </OutlineCard>
            </div>

            {/* Write Review Button */}
            <div className="lg:col-span-4 col-span-12">
              <OutlineCard className="shadow-none w-full h-full">
                <div className="flex flex-col justify-center items-center py-5">
                  <Button variant="outline" className="flex items-center gap-2">
                    <Pen size={22} />
                    Write a review
                  </Button>
                </div>
              </OutlineCard>
            </div>
          </div>
        </div>
      </TabsContent>
    </Tabs>
  );
};

export default ProductDesc;
