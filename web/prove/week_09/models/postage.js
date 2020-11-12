/*******************************************************************************
 * model
 ******************************************************************************/

'use strict';

var _ = require('underscore');

class Postage {
    constructor(options) {
        this.data   = options.data;
        this.type   = options.type;
        this.weight = options.weight;
    }

    setRate() {
        let postage = _.find(this.data[this.type], key => {
            return key.weight === parseFloat(this.weight);
        }).postage;

        this.postage = postage;
    }
}

module.exports = Postage;
