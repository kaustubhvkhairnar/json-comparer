import React from 'react';
import {
  Grid,
  TextField,
  Button,
} from '@mui/material';

function JsonInput({
  json1,
  setJson1,
  json2,
  setJson2,
}) {
  const handleFileUpload = (e, setJson) => {
    const file = e.target.files[0];
    if (file) {
      file.text().then((text) => {
        setJson(text);
      });
    }
  };

  return (
    <Grid
      container
      spacing={2}
      sx={{ mt: 2 }}
    >
      <Grid item xs={12} md={6}>
        <TextField
          label="JSON Input 1"
          multiline
          fullWidth
          variant="outlined"
          value={json1}
          onChange={(e) => setJson1(e.target.value)}
          inputProps={{
            style: {
              height: '300px',
              overflowY: 'scroll',
            },
          }}
        />
        <input
          accept=".json"
          style={{ display: 'none' }}
          id="upload-json1"
          type="file"
          onChange={(e) => handleFileUpload(e, setJson1)}
        />
        <label htmlFor="upload-json1">
          <Button
            variant="outlined"
            component="span"
            size="small"
            sx={{ mt: 1 }}
          >
            Upload JSON File
          </Button>
        </label>
      </Grid>
      <Grid item xs={12} md={6}>
        <TextField
          label="JSON Input 2"
          multiline
          fullWidth
          variant="outlined"
          value={json2}
          onChange={(e) => setJson2(e.target.value)}
          inputProps={{
            style: {
              height: '300px',
              overflowY: 'scroll',
            },
          }}
        />
        <input
          accept=".json"
          style={{ display: 'none' }}
          id="upload-json2"
          type="file"
          onChange={(e) => handleFileUpload(e, setJson2)}
        />
        <label htmlFor="upload-json2">
          <Button
            variant="outlined"
            component="span"
            size="small"
            sx={{ mt: 1 }}
          >
            Upload JSON File
          </Button>
        </label>
      </Grid>
    </Grid>
  );
}

export default JsonInput;
