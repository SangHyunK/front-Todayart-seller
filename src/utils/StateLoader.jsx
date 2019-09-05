class StateLoader {
  loadState() {
    try {
      let state = localStorage.getItem("manage");
      if (state !== undefined && state !== null) {
        return JSON.parse(state);
      }
    } catch (error) {
      console.log('error', error)
    }
    return this.initialState();
  }

  saveState(state) {
    try {
      let json = JSON.stringify(state);
      localStorage.setItem("manage", json);
    } catch (error) {
      console.log('error', error)
    }
  }

  initialState() {
    return {
      auth: {
        retryCount: 0,
        token: null,
        userDetails: null,
        isLogin:false
      },
      seller:{
        sales:null,
        salesDetail:null,
        shipping:null,
        shippingDetail:null
      }
    };
  }
}

export default StateLoader;
