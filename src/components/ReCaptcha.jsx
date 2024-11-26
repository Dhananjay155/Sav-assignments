import { useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

// eslint-disable-next-line react/prop-types
const ReCaptcha = ({ onVerify }) => {
  const [verified, setVerified] = useState(false);

  const handleVerify = (value) => {
    if (value) {
      setVerified(true);
      onVerify(true);
    }
  };

  return (
    <div className="recaptcha-container">
      <ReCAPTCHA
        sitekey="6Lfx2YkqAAAAAAAaDG6xxtLvIR_F31BuQH9CXnel"
        onChange={handleVerify}
      />
    </div>
  );
};

export default ReCaptcha;
