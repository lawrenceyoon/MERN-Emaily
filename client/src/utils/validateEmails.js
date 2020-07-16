// added the comment eslint-disable to fix disable unnecessary escape characters warnings coming from const re
/* eslint-disable */
const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export default (emails) => {
  emails = emails.replace(/,\s*$/, '');
  const invalidEmails = emails.split(",").map(email => email.trim()).filter(email => re.test(email) === false);

  if (invalidEmails.length) {
    return `These emails are invalid: ${invalidEmails}`;
  } else {
    return null;
  }
};