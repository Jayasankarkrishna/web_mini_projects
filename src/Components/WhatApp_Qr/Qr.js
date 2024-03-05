// WhatsAppQRCode.js

import React from 'react';
import QRCode from 'qrcode.react';

const WhatsAppQRCode = () => {
  // WhatsApp group link
  const whatsappGroupLink = "https://chat.whatsapp.com/Lm5XVi10BHEJJvuYd7RbTE";

  return (
    <div>
      <h2>Scan the QR code to join our WhatsApp group:</h2>
      <QRCode value={whatsappGroupLink} />
    </div>
  );
};

export default WhatsAppQRCode;
