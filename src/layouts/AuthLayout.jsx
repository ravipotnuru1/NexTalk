import { Outlet } from "react-router-dom";

function AuthLayout() {
  return (
    <div className="min-h-[100dvh] bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700">
      <div className="mx-auto flex min-h-[100dvh] w-full max-w-7xl items-center justify-center px-4 py-4 sm:px-6 sm:py-6">
        <div className="w-full overflow-hidden rounded-none bg-white shadow-none lg:rounded-3xl lg:shadow-2xl">
          <div className="grid min-h-[100dvh] lg:min-h-[700px] lg:grid-cols-2">
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
            <div className="flex min-h-[100dvh] items-center justify-center bg-white px-5 py-8 sm:px-8 lg:min-h-[700px] lg:bg-gray-50 lg:px-14">
              <div className="w-full max-w-md">
                <Outlet />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AuthLayout;