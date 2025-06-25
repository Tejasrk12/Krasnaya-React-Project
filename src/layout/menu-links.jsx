import React from "react";
import { Link } from "react-router-dom";

export default function MenuLinks() {
  const menuItems = [
    { label: "Home", to: "#home"  },
    { label: "Who We Are", to: "#who-we-are"  },
    { label: "What We Do", to: "#what-we-do"  },
    { label: "Projects", to: "#projects"  },
    { label: "Contact Us", to: "#contact-us"  },


  ];
  return (
    <>
    {menuItems.map((item,index)=>(
        <li key={index}>
            <a href={item.to}>{item.label}</a>
        </li>
    ))}
    </>
  );
}
