import React from "react";
import { Stack, Box, Divider, Typography, IconButton } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";

const TrendPropertyCard = () => {
  return (
    <Stack className="trend-card-box" sx={{ width: 350, borderRadius: "12px", overflow: "hidden", boxShadow: 3 }}>
      {/* Rasm qismi */}
      <Box
        className={"card-img"}
        sx={{
          height: "230px",
          backgroundImage: `url("/img/banner/types/apartment.webp")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",
          padding: "20px",
          display: "flex",
          alignItems: "flex-start"
        }}
      >
        <Box 
          sx={{ 
            backgroundColor: "#181A20", 
            color: "#fff", 
            padding: "5px 12px", 
            borderRadius: "6px",
            fontWeight: 600 
          }}
        >
          $420,000
        </Box>
      </Box>

      {/* Ma'lumotlar qismi */}
      <Box className={"info"} sx={{ padding: "20px", backgroundColor: "#fff" }}>
        <strong className={"title"} style={{ fontSize: "18px", display: "block", marginBottom: "5px" }}>
          Run Will Buildings
        </strong>
        <p className={"desc"} style={{ color: "#666", margin: "0 0 15px 0" }}>
          Seoul Gangnam Apartments
        </p>

        <Stack direction="row" spacing={2} className={"options"} sx={{ mb: 2 }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: "5px" }}>
            <img src="/img/icons/bed.svg" alt="bed" width="20" />
            <span>3 bed</span>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: "5px" }}>
            <img src="/img/icons/room.svg" alt="room" width="20" />
            <span>7 rooms</span>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: "5px" }}>
            <img src="/img/icons/expand.svg" alt="size" width="20" />
            <span>250 m2</span>
          </Box>
        </Stack>

        <Divider sx={{ mt: "15px", mb: "17px" }} />

        <Stack direction="row" justifyContent="space-between" alignItems="center" className={"bott"}>
          <Typography sx={{ fontWeight: 500 }}>Rent</Typography>
          <Stack direction="row" alignItems="center" spacing={1} className="view-like-box">
            <IconButton size="small" color="default">
              <RemoveRedEyeIcon fontSize="small" />
            </IconButton>
            <Typography className="view-cnt" variant="body2">120</Typography>
            
            <IconButton size="small" color="default">
              <FavoriteIcon fontSize="small" />
            </IconButton>
            <Typography className="view-cnt" variant="body2">200</Typography>
          </Stack>
        </Stack>
      </Box>
    </Stack>
  );
};

export default TrendPropertyCard;