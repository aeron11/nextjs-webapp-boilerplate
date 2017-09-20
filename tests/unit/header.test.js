/**
 * Created by zhangheng on 2017/9/1.
 */
import React from 'react';
import Header from '../../components/Common/Header';

import {shallow} from 'enzyme';

test('Header changes the text after click', () => {
  const header = shallow(
    <Header/>
  );

  it('fails toHaveClassName', () => {
    expect(shallow(header).find('.header-container')).not.toHaveClassName('header1');
  });

  it('fails NOT toHaveClassName', () => {
    expect(shallow(header).find('.header-container')).toHaveClassName('header');
  });
});
