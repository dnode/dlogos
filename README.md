[![Dependency Status](https://david-dm.org/dnode/dlogos.svg)](https://david-dm.org/dnode/dlogos)
[![devDependency Status](https://david-dm.org/dnode/dlogos/dev-status.svg)](https://david-dm.org/dnode/dlogos#info=devDependencies)

# Example
## dlogos.json
```json
[
  {
    "source": "...",
    "destinations": [
      { "path": "...", "width": ... }
    ]
  }
]
```
## package.json
```json
{
  "scripts": {
    "postinstall": "dlogos"
  }
}
```
