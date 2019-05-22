import React from 'react';
import loadable from '@loadable/component';


const LoadableComponent = loadable(() => import(/* webpackChunkName: "de" */'./App'));

export default class LoadableDashboard extends React.Component {
    render() {
      return <LoadableComponent />;
    }
  }

// export default LoadableDashboard;