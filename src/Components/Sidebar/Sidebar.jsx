import React from "react";
import freebox from "../../Assets/Freebox.svg";
import affiliates from "../../Assets/Affiliates1.svg";
import { v4 as uuidv4 } from "uuid";
import battles from "../../Assets/Battles.svg";
import home from "../../Assets/Home.svg";
import openCase from "../../Assets/Opencase.svg";
import vipMembers from "../../Assets/Vipmembers.svg";
import document1 from "../../Assets/Document1.svg";
import document2 from "../../Assets/Document2.svg";
import document3 from "../../Assets/Document3.svg";
import document4 from "../../Assets/Document4.svg";
import "./Sidebar.css";
import Socials from "../Socials/Socials";
const Sidebar = () => {
  const menus = [freebox, home, openCase, battles, vipMembers, affiliates];
  const documents = [document1, document2, document3, document4];
  return (
    <div className="sidebar">
      <div className="sidebar-upper">
        {menus.map((item) => {
          return <img key={uuidv4()} src={item} alt="" />;
        })}
      </div>
      <div className="sidebar-lower">
        <div className="documents">
          {documents.map((item) => {
            return <img key={uuidv4()} src={item} alt="" />;
          })}
        </div>
        <Socials />
      </div>
    </div>
  );
};

export default Sidebar;
