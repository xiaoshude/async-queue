/**
 * Created by fjywan on 2017/10/27.
 */
// 标识 getScreenInfo 请求完成状态
let finish = false;
// 在 getScreenInfo 之前发起的请求要缓存在队列里
let queue = [];

export function getFinish() {
  console.log('getFinish', finish);

  return finish
}
export function setFinish(val) {
  finish = !!val;
  console.log('setFinish', finish);
}

export function joinQueue(arg) {
  queue.push(arg);
}

export function getQueue() {
  return queue;
}

export function clearQueue() {
  queue = [];
}