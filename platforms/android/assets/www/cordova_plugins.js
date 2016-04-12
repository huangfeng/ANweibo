cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/cordova-plugin-weibosdk/www/ycweibo.js",
        "id": "cordova-plugin-weibosdk.ycweibo",
        "clobbers": [
            "YCWeibo"
        ]
    },
    {
        "file": "plugins/cordova-plugin-whitelist/whitelist.js",
        "id": "cordova-plugin-whitelist.whitelist",
        "runs": true
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-weibosdk": "0.3.4",
    "cordova-plugin-whitelist": "1.2.1"
};
// BOTTOM OF METADATA
});