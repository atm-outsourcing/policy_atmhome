import { BrowserRouter, Route, Routes } from "react-router-dom";
import { PrivacyPolicy } from "./pages/privacy-policy";
import { useTheme } from "@siakit/core";
import { useEffect } from "react";
import { UserPolicy } from "./pages/user-policy";

export function App() {
  const { changeColor, togggleTheme } = useTheme();

  useEffect(() => {
    togggleTheme('light');
    changeColor('blue')
  }, [])

  return (
    //t
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PrivacyPolicy />} />
        <Route path="/userpolicy" element={<UserPolicy />} />
      </Routes>
    </BrowserRouter>
  )
}


