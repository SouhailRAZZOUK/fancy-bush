// https://github.com/zalmoxisus/redux-devtools-extension/blob/master/docs/API/Arguments.md#maxage
const envMaxAge = parseInt(process.env.REDUX_MAX_AGE, 10);
const options = {
  maxAge: Number.isNaN(envMaxAge) ? 50 : envMaxAge,
};

export default options;
