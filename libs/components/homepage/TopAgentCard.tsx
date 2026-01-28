//  const TopAgentCard = () => {
//   return <div>Top Agent</div>;
// };

// export default TopAgentCard;



import React from "react";
import { Stack, Box } from "@mui/material";

const TopAgentCard = () => {
  return (
    <Stack className="top-agent-card">
      
      <img 
        src="/img/profile/girl.svg" 
        alt="Agent" 
      />

     
      <strong className={"title"}>Martin</strong>
      <span className={"desc"}>Agent</span>
    </Stack>
  );
};

export default TopAgentCard;