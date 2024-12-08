import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Homepage from "@/pages/Homepage/Homepage";
import Book from "@/pages/Book/Book";
import BookPage from "@/pages/BookPage/BookPage";
import { ThemeProvider } from "@/providers/theme-provider";
import { Provider } from "react-redux";
import store from "@/redux/store";

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Homepage />}>
              <Route path="book" element={<Book />}>
                <Route path="page" element={<BookPage />} />
              </Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
