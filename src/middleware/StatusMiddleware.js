import { UI_READY } from 'modules/UIModule';

function StatusMiddleware(store) {
  return next => (action) => {
    switch (action.type) {
      case UI_READY:
        appStart(store.dispatch);
        break;
      default:
    }

    return next(action);
  };
}

function appStart() {
  // dispatch(action())
}

export default StatusMiddleware;
