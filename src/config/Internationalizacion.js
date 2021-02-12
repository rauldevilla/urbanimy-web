import { Configuration } from './Constants';

class Internationalization {

    getLabel = (labelName) => {
        return Configuration.INTERNATIONALIZATION.LABELS[labelName];
    }
}

export default Internationalization;