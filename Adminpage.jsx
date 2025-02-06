import React from "react";
import { useNavigate } from "react-router-dom";

export const Adminpage = () => {
  const navigate = useNavigate();

  const menuItems = [
    { 
      title: "Donors", 
      desc: "Manage donor information and contributions",
      path: "/donor-table"
    },
    { 
      title: "Receivers", 
      desc: "Track aid recipients and distribution",
      path: "/receiver-table"
    },
    { 
      title: "Volunteers", 
      desc: "Coordinate volunteer activities and schedules",
      path: "/volunteer-table"
    },
    { 
      title: "Homeless People", 
      desc: "Monitor and assist homeless individuals",
      path: "/homeless-table"
    },
  ];

  return (
    <div
      style={{
        width: "100%",
        minHeight: "100vh",
        background: "linear-gradient(to bottom right, #fff7ed, #ffedd5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "2rem",
      }}
    >
      <div
        style={{
          maxWidth: "900px",
          background: "white",
          padding: "2rem",
          borderRadius: "1rem",
          boxShadow: "0 10px 20px rgba(0, 0, 0, 0.1)",
          textAlign: "center",
        }}
      >
        <h1 style={{ fontSize: "2rem", fontWeight: "bold", color: "#ea580c", marginBottom: "2rem" }}>
          Admin Dashboard
        </h1>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "1.5rem" }}>
          {menuItems.map((item, index) => (
            <button
              key={index}
              style={{
                background: "rgba(255, 247, 237, 0.9)",
                padding: "1.5rem",
                borderRadius: "0.75rem",
                boxShadow: "0 5px 10px rgba(0, 0, 0, 0.1)",
                textAlign: "center",
                border: "none",
                cursor: "pointer",
                transition: "all 0.3s",
              }}
              onClick={() => navigate(item.path)}
              onMouseEnter={(e) => (e.currentTarget.style.background = "#ffedd5")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "rgba(255, 247, 237, 0.9)")}
            >
              <h2 style={{ fontSize: "1.25rem", fontWeight: "600", color: "#ea580c" }}>
                {item.title}
              </h2>
              <p style={{ color: "#ea580c", opacity: 0.8 }}>{item.desc}</p>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Adminpage;
