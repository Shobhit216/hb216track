import React from 'react';

export const Googlemap = () => {
  return (
    <div style={{ height: '500px', width: '100%' }}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3721.5813406824304!2d79.10212927503427!3d21.129250980545333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4b8a174000003%3A0xca7a2a490bab565c!2sHB%20GADGET%20TECHNOLOGY%20ND%20SOLUTION%20PVT%20LTD!5e0!3m2!1sen!2sin!4v1717961948157!5m2!1sen!2sin"
        style={{ border: 0, height: '100%', width: '100%' }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}