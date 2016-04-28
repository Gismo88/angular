'use strict';/**
 * @module
 * @description
 * Alternative implementation of the router. Experimental.
 */
"use strict";
var router_1 = require('./src/alt_router/router');
exports.Router = router_1.Router;
exports.RouterOutletMap = router_1.RouterOutletMap;
var segments_1 = require('./src/alt_router/segments');
exports.RouteSegment = segments_1.RouteSegment;
var decorators_1 = require('./src/alt_router/metadata/decorators');
exports.Routes = decorators_1.Routes;
var metadata_1 = require('./src/alt_router/metadata/metadata');
exports.Route = metadata_1.Route;
var router_url_parser_1 = require('./src/alt_router/router_url_parser');
exports.RouterUrlParser = router_url_parser_1.RouterUrlParser;
exports.DefaultRouterUrlParser = router_url_parser_1.DefaultRouterUrlParser;
var router_outlet_1 = require('./src/alt_router/directives/router_outlet');
var lang_1 = require('./src/facade/lang');
exports.ROUTER_DIRECTIVES = lang_1.CONST_EXPR([router_outlet_1.RouterOutlet]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWx0X3JvdXRlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRpZmZpbmdfcGx1Z2luX3dyYXBwZXItb3V0cHV0X3BhdGgtRE5MenM1aW8udG1wL2FuZ3VsYXIyL2FsdF9yb3V0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7R0FJRzs7QUFFSCx1QkFBc0MseUJBQXlCLENBQUM7QUFBeEQsaUNBQU07QUFBRSxtREFBZ0Q7QUFDaEUseUJBQTJCLDJCQUEyQixDQUFDO0FBQS9DLCtDQUErQztBQUN2RCwyQkFBcUIsc0NBQXNDLENBQUM7QUFBcEQscUNBQW9EO0FBQzVELHlCQUFvQixvQ0FBb0MsQ0FBQztBQUFqRCxpQ0FBaUQ7QUFDekQsa0NBQXNELG9DQUFvQyxDQUFDO0FBQW5GLDhEQUFlO0FBQUUsNEVBQWtFO0FBRzNGLDhCQUEyQiwyQ0FBMkMsQ0FBQyxDQUFBO0FBQ3ZFLHFCQUF5QixtQkFBbUIsQ0FBQyxDQUFBO0FBRWhDLHlCQUFpQixHQUFVLGlCQUFVLENBQUMsQ0FBQyw0QkFBWSxDQUFDLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQG1vZHVsZVxuICogQGRlc2NyaXB0aW9uXG4gKiBBbHRlcm5hdGl2ZSBpbXBsZW1lbnRhdGlvbiBvZiB0aGUgcm91dGVyLiBFeHBlcmltZW50YWwuXG4gKi9cblxuZXhwb3J0IHtSb3V0ZXIsIFJvdXRlck91dGxldE1hcH0gZnJvbSAnLi9zcmMvYWx0X3JvdXRlci9yb3V0ZXInO1xuZXhwb3J0IHtSb3V0ZVNlZ21lbnR9IGZyb20gJy4vc3JjL2FsdF9yb3V0ZXIvc2VnbWVudHMnO1xuZXhwb3J0IHtSb3V0ZXN9IGZyb20gJy4vc3JjL2FsdF9yb3V0ZXIvbWV0YWRhdGEvZGVjb3JhdG9ycyc7XG5leHBvcnQge1JvdXRlfSBmcm9tICcuL3NyYy9hbHRfcm91dGVyL21ldGFkYXRhL21ldGFkYXRhJztcbmV4cG9ydCB7Um91dGVyVXJsUGFyc2VyLCBEZWZhdWx0Um91dGVyVXJsUGFyc2VyfSBmcm9tICcuL3NyYy9hbHRfcm91dGVyL3JvdXRlcl91cmxfcGFyc2VyJztcbmV4cG9ydCB7T25BY3RpdmF0ZX0gZnJvbSAnLi9zcmMvYWx0X3JvdXRlci9pbnRlcmZhY2VzJztcblxuaW1wb3J0IHtSb3V0ZXJPdXRsZXR9IGZyb20gJy4vc3JjL2FsdF9yb3V0ZXIvZGlyZWN0aXZlcy9yb3V0ZXJfb3V0bGV0JztcbmltcG9ydCB7Q09OU1RfRVhQUn0gZnJvbSAnLi9zcmMvZmFjYWRlL2xhbmcnO1xuXG5leHBvcnQgY29uc3QgUk9VVEVSX0RJUkVDVElWRVM6IGFueVtdID0gQ09OU1RfRVhQUihbUm91dGVyT3V0bGV0XSk7XG4iXX0=