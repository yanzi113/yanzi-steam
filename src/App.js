import Navbar from "./components/Navbar";
import Categories from "./components/Categories";
import Recommended from "./components/Recommended";
function App() {
  return (
    // <div className="bg-[#1f4082]">
    <div className="bg-[#1b2838] h-screen">
      {/* Navbar 导航*/}
      <Navbar />
      {/* Categories 分类*/}
      <Categories />
      {/* Recommended */}
      <Recommended />
      {/* SpecialOffers */}
      {/* Browse */}
      {/* Footer */}
    </div>
  );
}

export default App;
