export const convertBufferToString = (data: Buffer) => {
  return '\\x' + data.toString('hex');
};

export const convertStringToBuffer = (data: string) => {
  return Buffer.from(data, 'hex');
};
