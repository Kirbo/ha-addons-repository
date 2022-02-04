**v2.0.0** (2022-02-04)

## Breaking change

- Adds new configuration `use_prefixes: true`. <br>
When set as `use_prefixes: true`, the sensors will have `mitemp`, `mitemp2` or `ruuvitag` prefix to sensors, meaning that `sensor.ef09dba67d71_temperature` becomes `sensor.ruuvitag_ef09dba67d71_temperature`.


If you want to keep your old entities with the prefixes, make sure to add this into your Addon configuration:
```yaml
use_prefixes: false
```

Othwerise this addon will create new entities for you with the prefixes and leaves the old ones untouched.
