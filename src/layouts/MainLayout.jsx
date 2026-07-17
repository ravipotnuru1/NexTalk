import { Outlet } from "react-router-dom";

function MainLayout() {
  return (
    <div className="h-screen w-full overflow-hidden bg-slate-100">

      {/* Main Content */}
      <main className="h-full w-full">
        <Outlet />
      </main>

    </div>
  );
}

export default MainLayout;