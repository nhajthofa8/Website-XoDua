/* eslint-disable jsx-a11y/iframe-has-title */
import React from 'react';

const Mapspage = () => {
  return (
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3927.7541370093113!2d106.32030077450973!3d10.119200070973354!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31a00934f84b5989%3A0xaad8958bbd4bbef6!2zNyBYdcOibg!5e0!3m2!1svi!2s!4v1717578915280!5m2!1svi!2s"
      width="1510"
      height="600"
      style={{ border: 0 }}
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    />
  );
}

export default Mapspage;
