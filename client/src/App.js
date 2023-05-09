import "./App.css";
import { Routes, Route } from "react-router-dom";
import FoodItemsComponent from "./components/FoodItemsComponent";

function App() {
  return (
    <Routes>
      <Route path="/" element={<div>Home Page</div>}></Route>
      <Route path="/feedbacks" element={<div> Feedbacks </div>}></Route>
      <Route path="/contact" element={<div> Contact Us</div>}></Route>
      <Route path="/food-items" element={<FoodItemsComponent />}></Route>
    </Routes>
  );
}

export default App;
