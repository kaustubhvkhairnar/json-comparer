import React, { useState } from 'react';
import {
  ThemeProvider,
  createTheme,
} from '@mui/material/styles';
import {
  CssBaseline,
  Container,
  Paper,
  Typography,
  Button,
  Box,
  CircularProgress,
  Collapse,
  AppBar,
  Toolbar,
  Switch,
} from '@mui/material';
import JsonInput from './JsonInput';
import ComparisonResult from './ComparisonResult';
import Wave from './Wave'; // Import the Wave component

function App() {
  const [json1, setJson1] = useState('');
  const [json2, setJson2] = useState('');
  const [differences, setDifferences] = useState([]);
  const [darkMode, setDarkMode] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showResult, setShowResult] = useState(false);

  // Create MUI theme with dark mode toggle
  const theme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
    },
    spacing: 2, // Smaller padding
  });

  // Function to compare JSONs
  const handleCompare = () => {
    let obj1, obj2;
    try {
      obj1 = JSON.parse(json1);
    } catch (e) {
      alert('First JSON is invalid!');
      return;
    }
    try {
      obj2 = JSON.parse(json2);
    } catch (e) {
      alert('Second JSON is invalid!');
      return;
    }

    setLoading(true);
    setShowResult(false);

    // Simulate a delay for the animation
    setTimeout(() => {
      const diffs = getDifferencesWithLineNumbers(json1, json2);
      setDifferences(diffs);
      setLoading(false);
      setShowResult(true);
    }, 1000); // 1-second delay
  };

  // Function to get differences with line numbers
  const getDifferencesWithLineNumbers = (text1, text2) => {
    const { diffLines } = require('diff');
    const diffs = diffLines(text1, text2);
    let lineNumber1 = 1;
    let lineNumber2 = 1;
    const changes = [];
    diffs.forEach((part) => {
      const lines = part.value.split('\n');
      const lineCount = lines.length - 1;

      if (part.added) {
        changes.push({
          type: 'added',
          value: part.value,
          lineNumber: lineNumber2,
        });
        lineNumber2 += lineCount;
      } else if (part.removed) {
        changes.push({
          type: 'removed',
          value: part.value,
          lineNumber: lineNumber1,
        });
        lineNumber1 += lineCount;
      } else {
        lineNumber1 += lineCount;
        lineNumber2 += lineCount;
      }
    });
    return changes;
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ position: 'relative', minHeight: '100vh' }}>
        <Wave />
        <AppBar
          position="static"
          elevation={0}
          sx={{
            background: 'transparent',
            boxShadow: 'none',
          }}
        >
          <Toolbar>
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, textAlign: 'center' }}
            >
              JSON Comparer Tool
            </Typography>
            <Switch
              checked={darkMode}
              onChange={() => setDarkMode(!darkMode)}
              color="default"
            />
          </Toolbar>
        </AppBar>
        <Container
          maxWidth="md"
          sx={{ pt: 4, pb: 4, position: 'relative', zIndex: 1 }}
        >
          <Paper
            sx={{
              p: 2,
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            <JsonInput
              json1={json1}
              setJson1={setJson1}
              json2={json2}
              setJson2={setJson2}
              darkMode={darkMode}
            />
            <Box
              position="relative"
              display="inline-flex"
              sx={{ mt: 2 }}
            >
              <Button
                variant="contained"
                color="primary"
                onClick={handleCompare}
                disabled={loading}
              >
                Compare
              </Button>
              {loading && (
                <CircularProgress
                  size={24}
                  sx={{
                    color: 'primary.main',
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    marginTop: '-12px',
                    marginLeft: '-12px',
                  }}
                />
              )}
            </Box>
            <Collapse in={showResult}>
              <ComparisonResult
                differences={differences}
              />
            </Collapse>
          </Paper>
        </Container>
      </Box>
    </ThemeProvider>
  );
}

export default App;
