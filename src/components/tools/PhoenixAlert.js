import React, { useState } from 'react';
import { Alert, Button } from 'react-bootstrap';

const PhoenixAlert = () => {
  const [show, setShow] = useState(true);

  if (show) {
    return (
      <Alert
        style={{ backgroundColor: '#808ea4' }}
        onClose={() => setShow(false)}
        dismissible>
        <Alert.Heading>
          An important note about the Phoenix Project{' '}
        </Alert.Heading>
        <p>
          Duke Applied Machine Learning is a separate organization that is
          organizing The Phoenix Project. The projects and people on this
          website are for DAML, but can provide a baseline as to what Phoenix
          Projects will look like. Full details about the projects and
          participants of The Phoenix Project coming soon.
        </p>
      </Alert>
    );
  }
  return (
    <Button
      style={{ backgroundColor: '#808ea4', border: 'none' }}
      onClick={() => setShow(true)}>
      An important note about the Phoenix Project
    </Button>
  );
};

export default PhoenixAlert;
