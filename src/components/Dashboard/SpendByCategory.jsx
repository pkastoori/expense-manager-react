import Chart from "react-apexcharts";

export const SpendByCategory = () => {
  const donutOptions = {
    series: [
      {
        data: [
          {
            x: "New Delhi",
            y: 218,
          },
          {
            x: "Kolkata",
            y: 149,
          },
          {
            x: "Mumbai",
            y: 184,
          },
          {
            x: "Ahmedabad",
            y: 55,
          },
          {
            x: "Bangaluru",
            y: 84,
          },
          {
            x: "Pune",
            y: 31,
          },
          {
            x: "Chennai",
            y: 70,
          },
        ],
      },
    ],

    chartOptions: {
      labels: [
        "Fruits",
        "Vegetables",
        "Misc",
        "Farsan",
        "Groceries",
        "Utilities",
      ],
    },
  };

  return (
    <div className="w-3/4 mx-auto">
      <p className="text-sm mb-5">Spend by Category</p>
      <div className="mx-auto">
        <Chart
          options={donutOptions.chartOptions}
          series={donutOptions.series}
          type="treemap"
          width="300"
        />
      </div>
    </div>
  );
};
