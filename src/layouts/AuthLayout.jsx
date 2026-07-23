import { Outlet } from "react-router-dom";
import "./AuthLayout.css";

function AuthLayout() {
  return (
    <div className="auth-page">
      <div className="auth-wrapper">
        <div className="auth-card">
          {/* Left Side */}
          <div className="auth-left">
            <div className="brand">
              <div className="brand-logo">💬</div>

              <h1>NexTalk</h1>

              <p>
                Secure. Fast. Beautiful messaging for everyone.
              </p>
            </div>

            <div className="feature-list">
              <div className="feature">
                <div className="feature-icon">💬</div>

                <div>
                  <h3>Real-Time Messaging</h3>

                  <p>Chat instantly with friends and teams.</p>
                </div>
              </div>

              <div className="feature">
                <div className="feature-icon">🔒</div>

                <div>
                  <h3>Secure Conversations</h3>

                  <p>Your privacy comes first with secure messaging.</p>
                </div>
              </div>

              <div className="feature">
                <div className="feature-icon">🚀</div>

                <div>
                  <h3>Modern Experience</h3>

                  <p>Responsive UI built for desktop and mobile.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side */}
          <div className="auth-right">
            <div className="auth-form-card">
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AuthLayout;