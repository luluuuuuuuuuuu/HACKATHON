import React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import bandera from '../../Assets/flag.png';


const BannerWrapper = styled(Box)(({ theme }) => ({
  backgroundColor: '#E5E5E5',
  color: '#000000',
  padding: theme.spacing(2),
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
    alignItems: 'center',
  },
}));

const BannerText = styled(Typography)(({ theme }) => ({
  fontSize: '1.5rem',
  textAlign: 'center',
  [theme.breakpoints.down('sm')]: {
    fontSize: '1rem',
    marginBottom: theme.spacing(1),
  },
  display: 'flex',
  alignItems: 'center',
}));


const BannerTop = () => {
  return (
    <BannerWrapper>
      <Box display="flex" alignItems="center">
          <img
            src= {bandera}
            alt="Bandera de España"
            style={{ width: 24, height: 24, marginRight: 8 }}
        />
      
        <BannerText variant="h6">
          -15% PARA NUEVOS CLIENTES ¡REGISTRATE AHORA!
        </BannerText>
      </Box>
      <Link href="/ayuda" color="inherit">
        Ayuda
      </Link>
    </BannerWrapper>
  );
};

export default BannerTop;
