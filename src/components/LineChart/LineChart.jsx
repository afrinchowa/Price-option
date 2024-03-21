import { LineChart as LChart, Line, XAxis,YAxis } from "recharts";
const LineChart = () => {
  const studentMathMarks = [
    { id: "1", name: "John Doe", math: 85, physics: 78, chemistry: 90 },
    { id: "2", name: "Alice Smith", math: 92, physics: 88, chemistry: 95 },
    { id: "3", name: "Bob Johnson", math: 78, physics: 82, chemistry: 75 },
    { id: "4", name: "Emily Brown", math: 90, physics: 76, chemistry: 88 },
    { id: "5", name: "David Wilson", math: 88, physics: 90, chemistry: 85 },
    { id: "6", name: "Sophia Lee", math: 95, physics: 94, chemistry: 98 },
    { id: "7", name: "Michael Davis", math: 82, physics: 89, chemistry: 84 },
    { id: "8", name: "Olivia Martinez", math: 87, physics: 91, chemistry: 89 },
    { id: "9", name: "William Clark", math: 79, physics: 80, chemistry: 77 },
    { id: "10", name: "Ella Adams", math: 96, physics: 93, chemistry: 97 },
  ];

  return (
    <div>
      <LChart width={800} height={400} data={studentMathMarks}>
        <XAxis dataKey="name"></XAxis>
        <YAxis ></YAxis>
        <Line dataKey="math" stroke='red'></Line>
        <Line dataKey="physics" stroke='Black'></Line>
        <Line dataKey="chemistry" stroke='Blue'></Line>
      </LChart>
    </div>
  );  
};

export default LineChart;
