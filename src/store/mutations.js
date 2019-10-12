/* 操作 */

import * as types from './mutation-types'

const mutations = {
  // [types.SET_SINGER] 方法名 (state, singer)参数
  [types.SET_SINGER](state, singer) {
    state.singer = singer
  }
}

export default mutations