import { Configuration } from './Constants';

class Internationalization {

    getLabel = (labelName) => {
        return Configuration.INTERNATIONALIZATION.LABELS[labelName];
    }

    formatTag = (tag) => {
        return "_$" + tag + "$_";
    }

    getLabelTagged = (labelName, tags) => {
        var label = this.getLabel(labelName);
        if (tags == null || tags === "undefined") {
            return label;
        }
        var _tags = [];
        Array.prototype.push.apply(_tags, tags);
        _tags.forEach(t => {
                var formattedTag = this.formatTag(t.tag);
                label = label.replaceAll(formattedTag, t.value);
            }
        );
        return label;
    }

}

export default Internationalization;