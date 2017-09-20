/**
 * Created by zhangheng on 2017/8/25.
 */
import fetch from 'isomorphic-unfetch'

export async function getProducts() {
  const res = await fetch('https://api.github.com/repositories')
  const data = await res.json()
  return {
    results: data
  }
}


export async function getCustomers() {
  const res = await fetch('https://api.github.com/users/aeron11/following')
  const data = await res.json()
  return {
    results: data
  }
}

export async function getProfile() {
  const res = await fetch('https://api.github.com/users/aeron11')
  const data = await res.json()
  return {
    results: data
  }
}
