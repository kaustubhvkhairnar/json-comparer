import React from 'react';
import {
  Grid,
  Button,
  Box,
  IconButton,
} from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';
import CodeMirror from '@uiw/react-codemirror';
import { json } from '@codemirror/lang-json';
import { oneDark } from '@codemirror/theme-one-dark';

function JsonInput({
  json1,
  setJson1,
  json2,
  setJson2,
  darkMode,
}) {
  const handleFileUpload = (e, setJson) => {
    const file = e.target.files[0];
    if (file) {
      file.text().then((text) => {
        try {
          const formattedJson = JSON.stringify(
            JSON.parse(text),
            null,
            2
          );
          setJson(formattedJson);
        } catch {
          alert('Invalid JSON in file.');
        }
      });
    }
  };

  const handleClear = (setJson) => {
    setJson('');
  };

  const handlePaste = (e, setJson) => {
    const pasteData = e.clipboardData.getData('text');
    try {
      const jsonObj = JSON.parse(pasteData);
      const formattedJson = JSON.stringify(jsonObj, null, 2);
      e.preventDefault();
      setJson(formattedJson);
    } catch {
      // Not valid JSON, do nothing
    }
  };

  return (
    <Grid
      container
      spacing={2}
      sx={{ mt: 2 }}
    >
      <Grid item xs={12} md={6}>
        <Box position="relative">
          <CodeMirror
            value={json1}
            extensions={[json()]}
            theme={darkMode ? oneDark : 'light'}
            height="300px"
            onChange={(value) => setJson1(value)}
            onPaste={(e) => handlePaste(e, setJson1)}
          />
          <IconButton
            onClick={() => handleClear(setJson1)}
            size="small"
            sx={{ position: 'absolute', top: 0, right: 0 }}
          >
            <ClearIcon fontSize="small" />
          </IconButton>
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
        </Box>
      </Grid>
      <Grid item xs={12} md={6}>
        <Box position="relative">
          <CodeMirror
            value={json2}
            extensions={[json()]}
            theme={darkMode ? oneDark : 'light'}
            height="300px"
            onChange={(value) => setJson2(value)}
            onPaste={(e) => handlePaste(e, setJson2)}
          />
          <IconButton
            onClick={() => handleClear(setJson2)}
            size="small"
            sx={{ position: 'absolute', top: 0, right: 0 }}
          >
            <ClearIcon fontSize="small" />
          </IconButton>
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
        </Box>
      </Grid>
    </Grid>
  );
}

export default JsonInput;
