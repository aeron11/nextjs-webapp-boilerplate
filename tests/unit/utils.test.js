/**
 * Created by zhangheng on 2017/3/29.
 */
import * as utils from '../../utils/utils';

describe('test getCookie method', () => {
  let co = utils.getCookie('nothing');
  it('should not any cookie be exist', () => {
    expect(co).toEqual('');
  });
});

describe('test setCookie method', () => {
  utils.setCookie('testKey', 'testVal', 1);
  let val = utils.getCookie('testKey');
  it('the value of cookie should be testVal', () => {
    expect(val).toEqual('testVal');
  });
});



