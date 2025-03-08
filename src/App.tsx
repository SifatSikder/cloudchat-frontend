import './App.css'
import AddFile from "@/components/addFile/AddFile.tsx";
import Sidebar from "@/components/sideBar/Sidebar.tsx";

function App() {

  return (
      <>
          <div className="w-[1440px] h-[900px] rounded-4xl p-4 gap-3 bg-[#242424] text-white flex justify-between">
                  <div className="w-1/5 h-full rounded-3xl flex flex-col p-3 justify-between">
                      <Sidebar/>
                  </div>
                  <div className="w-full h-full rounded-2xl pt-10 pb-5 px-5 gap-y-20 bg-[#2B2B2B] flex flex-col items-center">
                      <AddFile/>
                  </div>
          </div>
      </>

  )
}

export default App
