"use client";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });
import { ApexOptions } from "apexcharts";

const ProductrChart = () => {
  const ChartData: ApexOptions = {
    series: [
      {
        name: "Sales",
        data: [20, 15, 30, 25, 10, 18, 20, 25, 10],
      },
    ],
    chart: {
      type: "bar",
      height: 80,
      fontFamily: `inherit`,
      sparkline: {
        enabled: true,
      },
    },
    colors: ["var(--color-chart-2)"],

    plotOptions: {
      bar: {
        borderRadius: 4,
        columnWidth: "60%",
        distributed: true,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 2.5,
      colors: ["rgba(0,0,0,0.01)"],
    },
    xaxis: {
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      labels: {
        show: false,
      },
    },
    yaxis: {
      labels: {
        show: false,
      },
    },
    fill: {
      opacity: 1,
    },
    tooltip: {
      theme: "dark",
      x: {
        show: false,
      },
    },
  };
  return (
    <>
      <Card className="p-6 gap-2">
        <h5 className="text-xl">$2,420</h5>
        <div className="flex gap-2 items-center">
          <p className="text-muted-foreground">Average Daily Sales</p>
          <Badge className="bg-chart-2/10 text-chart-2">5.6%</Badge>
        </div>
        <Chart
          options={ChartData}
          series={ChartData.series}
          type="bar"
          height="80px"
          width="100%"
          className="mt-5"
        />
      </Card>
    </>
  );
};

export default ProductrChart;
