import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { green, red, yellow, blue, grey, orange } from '@mui/material/colors';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import StopIcon from '@mui/icons-material/Stop';
import SpeedIcon from '@mui/icons-material/Speed';
import HourglassEmptyIcon from '@mui/icons-material/HourglassEmpty';
import ErrorIcon from '@mui/icons-material/Error';
import NewReleasesIcon from '@mui/icons-material/NewReleases';

export const Cards = ({vehicleRunningCount, vehicleStoppedCount, vehicleOverspeedCount, vehicleIdleCount, vehicleUnreachableCount}) => {
  return (
    
    <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
      {/* Running */}
      <Card sx={{ width: 200, margin: '10px' }}>
        <CardContent>
          <Box sx={{ display: 'flex', alignItems: 'center', backgroundColor: green[200], padding: 1, borderRadius: 5, marginBottom: 1 }}>
            <AccessTimeIcon sx={{ color: green[500], marginRight: 1 }} />
            <Typography sx={{ fontSize: 20 }}>Running</Typography>
          </Box>
          <Typography variant="h6" sx={{ color: green[500] }}>{vehicleRunningCount}/Assets</Typography>
        </CardContent>
      </Card>

      {/* Stopped */}
      <Card sx={{ width: 200, margin: '10px' }}>
        <CardContent>
          <Box sx={{ display: 'flex', alignItems: 'center', backgroundColor: red[200], padding: 1, borderRadius: 5, marginBottom: 1 }}>
            <StopIcon sx={{ color: red[500], marginRight: 1 }} />
            <Typography sx={{ fontSize: 20 }}>Stopped</Typography>
          </Box>
          <Typography variant="h6" sx={{ color: red[500] }}>{vehicleStoppedCount}/Assets</Typography>
        </CardContent>
      </Card>

      {/* Overspeed */}
      <Card sx={{ width: 200, margin: '10px' }}>
        <CardContent>
          <Box sx={{ display: 'flex', alignItems: 'center', backgroundColor: orange[200], padding: 1, borderRadius: 5, marginBottom: 1 }}>
            <SpeedIcon sx={{ color: orange[500], marginRight: 1 }} />
            <Typography sx={{ fontSize: 20 }}>Overspeed</Typography>
          </Box>
          <Typography variant="h6" sx={{ color: orange[500] }}>{vehicleOverspeedCount}/Assets</Typography>
        </CardContent>
      </Card>

      {/* Idle */}
      <Card sx={{ width: 200, margin: '10px' }}>
        <CardContent>
          <Box sx={{ display: 'flex', alignItems: 'center', backgroundColor: yellow[200], padding: 1, borderRadius: 5, marginBottom: 1 }}>
            <HourglassEmptyIcon sx={{ color: yellow[500], marginRight: 1 }} />
            <Typography sx={{ fontSize: 20 }}>Idle</Typography>
          </Box>
          <Typography variant="h6" sx={{ color: yellow[500] }}>{vehicleIdleCount}/Assets</Typography>
        </CardContent>
      </Card>

      {/* Unreachable */}
      <Card sx={{ width: 200, margin: '10px' }}>
        <CardContent>
          <Box sx={{ display: 'flex', alignItems: 'center', backgroundColor: blue[200], padding: 1, borderRadius: 5, marginBottom: 1 }}>
            <ErrorIcon sx={{ color: blue[500], marginRight: 1 }} />
            <Typography sx={{ fontSize: 20 }}>Unreachable</Typography>
          </Box>
          <Typography variant="h6" sx={{ color: blue[500] }}>{vehicleUnreachableCount}/Assets</Typography>
        </CardContent>
      </Card>

      {/* New */}
      <Card sx={{ width: 200, margin: '10px' }}>
        <CardContent>
          <Box sx={{ display: 'flex', alignItems: 'center', backgroundColor: grey[200], padding: 1, borderRadius: 5, marginBottom: 1 }}>
            <NewReleasesIcon sx={{ color: grey[500], marginRight: 1 }} />
            <Typography sx={{ fontSize: 20 }}>New</Typography>
          </Box>
          <Typography variant="h6" sx={{ color: grey[500] }}>00/Assets</Typography>
        </CardContent>
      </Card>
    </Box>
  );
};
