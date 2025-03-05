import { useState } from "react";
import { Card, CardContent } from "./components/ui/card";  // Corrected import path
import { Input } from "./components/ui/input";             // Corrected import path
import { Button } from "./components/ui/button";           // Corrected import path

export default function HallOfFame() {
  const [wrestlers, setWrestlers] = useState([]);
  const [name, setName] = useState("");
  const [category, setCategory] = useState("OAC State Qualifier");
  const [year, setYear] = useState("");  // New state for year

  const categories = [
    "OAC State Qualifier",
    "OHWay State Qualifier",
    "Novice State Placer",
    "OAC State Placer",
    "OHWay State Placer"
  ];

  const addWrestler = () => {
    if (name.trim() !== "" && year.trim() !== "") {  // Ensure year is also filled
      setWrestlers([...wrestlers, { name, category, year }]);
      setName("");
      setYear("");  // Reset year after adding wrestler
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Wrestling Hall of Fame</h1>
      <div className="mb-4 flex gap-2">
        <Input
          type="text"
          placeholder="Enter Wrestler's Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <select
          className="border rounded p-2"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          {categories.map((cat) => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>
        <Input
          type="number"
          placeholder="Enter Year"
          value={year}
          onChange={(e) => setYear(e.target.value)}
        />
        <Button onClick={addWrestler}>Add</Button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {wrestlers.map((wrestler, index) => (
          <Card key={index} className="p-4 border rounded shadow-md">
            <CardContent>
              <h2 className="text-xl font-semibold">{wrestler.name}</h2>
              <p className="text-gray-600">{wrestler.category}</p>
              <p className="text-gray-600">{wrestler.year}</p>  {/* Display year */}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
