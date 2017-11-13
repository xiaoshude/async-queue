### when you need this

- want your ajax request cachable by arguments?

- a request must be send before others?

now here you are.

async-queue sends every request for you and provides arguments-based cache.
Otherwise, we guarantee the order of your request which just meet your needs.

### how to use

```
import * as requestFuncs from './plaza'

import {requestInit} from '../request/index'

requestInit(requestFuncs /* object listed all your requests*/, fasle /* disable queue ?*/, 'firstRequest'/*the function which sends request before others*/);
```



that's all.

you needn't care about if the first request has finished or be sent anymore.
call the function and async-queue send the request on the right time for you


### notes
- every function in `requestFuncs` you pass to `requestInit` must return a promise

- until now, async-queue only supports an order -- a request before others

