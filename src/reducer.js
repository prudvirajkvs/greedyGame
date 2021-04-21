const init_state = {
  apps_list: [],
  app_stats: [],
  sample_stats: [],
  app_name: '',
  app_id: '',
  //stats kooda array ne ga? ok ok
};

export const actionTypes = {
  SET_APPS_LIST: 'SET_APPS_LIST',
  SET_APP_STATS: 'SET_APP_STATS',
  SET_SAMPLE_STATS: 'SET_SAMPLE_STATS',
  SET_APP_NAME: 'SET_APP_NAME',
  SET_APP_ID: 'SET_APP_ID',
};

export const reducer = (state = init_state, action) => {
  switch (action.type) {
    case actionTypes.SET_APPS_LIST: {
      return {
        ...state,
        apps_list: action.list,
      };
    }
    case actionTypes.SET_APP_STATS: {
      return {
        ...state,
        app_stats: action.stats,
      };
    }
    case actionTypes.SET_SAMPLE_STATS: {
      return {
        ...state,
        sample_stats: action.sample_stats,
      };
    }
    case actionTypes.SET_APP_NAME: {
      return {
        ...state,
        app_name: action.name,
      };
    }
    case actionTypes.SET_APP_ID: {
      return {
        ...state,
        app_id: action.id,
      };
    }
    default: {
      return state;
    }
  }
};
