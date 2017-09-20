/**
 * Created by zhangheng on 2017/9/5.
 */
export function setCookie(cname, cvalue, exdays) {
  let d = new Date();
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
  let expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + "HttpOnly;" + ";path=/";
}

export function getCookie(cname) {
  let name = cname + "=";
  let ca = document.cookie.split(';');
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) === 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

export function changePathToKey(path) {
  //such as:/basic/certificates
  if (!path)
    return ''

  let arr = path.split('/')
  if (path.charAt(0) === '/') {
    return arr[1] + '.' + arr[2];
  } else {
    return arr[0] + '.' + arr[1];
  }
}
