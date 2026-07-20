import { Outlet } from "react-router-dom";

function AuthLayout() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 px-4 py-6">

      <div className="w-full max-w-7xl overflow-hidden rounded-3xl bg-white shadow-2xl">

        <div className="grid min-h-screen lg:min-h-[700px] lg:grid-cols-2">

          {/* Left Side */}
          <div className="hidden lg:flex flex-col justify-center bg-gradient-to-br from-blue-700 to-indigo-800 p-12 text-white">

            <h1 className="mb-6 text-5xl font-bold">
              NexTalk
            </h1>

            <p className="mb-10 text-lg leading-8 text-blue-100">
              Connect with your friends instantly through secure,
              fast and beautiful messaging.
            </p>

            <div className="space-y-6">

              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/20 text-xl">
                  💬
                </div>

                <div>
                  <h3 className="font-semibold">
                    Real-Time Messaging
                  </h3>

                  <p className="text-sm text-blue-100">
                    Fast conversations with modern UI.
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/20 text-xl">
                  🔒
                </div>

                <div>
                  <h3 className="font-semibold">
                    Secure Chat
                  </h3>

                  <p className="text-sm text-blue-100">
                    Privacy focused messaging experience.
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/20 text-xl">
                  🚀
                </div>

                <div>
                  <h3 className="font-semibold">
                    Responsive Design
                  </h3>

                  <p className="text-sm text-blue-100">
                    Mobile, Tablet and Desktop ready.
                  </p>
                </div>
              </div>

            </div>

          </div>

          {/* Right Side */}
          <div className="flex items-center justify-center bg-gray-50 px-6 py-10 sm:px-10 lg:px-14">

            <div className="w-full max-w-xl">
              <Outlet />
            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default AuthLayout;