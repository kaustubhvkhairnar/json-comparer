import React, { useState } from 'react';
import {
  ThemeProvider,
  createTheme,
} from '@mui/material/styles';
import {
  CssBaseline,
  Container,
  Paper,
  Switch,
  Typography,
  Button,
  Box,
  CircularProgress,
  Collapse,
} from '@mui/material';
import JsonInput from './JsonInput';
import ComparisonResult from './ComparisonResult';

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
      const diffs = getDifferences(obj1, obj2);
      setDifferences(diffs);
      setLoading(false);
      setShowResult(true);
    }, 1000); // 1-second delay
  };

  // Recursive function to find differences
  const getDifferences = (obj1, obj2, path = '') => {
    const changes = [];
    const keys = new Set([
      ...Object.keys(obj1 || {}),
      ...Object.keys(obj2 || {}),
    ]);

    keys.forEach((key) => {
      const value1 = obj1 ? obj1[key] : undefined;
      const value2 = obj2 ? obj2[key] : undefined;
      const currentPath = path ? `${path}.${key}` : key;

      if (
        typeof value1 === 'object' &&
        value1 !== null &&
        typeof value2 === 'object' &&
        value2 !== null
      ) {
        changes.push(...getDifferences(value1, value2, currentPath));
      } else if (value1 !== value2) {
        if (value1 === undefined) {
          changes.push({
            type: 'added',
            key: currentPath,
            value: value2,
          });
        } else if (value2 === undefined) {
          changes.push({
            type: 'removed',
            key: currentPath,
            value: value1,
          });
        } else {
          changes.push({
            type: 'changed',
            key: currentPath,
            value1,
            value2,
          });
        }
      }
    });

    return changes;
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container
        maxWidth="md"
        sx={{ pt: 4, pb: 4 }}
      >
        <Paper sx={{ p: 2 }}>
          <Typography
            variant="h4"
            gutterBottom
          >
            JSON Comparer Tool
          </Typography>
          <Box
            display="flex"
            alignItems="center"
            mb={2}
          >
            <Switch
              checked={darkMode}
              onChange={() => setDarkMode(!darkMode)}
            />
            <Typography variant="body1">
              Dark Mode
            </Typography>
          </Box>
          <JsonInput
            json1={json1}
            setJson1={setJson1}
            json2={json2}
            setJson2={setJson2}
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
    </ThemeProvider>
  );
}

export default App;
