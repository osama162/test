import { BrowserRouter, Router, Routes, Route } from "react-router-dom";
import { useParams } from "react-router-dom";
import Update from "./Update";
import Create from "./Create_User";
import View_User from "./View_User";
import UserListing from "./UserListing";
export default function Menu() {
  return (
    <Routes>
      <Route path="/" element={<UserListing />} />
      <Route path="/create" element={<Create />} />
      <Route path="/update/:userid" element={<Update />} />
      <Route path="/view/:userid" element={<View_User />} />
    </Routes>
  );
}
