import React from 'react';
import chai, { expect } from 'chai';
import Root from './index';
import { shallow } from 'enzyme';
import { createStore, createHistory } from '../config';

describe('root', () => {
  let mockStore, mockHistory;

  beforeEach(() => {
    mockStore = createStore();
    mockHistory = createHistory(mockStore);
  });

  it('use the provided store to load a provider', () => {
    const result = shallow(<Root store={ mockStore } history={ mockHistory } />);

    expect(result.find('Provider').prop('store', mockStore)).to.be.truthy;
    expect(result.find('Routes').prop('history', mockHistory)).to.be.truthy;
  });
});
