// import withLayoutBasic from '@/libs/components/layout/LayoutBasic';
// import { Container, Stack } from '@mui/material';
// import { NextPage } from 'next';


// const PropertyList: NextPage = () => {
//     return (
//     <div style={{ margin: " 20px 0px " }}>
//         <Stack className="container" >PROPERTY LIST</Stack>
//     </div>
//   );
// };

// export default withLayoutBasic(PropertyList);


import React, { useState } from "react";
import { NextPage } from "next";
import { Box, Button, Pagination, Stack, Typography } from "@mui/material";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import PropertyCard from "../../libs/components/property/PropertyCard";
import Filter from "@/libs/components/property/Filter";
import withLayoutBasic from "@/libs/components/layout/LayoutBasic";
import useDeviceDetect from "@/libs/hooks/useDeviceDetect";

const PropertyList: NextPage = () => {
    const device = useDeviceDetect();
	const [properties, setProperties] = useState<number[]>([1, 2, 3, 4, 5, 6]);

	if (device === "mobile") {
    return <Stack>Property List MOBILE</Stack>;
  } else {
	return (
		<div id={"property-list-page"} style={{ position: "relative" }}>
			<Stack className={"container"}>
				<Box className={"right"}>
					<span>Sort by</span>
					<Button endIcon={<KeyboardArrowDownRoundedIcon />}>New</Button>
				</Box>

				<Stack className={"property-page"}>
					{/* Filtrlar bo'limi */}
					<Stack className={"filter-config"}>
						<Filter />
					</Stack>

					{/* Mulklar ro'yxati bo'limi */}
					<Stack className={"main-config"} mb={"76px"}>
						<Stack className={"list-config"}>
							{properties.map((property, index) => {
								return <PropertyCard key={index} />;
							})}
						</Stack>

						{/* Pagination va umumiy ma'lumot */}
						<Stack className={"pagination-config"}>
							<Stack className={"pagination-box"}>
								<Pagination
									count={5}
									page={1}
									shape="circular"
									color="primary"
								/>
							</Stack>
							<Stack className={"total-result"}>
								<Typography>Total {properties.length} properties available</Typography>
							</Stack>
						</Stack>
					</Stack>
				</Stack>
			</Stack>
		</div>
	);
  };
};

export default withLayoutBasic(PropertyList);