# Loopback-3-Scripts

You can place these scripts in the server/bin folder of your Loopback 3 Application for automigrate and autoupdate funtionalities.

# Automigrate
This will migrate your models and relations to the database, however it will drop table data.
`npm run server/bin/automigrate`

# Autoupdate
This will migrate your models and relations to the database, without dropping table data.
`npm run server/bin/autoupdate`

*N.B For this script you may have to manually stop its execution by pressing [COMMAND | CTRL ] + C.
