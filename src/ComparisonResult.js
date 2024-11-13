import React from 'react';
import {
  List,
  ListItem,
  ListItemText,
  Typography,
  Paper,
  ListItemIcon,
} from '@mui/material';
import {
  AddCircle,
  RemoveCircle,
} from '@mui/icons-material';

function ComparisonResult({ differences }) {
  if (differences.length === 0) {
    return (
      <Typography variant="body1" sx={{ mt: 2 }}>
        No differences found.
      </Typography>
    );
  }

  return (
    <Paper
      sx={{
        mt: 2,
        maxHeight: '300px',
        overflowY: 'auto',
        padding: 2,
      }}
    >
      <List>
        {differences.map((diff, index) => {
          let text = '';
          let bgColor = '';
          let IconComponent = null;
          let iconColor = '';

          if (diff.type === 'added') {
            text = `Added at line ${diff.lineNumber}: ${diff.value}`;
            bgColor = 'success.light';
            IconComponent = AddCircle;
            iconColor = 'success.main';
          } else if (diff.type === 'removed') {
            text = `Removed at line ${diff.lineNumber}: ${diff.value}`;
            bgColor = 'error.light';
            IconComponent = RemoveCircle;
            iconColor = 'error.main';
          }

          return (
            <ListItem
              key={index}
              sx={{
                padding: '4px 8px',
                backgroundColor: bgColor,
                borderRadius: 1,
                mb: 1,
              }}
            >
              <ListItemIcon>
                <IconComponent
                  sx={{ color: iconColor }}
                />
              </ListItemIcon>
              <ListItemText
                primary={text}
                primaryTypographyProps={{
                  style: {
                    whiteSpace: 'pre-wrap',
                  },
                }}
              />
            </ListItem>
          );
        })}
      </List>
    </Paper>
  );
}

export default ComparisonResult;
