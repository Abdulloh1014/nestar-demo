import withLayoutMain from '@/libs/components/layout/LayoutHome';
import useDeviceDetect from '@/libs/hooks/useDeviceDetect';
import { Container, Stack } from '@mui/material';


const PropertyDetail = () => {
 const device = useDeviceDetect();

  if (device === "mobile") {
    return <Stack>PROPERTY DETAIL MOBILE</Stack>;
  } else {    
    return <Container>PROPERTY DETAIL</Container>;
  } 
};

    
export default withLayoutMain(PropertyDetail);
