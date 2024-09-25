import { useState } from "react";
import ExploreCard, { ExploreCardProps } from "@/components/explore-card";

export default function Tabs() {
  const [activeTab, setActiveTab] = useState("all");

  return (
    <div className="nav nav-tabs align-items-center justify-content-center row">
      <button className="nav-link active text-uppercase col-md-2">
        <span className="icon">
          <i className="mdi mdi-plus f-24 align-middle"></i> All
        </span>
      </button>

      <button className="nav-link text-uppercase col-md-2">
        <span className="icon">
          {" "}
          <i className="mdi mdi-gamepad-variant f-24 align-middle"></i> Games
        </span>
      </button>

      <button className="nav-link text-uppercase col-md-2">
        <span className="icon">
          <i className="mdi mdi-brush f-24 align-middle"></i>
          Art
        </span>
      </button>

      <button className="nav-link text-uppercase col-md-2">
        <span className="icon">
          <i className="mdi mdi-panda f-24 align-middle"></i>
          Memes
        </span>
      </button>

      <button className="nav-link text-uppercase col-md-2">
        <span className="icon">
          <i className="mdi mdi-collage f-24 align-middle"></i> Collection
        </span>
      </button>
    </div>
  );
}
