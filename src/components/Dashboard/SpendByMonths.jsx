import Chart from "react-apexcharts";

export const SpendByMonths = () => {
  const chartOptions = {
    options: {
      chart: {
        id: "basic-bar",
      },
      xaxis: {
        categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
      },
    },
    series: [
      {
        name: "",
        data: [8, 10, 8.8, 11, 9.5, 12],
      },
    ],
  };

  return (
    <div className="w-3/4 mx-auto">
      <p className="text-sm mb-5">
        Spend by Month <span className="text-xs">(in thousands)</span>
      </p>
      <Chart
        options={chartOptions.options}
        series={chartOptions.series}
        type="bar"
        width="300"
      />
    </div>
  );
};
