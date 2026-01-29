import React from "react";
import { Stack, Typography, Box } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";

const PropertyCard = () => {
	return (
		<Stack className="property-card">
			<Stack className="card-top">
				<img src="/img/apartmentMain.png" alt="property" />
				<Box className="badge">
					<Typography>⚡️TOP</Typography>
				</Box>
				<Box className="price">
					<Typography>$250,000</Typography>
				</Box>
			</Stack>

			<Stack className="card-bottom">
				<Stack className="info-box">
					<Typography className="title">Kingstone Apartment</Typography>
					<Typography className="address">Busan, City center, 200-5</Typography>
				</Stack>

				<Stack sx={{flexDirection: "row"}} className="options">
					<Stack className="option">
						<img src="/img/icons/bed.svg" alt="" />
						<Typography>3 bed</Typography>
					</Stack>
					<Stack className="option">
						<img src="/img/icons/room.svg" alt="" />
						<Typography>7 room</Typography>
					</Stack>
					<Stack className="option">
						<img src="/img/icons/expand.svg" alt="" />
						<Typography>170 m2</Typography>
					</Stack>
				</Stack>

				<Stack className="divider"></Stack>

				<Stack sx={{flexDirection: "row"}} className="type-buttons">
					<Stack direction="row" spacing={1}>
						<Typography className="type rent">Rent</Typography>
						<Typography className="type buy">Buy</Typography>
					</Stack>
					
					<Stack direction="row" className="view-like-box" spacing={2}>
						<Stack direction="row" alignItems="center" spacing={0.5}>
							<RemoveRedEyeIcon />
							<Typography>100</Typography>
						</Stack>
						<Stack direction="row" alignItems="center" spacing={0.5}>
							<FavoriteIcon color="error" />
							<Typography>100</Typography>
						</Stack>
					</Stack>
				</Stack>
			</Stack>
		</Stack>
	);
};

export default PropertyCard;