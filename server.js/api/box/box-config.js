let BoxSDK = require("box-node-sdk");
var config = require("path/to/config.json");

let sdk = BoxSDK.getPreconfiguredInstance(config);
let client = sdk.getAppAuthClient("enterprise");
