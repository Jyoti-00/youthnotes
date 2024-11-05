import React, { useState, useEffect } from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

const PasswordFormContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: '100vh',
  backgroundColor: theme.palette.background.default,
  padding: theme.spacing(4),
  borderRadius: theme.shape.borderRadius,
  boxShadow: theme.shadows[3],
}));

const PasswordProtection: React.FC<{ onAuthSuccess: () => void }> = ({ onAuthSuccess }) => {
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const isAuthenticated = localStorage.getItem('authenticated');
    if (isAuthenticated === 'true') {
      setIsAuthenticated(true);
      onAuthSuccess(); // Trigger callback when already authenticated
    }
  }, [onAuthSuccess]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === '43084') { // Replace 'yourpassword' with your actual password
      setIsAuthenticated(true);
      localStorage.setItem('authenticated', 'true');
      setError('');
      onAuthSuccess(); // Trigger callback when authenticated
    } else {
      setError('Incorrect password. Please try again.');
    }
  };

  if (isAuthenticated) {
    return null; // Render nothing once authenticated (let the app render)
  }

  return (
    <PasswordFormContainer>
      <Typography variant="h4" gutterBottom>
        Password Required
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          type="password"
          label="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          variant="outlined"
          fullWidth
          margin="normal"
        />
        {error && (
          <Typography variant="body2" color="error" gutterBottom>
            {error}
          </Typography>
        )}
        <Button type="submit" variant="contained" color="primary">
          Submit
        </Button>
      </form>
    </PasswordFormContainer>
  );
};

export default PasswordProtection;
