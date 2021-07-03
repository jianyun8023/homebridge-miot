const AirConditionerDevice = require('../AirConditionerDevice.js');
const AirConditionerProperties = require('../AirConditionerProperties.js');
const Actions = require('../../../constants/Actions.js');
const Constants = require('../../../constants/Constants.js');
const PropFormat = require('../../../constants/PropFormat.js');
const PropUnit = require('../../../constants/PropUnit.js');
const PropAccess = require('../../../constants/PropAccess.js');

// Spec:
// https://miot-spec.org/miot-spec-v2/instance?type=urn:miot-spec-v2:device:air-conditioner:0000A004:lumi-mcn02:1


class LumiAcpartnerMcn02 extends AirConditionerDevice {
  constructor(model, deviceId, name, logger) {
    super(model, deviceId, name, logger);
  }


  /*----------========== INIT ==========----------*/

  initDeviceProperties() {
    // READ/WRITE
    this.addProperty(AirConditionerProperties.POWER, 2, 1, PropFormat.BOOL, PropAccess.READ_WRITE, PropUnit.NONE);
    this.addProperty(AirConditionerProperties.MODE, 2, 2, PropFormat.UINT8, PropAccess.READ_WRITE, PropUnit.NONE, [], [{
        "value": 0,
        "description": "Auto"
      },
      {
        "value": 1,
        "description": "Cool"
      },
      {
        "value": 2,
        "description": "Dry"
      },
      {
        "value": 3,
        "description": "Heat"
      },
      {
        "value": 4,
        "description": "Fan"
      }
    ]);
    this.addProperty(AirConditionerProperties.TARGET_TEMPERATURE, 2, 3, PropFormat.FLOAT, PropAccess.READ_WRITE, PropUnit.CELSIUS, [16, 30, 1]);
    this.addProperty(AirConditionerProperties.TEMPERATURE, 2, 3, PropFormat.FLOAT, PropAccess.READ, PropUnit.NONE);
    this.addProperty(AirConditionerProperties.FAN_LEVEL, 3, 1, PropFormat.UINT8, PropAccess.READ_WRITE, PropUnit.NONE, [], [{
        "value": 0,
        "description": "Auto"
      },
      {
        "value": 1,
        "description": "Low"
      },
      {
        "value": 2,
        "description": "Medium"
      },
      {
        "value": 3,
        "description": "High"
      }
    ]);
    this.addProperty(AirConditionerProperties.VERTICAL_SWING, 3, 2, PropFormat.BOOL, PropAccess.READ_WRITE, PropUnit.NONE);
  }

  initDeviceActions() {
    // nothing special
  }


  /*----------========== CONFIG ==========----------*/

  autoModeValue() {
    return 0;
  }

  heatModeValue() {
    return 3;
  }

  coolModeValue() {
    return 1;
  }

  dryModeValue() {
    return 2;
  }

  fanModeValue() {
    return 4;
  }

  requiresMiCloud() {
    return true;
  }
  supportsSwingModes(){
    return true;
  }
}

module.exports = LumiAcpartnerMcn02;
