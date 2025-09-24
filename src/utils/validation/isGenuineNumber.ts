function isGenuineIndianPhoneNumber(phoneNumber: any) {
  const digits = String(phoneNumber).replace(/\D/g, '');

  // Must be 10 digits, starting with 6-9
  if (!/^[6-9]\d{9}$/.test(digits)) {
    return false;
  }

  // Reject numbers where all 10 digits are the same (e.g. 9999999999)
  if (/^(\d)\1{9}$/.test(digits)) {
    return false;
  }

  // Reject full sequential numbers (1234567890 or 9876543210)
  if (digits === "1234567890" || digits === "9876543210") {
    return false;
  }

  return true;
}


export default isGenuineIndianPhoneNumber