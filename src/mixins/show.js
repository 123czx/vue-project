export const showMixins = {
    
    data() {
      return {
        show: true
      }
    },
    methods: {
      toggleShow() {
        this.show = !this.show;
      }
    }
  }