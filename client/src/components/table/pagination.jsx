import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import "./pagination.scss"

export default function PaginationRounded() {
  return (
    <Stack spacing={2}>
      <Pagination variant="outlined" shape= "rounded" count={13} defaultPage={1} hidePrevButton/>
    </Stack>
  );
}
