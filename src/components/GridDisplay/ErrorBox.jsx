import React from 'react';
import Alert from 'react-bootstrap/Alert'

const ErrorBox = React.memo((e) => {
  return (
    !e.error ? <></> : 
      <Alert variant="danger">
        <Alert.Heading>出現錯誤</Alert.Heading>
        <p>
          錯誤訊息: 
          {e.error && e.error.response && e.error.response.data && e.error.response.data.message}
        </p>
      </Alert>
  )
}, )

export default ErrorBox