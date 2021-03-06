// ----------------------------------------------------------------------------
// Copyright (c) Microsoft Corporation. All rights reserved.
// ----------------------------------------------------------------------------
/**
The top level configuration object.
@typedef configuration
@property {string} platform=express - Server platform to use. Currently only express is supported
@property {string} basePath=. - Base path to use for the application
@property {string} configFile=azureMobile.js - Name of the file that exports configuration objects to load
@property {Promise} promiseConstructor Promise constructor to use
@property {string} apiRootPath=/api - Directory to load api configuration from
@property {string} tableRootPath=/tables - Directory to load table configuration from
@property {string} notificationRootPath=/push/installations - Notification installations endpoint
@property {bool} debug=false - Run the server in debug mode. Automatically turned on when node is executed with the --debug option
@property {string} version - Current version of the Azure Mobile Apps SDK
@property {integer} maxTop=1000 - Limit the maximum number of rows a client can request
@property {integer} pageSize=50 - Set the number of rows for server side paging
@property {loggingConfiguration} logging - Logging configuration
@property {dataConfiguration} data - Data configuration
@property {authConfiguration} auth - Authentication configuration
@property {corsConfiguration} cors - Cross-origin resource sharing configuration
@property {notificationsConfiguration} notifications - Notifications configuration
*/

/**
Logging configuration. See {@link https://github.com/winstonjs/winston#instantiating-your-own-logger} 
@typedef loggingConfiguration
@property {string} level=info - Minimum level of messages to log
@property {transports[]} transports=Console - Array of winston transports to log messages to
*/

/**
Data configuration. See {@link sqlServerDataConfiguration} for details on configuring SQL Server
@typedef dataConfiguration
@property {string} provider=memory - Data provider to use. Supported providers are mssql and memory
@property {bool} dynamicSchema=false - Global default for table dynamic schema, can override at table config level
@property {string} schema=dbo - Global default for SQL Server schema name, can override at table config level
*/

/**
SQL Server data configuration
SQL Server data configuration.  Can specify a connection with user/password/server/etc or a connectionString
@typedef sqlServerDataConfiguration
@property {string} user - User name to connect with
@property {string} password - Password for user
@property {string} server - Hostname of the database server
@property {integer} port=1433 - Port to connect to
@property {string} database - Name of the database to connect to
@property {integer} connectionTimeout=15000 - Connection timeout in milliseconds
@property {string} connectionString - SQL Server connection string
@property {Object} options - Additional options
@property {bool} options.encrypt - Encrypt the connection. Required and turned on automatically for SQL Azure
@see {@link https://www.npmjs.com/package/mssql}
*/

/**
Authentication configuration
@typedef authConfiguration
@property {string} secret - Key to use to sign and validate JWT tokens
@property {string} audience=urn:microsoft:windows-azure:zumo - Token audience claim
@property {string} issuer=urn:microsoft:windows-azure:zumo - Token issuer claim
@property {integer} expiresInMinutes=1440 - Expiry of signed tokens
@see {@link http://jwt.io/}
@see {@link https://github.com/auth0/node-jsonwebtoken}
*/

/**
Cross-origin resource sharing configuration
@typedef corsConfiguration
@property {integer} maxAge=300 - How long the results of a preflight request can be cached in a preflight result cache,
@property {string[]} origins=localhost - Array of allowed origins
*/

/**
Notifications configuration. hubName must be specified. Either a connection string or endpoint and shared access key details mst be provided.
@typedef notificationsConfiguration
@property {string} hubName - The name of the associated notification hub
@property {string} connectionString - The connection string of the associated notification hub
@property {string} endpoint - The name of the endpoint
@property {string} sharedAccessKeyName - Name of the shared access key
@property {string} sharedAccessKeyValue - Shared access key value
@see {@link https://github.com/Azure/azure-sdk-for-node/blob/master/lib/services/serviceBus/lib/notificationhubservice.js}
*/
