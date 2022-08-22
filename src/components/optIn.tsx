import React from 'react';
const { useCookies } = require('react-cookie');
import Checkbox from '@mui/material/Checkbox';
import Typography from '@mui/material/Typography';
import FormControlLabel from '@mui/material/FormControlLabel';
import { useEffect, useState } from 'react';

const OptIn: React.FC<{
  doNotTrack: IOptIn['doNotTrack'];
  trackMe: IOptIn['trackMe'];
}> = ({ doNotTrack, trackMe }) => {
  const [cookies, setCookie, removeCookie] = useCookies(['tracker']);

  const [checked, setChecked] = useState<boolean>(true);
  useEffect(() => {
    if (cookies.tracker) {
      setChecked(true);
    }
    if (!cookies.tracker) {
      setChecked(false);
    }
  }, []);

  const label = {
    inputProps: {
      'aria-label': 'case à cocher pour désactiver/activer le suivi',
    },
  };

  const handleCheck = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      setCookie('tracker', 'notracking', { maxAge: 31536000, sameSite: true });
      setChecked(true);
    }
    if (!event.target.checked) {
      removeCookie('tracker');
      setChecked(false);
    }
  };

  return (
    <div>
      <p>{cookies.tracker ? doNotTrack : trackMe}</p>
      <FormControlLabel
        control={
          <Checkbox checked={checked} onChange={handleCheck} {...label} />
        }
        label={
          <Typography sx={{ fontSize: 18, fontFamily: 'Sora' }}>
            {!cookies.tracker
              ? 'Cochez pour désactiver le suivi'
              : 'Décochez pour activer le suivi'}
          </Typography>
        }
      />
    </div>
  );
};

export default OptIn;
