export default {
  state: {
    backColor: '#000000',
    color: '#ffffff'
  },
  mutations: {
    setStyle(state: any, val: any) {
      state.backColor = val.backColor
      state.color = val.color
    }
  }
}
