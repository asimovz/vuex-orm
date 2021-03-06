# Database And Registration

To register Models and Modules to the Vuex, you must first create Database, register Models along with Modules to the Database, and then register Database to the Vuex through Vuex ORM `install` method.

```js
import Vue from 'vue'
import Vuex from 'vuex'
import { install as VuexORMInstall, Database } from 'vuex-orm'
import User from './User'
import Post from './Post'
import users from 'users'
import posts from 'posts'

Vue.use(Vuex)

// Create new instance of Database.
const database = new Database()

// Register Model and Module. The first argument is the Model, and second
// is the Module.
database.register(User, users)
database.register(Post, posts)

// Create Vuex Store and register database through Vuex ORM.
const store = new Vuex.Store({
  plugins: [VuexORMInstall(database)]
})

export default store
```

## Changing The Namespace

By default, Vuex ORM creates a module named `entities` in Vuex Store. All modules and data handled by Vuex ORM are going to be stored under this namespace.

If you would like to change the module name, pass `namespace` option to the `install` method when registering Vuex ORM as a plugin.

```js
const store = Vuex.Store({
  plugins: [VuexORMInstall(database, { namespace: 'my_entities' })]
})
```

With above example, you can access the Vuex Store with `store.state.my_entities`.
