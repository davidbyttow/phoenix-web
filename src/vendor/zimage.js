
export const makeImageUrl = (url, options = {
  width: 0,
  height: 0,
  blur: 0,
  mode: 'crop',
}) => {
  const { width, height, blur, mode } = options;
  url = `https://api.zimage.io?url=${encodeURIComponent(url)}`;
  if (width > 0) {
    url = `${url}&w=${width}`;
  }
  if (height > 0) {
    url = `${url}&h=${height}`;
  }
  if (blur > 0) {
    url = `${url}&blur=${blur}`;
  }
  if (mode) {
    url = `${url}&mode=${mode}`;
  }
  return url;
};
