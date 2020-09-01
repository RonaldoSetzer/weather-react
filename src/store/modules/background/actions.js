export function updateBackgroundImage(image) {
  return {
    type: '@background/IMAGE_UPDATE',
    image,
  };
}

export function requestBingImageOfDay() {
  return {
    type: '@bing/IMAGE_OF_DAY_REQUEST',
  };
}
