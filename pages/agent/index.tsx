

"use client";
import withLayoutBasic from "@/libs/components/layout/LayoutBasic";
import useDeviceDetect from "@/libs/hooks/useDeviceDetect";
import { Stack } from "@mui/material";
import { NextPage } from "next";
import { useState } from "react";

const AgentList: NextPage = () => {
     const device = useDeviceDetect();

  if (device === "mobile") {
    return <Stack>AGENTS LIST MOBILE</Stack>;
  } else {
    const [title, setTitle] = useState<string>("hello");

     return (
        <div style={{ margin: " 20px 0px " }}>
           <Stack className="container" > AGENTS LIST</Stack>
       </div>
    );
}
};

export default withLayoutBasic(AgentList);