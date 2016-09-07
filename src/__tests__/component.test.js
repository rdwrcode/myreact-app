import React from 'react';
import renderer from 'react-test-renderer';
import { fromJS } from 'immutable';
import { Weather } from '../Weather';
import Plot from '../Plot.js';

describe('component', function() {

  describe('<Weather />', function() {
    it('renders correctly', function() {
      var tree = renderer.create(<Weather redux={fromJS({})} />).toJSON();
      expect(tree).toMatchSnapshot();
    });
  });

  describe('<Plot />', function() {
    global.Plotly = {
      newPlot: () => {}
    };

    global.document = {
      getElementById: function() { 
        return {
          on: function() {}
        };
      }
    };

    it('renders correctly', function() {
      const tree = renderer.create(<Plot xData={fromJS({})} yData={fromJS({})} />).toJSON();
      expect(tree).toMatchSnapshot();
    });
  });

});