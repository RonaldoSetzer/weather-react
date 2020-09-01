const initialState = {
  url: '',
};

function background(state = initialState, action) {
  switch (action.type) {
    case '@background/IMAGE_UPDATE':
      return { ...action.image };
    default:
      return state;
  }
}

export default background;
