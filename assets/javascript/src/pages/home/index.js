import RandWords from './modules/randomWords';
import Abstract from './modules/abstract';

/**
 * Home page
 */
class Home {
    /**
     * Home page constructor
     */
    constructor() {
        this.initModules();
    }
    /**
     *  Method for init plugins
     */
    initModules() {
        new RandWords();
        Abstract();
    }
}
new Home();
