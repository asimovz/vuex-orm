import Model, { Fields } from 'app/Model'

export default class Account extends Model {
  static entity = 'accounts'

  static fields () {
    return {
      id: this.attr(null),
      user_id: this.attr(null)
    }
  }
}
