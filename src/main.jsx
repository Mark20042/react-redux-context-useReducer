import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App.jsx";
import { store } from "./store/index.js";
import UserProvider from "./context/users/userprovider.jsx";
import NumberProvider from "./context/numbers/numberprovider.jsx";
import PostProvider from "./context/posts/postprovider.jsx";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <UserProvider>
      <NumberProvider>
        <PostProvider>
          <App />
        </PostProvider>
      </NumberProvider>
    </UserProvider>
  </Provider>
);
