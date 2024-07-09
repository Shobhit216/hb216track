// import React, { useState, useEffect } from 'react';
// import { Button, Modal, Box, Typography } from '@mui/material';
// import { DateRangePicker } from '@mui/x-date-pickers-pro/DateRangePicker';
// import 'date-fns';
// import TextField from '@mui/material/TextField';
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
// import Tooltip from '@mui/material/Tooltip';
// import Stack from '@mui/material/Stack';
// import { styled } from '@mui/material/styles';

// const ProSpan = styled('span')({
//   display: 'inline-block',
//   height: '1em',
//   width: '1em',
//   verticalAlign: 'middle',
//   marginLeft: '0.3em',
//   marginBottom: '0.08em',
//   backgroundSize: 'contain',
//   backgroundRepeat: 'no-repeat',
//   backgroundImage: 'url(https://mui.com/static/x/pro.svg)',
// });


// const style = {
//   height: '400px',
//   width: '100%',
//   marginBottom:'100px'
// };
// function Label({ componentName, valueType, isProOnly }) {
//   const content = (
//     <span>
//       <strong>{componentName}</strong> for {valueType} editing
//     </span>
//   );

//   if (isProOnly) {
//     return (
//       <Stack direction="row" spacing={0.5} component="span">
//         <Tooltip title="Included on Pro package">
//           <a
//             href="https://mui.com/x/introduction/licensing/#pro-plan"
//             aria-label="Included on Pro package"
//           >
//             <ProSpan />
//           </a>
//         </Tooltip>
//         {content}
//       </Stack>
//     );
//   }

//   return content;
// }

// export const Googlemap = ({ lati, longi, locationHistory }) => {
//   const [zoom, setZoom] = useState(16);
//   const [open, setOpen] = useState(false);
//   const [dateRange, setDateRange] = useState([null, null]);
//   const [filteredHistory, setFilteredHistory] = useState([]);
//   const [playback, setPlayback] = useState(false);
//   const [currentIndex, setCurrentIndex] = useState(0);

//   useEffect(() => {
//     if (playback && filteredHistory.length > 0) {
//       const timer = setInterval(() => {
//         setCurrentIndex((prev) => {
//           if (prev < filteredHistory.length - 1) {
//             return prev + 1;
//           } else {
//             setPlayback(false);
//             return prev;
//           }
//         });
//       }, 1000); // Update this interval for playback speed

//       return () => clearInterval(timer);
//     }
//   }, [playback, filteredHistory]);

//   const handleOpen = () => setOpen(true);
//   const handleClose = () => setOpen(false);

//   const handleDateRangeChange = (newValue) => {
//     setDateRange(newValue);
//     if (newValue[0] && newValue[1]) {
//       const [start, end] = newValue;
//       const filtered = locationHistory.filter(
//         (entry) =>
//           new Date(entry.timestamp) >= start && new Date(entry.timestamp) <= end
//       );
//       setFilteredHistory(filtered);
//     }
//   };

//   return (
//     <div style={{ height: '500px', width: '100%' }}>
//       <iframe
//         src={`https://maps.google.com/maps?q=${lati},${longi}&z=${zoom}&output=embed`}
//         style={{ border: 0, height: '100%', width: '100%' }}
//         allowFullScreen
//         loading="lazy"
//         referrerPolicy="no-referrer-when-downgrade"
//         title="google map"
//       ></iframe>
//       <Button variant="contained" onClick={handleOpen} style={{ marginTop: '10px' }}>
//         History
//       </Button>
//       <Modal open={open} onClose={handleClose}>
//       <LocalizationProvider dateAdapter={AdapterDayjs}>
//       <DemoContainer
//         components={[
          
//           'DateRangePicker',
//         ]}
//       >
        
//         <DemoItem
//           label={
//             <Label
//               componentName="DateRangePicker"
//               valueType="date range"
//               isProOnly
//             />
//           }
//           component="DateRangePicker"
//         >
//           <DateRangePicker
//             localeText={{
//               start: '',
//               end: '',
//             }}
//           />
//         </DemoItem>
//       </DemoContainer>
//     </LocalizationProvider>
//       </Modal>
//     </div>
//   );
// };

import {React, useState} from 'react';

export const Googlemap = ({lati,longi}) => {
  const [zoom, setZoom] = useState(16);
  return (
    <div style={{ height: '500px', width: '100%' }}>
      <iframe
        src={`https://maps.google.com/maps?q=${lati},${longi}&z=${zoom}&output=embed`}
        style={{ border: 0, height: '100%', width: '100%' }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="google map"
      ></iframe>
    </div>
  );
}