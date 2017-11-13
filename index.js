/**
 * Created by fjywan on 2017/10/23.
 */
import {request as requestTypes, init as typeInit} from './type'
import {getFinish, setFinish, getQueue, joinQueue, clearQueue} from './queue'
let api = {}; // 储存所有api请求函数
let cache = {};
let firstRequest;
export function requestInit(requestFuncs, types, isDisableQueue, beforeAll) {
  api = Object.assign({}, requestFuncs);
  typeInit(types);
  if (isDisableQueue) {
    setFinish(true)
  }

  firstRequest = beforeAll;
}
export function doRequest(name, ...rest) {
  return new Promise((resolve, reject) => {
    if (typeof api[name] == 'function') {
      if (cache[[].join.call(arguments, 3)]) {
        resolve(cache[[].join.call(arguments, 3)]);
        return;
      }

      if (getFinish()) {
        api[name](...rest).then(res => {
          cache[[].join.call(arguments, 3)] = res;
          resolve(res)
        }, error => reject(error));
      } else {
        if (name == firstRequest) {
          api[name](...rest).then(res => {
            setFinish(true);

            cache[[].join.call(arguments, 3)] = res;
            resolve(res);

            let queue = getQueue();
            if (queue && queue.length) {
              queue.forEach(requestObj => {
                api[requestObj.name](...requestObj.rest).then(res => {
                  cache[[].join.call([name, ...rest], 3)] = res;
                  requestObj.resolver(res)
                }, error => requestObj.rejecter(error));
              });
              clearQueue();
            }
          }, error => reject(error));
        } else {
          joinQueue({
            name,
            rest,
            resolver: resolve,
            rejecter: reject
          })
        }
      }
    }
  });
}
