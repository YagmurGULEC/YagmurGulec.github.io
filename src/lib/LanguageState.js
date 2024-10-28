import { EventEmitter } from 'events';


class LanguageState extends EventEmitter {
    constructor() {
      super();
      this.sharedState = "English";
    }
  
    getSharedState() {
      return this.sharedState;
    }
  
    setSharedState(value) {
      this.sharedState = value;
      this.emit('stateChange'); // Notify listeners about the change
    }
  }
  
  // Export a single instance of the class
  const languageState = new LanguageState();
  export default languageState;