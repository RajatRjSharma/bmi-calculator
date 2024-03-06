import "./App.css";
import Slider from "@mui/material/Slider";
import { styled } from "@mui/material/styles";
import { useEffect, useState } from "react";

const BlackSlider = styled(Slider)({
  color: "black",
});

const getCategory = (value) => {
  if (value < 16) return { text: "Severe Thinness", color: "#ED2938" };
  else if (value >= 16 && value < 17)
    return { text: "Moderate Thinness", color: "#FF8C01" };
  else if (value >= 17 && value < 18.5)
    return { text: "Mild Thinness", color: " #FCC200" };
  else if (value >= 18.5 && value < 25)
    return { text: "Normal", color: "#006b3e" };
  else if (value >= 25 && value < 30)
    return { text: "Overweight", color: " #FCC200" };
  else if (value >= 30 && value < 35)
    return { text: "Obese Class I", color: "#FF8C01" };
  else if (value >= 35 && value < 40)
    return { text: "Obese Class II", color: "#ED2938" };
  else if (value >= 40) return { text: "Obese Class III", color: "#722F37" };
};

function App() {
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [category, setCategory] = useState(null);

  useEffect(() => {
    setCategory(getCategory((weight / ((height * height) / 10000)).toFixed(2)));
  }, [height, weight]);

  return (
    <div
      className="container"
      style={{ height: window.innerHeight - 20 + "px" }}
    >
      <div className="item">
        <div className="title">BMI Calculator</div>
        <div className="body">
          <div style={{ padding: "5px 0" }}>
            <span>Weight: {weight} kg</span>
            <BlackSlider
              size="small"
              aria-label="Small"
              valueLabelDisplay="auto"
              value={weight}
              onChange={(e, v) => setWeight(v)}
              min={0}
              max={100}
              step={1}
            />
          </div>
          <div style={{ padding: "5px 0" }}>
            <span>Height: {height} cm</span>
            <BlackSlider
              size="small"
              aria-label="Small"
              valueLabelDisplay="auto"
              value={height}
              onChange={(e, v) => setHeight(v)}
              min={0}
              max={200}
              step={1}
            />
          </div>
          <div className="result">
            <div>{(weight / ((height * height) / 10000)).toFixed(2)}</div>
            <div
              style={{
                color: category?.color || "black",
              }}
            >
              {category?.text || ""}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
