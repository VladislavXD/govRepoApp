import { Route, Routes, Navigate } from "react-router-dom";
import Footer from "./components/layout/footer";
import Header from "./components/layout/header";
import Repo from "./components/repository";

function App() {
  return (
    <div className="relative">
      <div className="flex flex-col min-h-screen justify-between before:content-[''] before:hidden md:before:block before:bg-[url('https://repository.gov.uz/img/s2.png')] before:bg-no-repeat before:bg-cover before:absolute before:right-[15px] before:bottom-[80px]  before:opacity-20 relative before:w-[213px] before:h-[149px]">
        <Header />
        <div className="container mx-auto max-w-292.5 grow"> 
          <Routes>
            <Route path="/ru/file/download" element={<Repo/>} />
            <Route path="*" element={<Navigate to="/ru/file/download" replace />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
