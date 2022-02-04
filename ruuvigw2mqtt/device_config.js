const options = require(process.argv[2] || "/data/options.json");

module.exports = {
  miTemp: {
    device: (id) => ({
      identifiers: [`ruuvigw2mqtt_${id}`],
      name: `Xiaomi_MiTemp_${id}`,
      sw_version: "ruuvigw2mqtt",
      model: "Mi Temperature and Humidity Monitor",
      manufacturer: "Xiaomi",
    }),
    tempConfig: (id) => ({
      ...module.exports.sensor("mitemp", id, "temperature", "°C"),
      device_class: "temperature",
      device: module.exports.miTemp.device(id),
    }),
    humidityConfig: (id) => ({
      ...module.exports.sensor("mitemp", id, "humidity", "%"),
      device_class: "humidity",
      device: module.exports.miTemp.device(id),
    }),
    batteryConfig: (id) => ({
      ...module.exports.sensor("mitemp", id, "battery", "%"),
      device_class: "battery",
      device: module.exports.miTemp.device(id),
    }),
    rssiConfig: (id) => ({
      ...module.exports.sensor("mitemp", id, "rssi", "dBm"),
      device_class: "signal_strength",
      device: module.exports.miTemp.device(id),
    }),
  },
  miTemp2: {
    device: (id) => ({
      identifiers: [`ruuvigw2mqtt_${id}`],
      name: `Xiaomi_MiTemp2_${id}`,
      sw_version: "ruuvigw2mqtt",
      model: "Mi Temperature and Humidity Monitor 2",
      manufacturer: "Xiaomi",
    }),
    tempConfig: (id) => ({
      ...module.exports.sensor("mitemp2", id, "temperature", "°C"),
      device_class: "temperature",
      device: module.exports.miTemp.device(id),
    }),
    humidityConfig: (id) => ({
      ...module.exports.sensor("mitemp2", id, "humidity", "%"),
      device_class: "humidity",
      device: module.exports.miTemp.device(id),
    }),
    batteryConfig: (id) => ({
      ...module.exports.sensor("mitemp2", id, "battery", "%"),
      device_class: "battery",
      device: module.exports.miTemp.device(id),
    }),
    voltageConfig: (id) => ({
      ...module.exports.sensor("mitemp2", id, "voltage", "V"),
      device_class: "battery",
      device: module.exports.miTemp.device(id),
    }),
    rssiConfig: (id) => ({
      ...module.exports.sensor("mitemp2", id, "rssi", "dBm"),
      device_class: "signal_strength",
      device: module.exports.miTemp.device(id),
    }),
  },
  miPlant: {
    device: (id) => ({
      identifiers: [`ruuvigw2mqtt_${id}`],
      name: `Xiaomi_MiPlant_${id}`,
      sw_version: "ruuvigw2mqtt",
      model: "Mi Flora",
      manufacturer: "Xiaomi",
    }),
    tempConfig: (id) => ({
      ...module.exports.sensor("miplant", id, "temperature", "°C"),
      device_class: "temperature",
      device: module.exports.miPlant.device(id),
    }),
    lightConfig: (id) => ({
      ...module.exports.sensor("miplant", id, "light", "lx"),
      device_class: "illuminance",
      device: module.exports.miPlant.device(id),
    }),
    moistureConfig: (id) => ({
      ...module.exports.sensor("miplant", id, "moisture", "%"),
      icon: "mdi:water-percent",
      device: module.exports.miPlant.device(id),
    }),
    conductivityConfig: (id) => ({
      ...module.exports.sensor("miplant", id, "conductivity", "µS/cm"),
      icon: "mdi:flash-circle",
      device: module.exports.miPlant.device(id),
    }),
    rssiConfig: (id) => ({
      ...module.exports.sensor("miplant", id, "rssi", "dBm"),
      device_class: "signal_strength",
      device: module.exports.miPlant.device(id),
    }),
  },
  ruuviTag: {
    device: (id) => ({
      identifiers: [`ruuvigw2mqtt_${id}`],
      name: `RuuviTag_${id[8]}${id[9]}${id[10]}${id[11]}`,
      sw_version: "ruuvigw2mqtt",
      model: "RuuviTag",
      manufacturer: "Ruuvi Innovations",
    }),
    tempConfig: (id) => ({
      ...module.exports.sensor("ruuvitag", id, "temperature", "°C"),
      device_class: "temperature",
      device: module.exports.ruuviTag.device(id),
    }),
    humidityConfig: (id) => ({
      ...module.exports.sensor("ruuvitag", id, "humidity", "%"),
      device_class: "humidity",
      device: module.exports.ruuviTag.device(id),
    }),
    pressureConfig: (id) => ({
      ...module.exports.sensor("ruuvitag", id, "pressure", "hPa"),
      device_class: "pressure",
      device: module.exports.ruuviTag.device(id),
    }),
    voltageConfig: (id) => ({
      ...module.exports.sensor("ruuvitag", id, "voltage", "V"),
      device_class: "voltage",
      device: module.exports.ruuviTag.device(id),
    }),
    batteryConfig: (id) => ({
      ...module.exports.sensor("ruuvitag", id, "battery", "%"),
      device_class: "battery",
      device: module.exports.ruuviTag.device(id),
    }),
    lowBatteryConfig: (id) => ({
      ...module.exports.binary_sensor("ruuvitag", id, "low_battery"),
      device_class: "battery",
      device: module.exports.ruuviTag.device(id),
    }),
    rssiConfig: (id) => ({
      ...module.exports.sensor("ruuvitag", id, "rssi", "dBm"),
      device_class: "signal_strength",
      device: module.exports.ruuviTag.device(id),
    }),
    txPowerConfig: (id) => ({
      ...module.exports.sensor("ruuvitag", id, "txPower", ""),
      device: module.exports.ruuviTag.device(id),
    }),
    accelerationXConfig: (id) => ({
      ...module.exports.sensor("ruuvitag", id, "accelerationX", "g"),
      device: module.exports.ruuviTag.device(id),
    }),
    accelerationYConfig: (id) => ({
      ...module.exports.sensor("ruuvitag", id, "accelerationY", "g"),
      device: module.exports.ruuviTag.device(id),
    }),
    accelerationZConfig: (id) => ({
      ...module.exports.sensor("ruuvitag", id, "accelerationZ", "g"),
      device: module.exports.ruuviTag.device(id),
    }),
    movementCounterConfig: (id) => ({
      ...module.exports.sensor("ruuvitag", id, "movementCounter", ""),
      device: module.exports.ruuviTag.device(id),
    }),
    measurementSequenceNumberConfig: (id) => ({
      ...module.exports.sensor("ruuvitag", id, "measurementSequenceNumber", ""),
      device: module.exports.ruuviTag.device(id),
    }),
    dataFormatConfig: (id) => ({
      ...module.exports.sensor("ruuvitag", id, "dataFormat", ""),
      device: module.exports.ruuviTag.device(id),
    }),
  },

  _common: (category, id, type, unit_of_measurement) => ({
    ...(unit_of_measurement ? { unit_of_measurement } : {}),
    value_template: `{{ value_json.${type} }}`,
    state_topic: `${options.mqtt_parsed_ruuvi_topic || "ruuvi/parsed/"}${id}`,
    json_attributes_topic: `${
      options.mqtt_parsed_ruuvi_topic || "ruuvi/parsed/"
    }${id}`,
    name: `${(options.use_prefixes ? `${category}_` : '')}${id}_${type}`,
    unique_id: `${(options.use_prefixes ? `${category}_` : '')}${id}_${type}_homeassistant`,
    state_class: "measurement",
  }),

  sensor: (category, id, type, unit_of_measurement) => ({
    ...module.exports._common(category, id, type, unit_of_measurement),
  }),

  binary_sensor: (category, id, type, unit_of_measurement) => ({
    ...module.exports._common(category, id, type, unit_of_measurement),
    state_class: undefined,
    payload_off: false,
    payload_on: true,
  }),
};
