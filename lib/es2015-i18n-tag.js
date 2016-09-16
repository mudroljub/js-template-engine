(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["es2015-i18n-tag"] = factory();
	else
		root["es2015-i18n-tag"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var typeInfoRegex = /^:([a-z])(\((.+)\))?/;
	var formatOptionNumeric = 'numeric';
	var formatOptionLong = 'long';
	var formatOption2Digit = '2-digit';
	var typeString = 'string';
	var typeNumber = 'number';
	var typeDate = 'date';
	var numberStyleDecimal = 'decimal';
	var numberStyleCurrency = 'currency';
	var numberStylePercent = 'percent';

	var Tag = function () {
	    function Tag() {
	        var _this = this;

	        _classCallCheck(this, Tag);

	        this.defaultConfig = {
	            locales: undefined,
	            translations: {},
	            number: {
	                currency: 'USD'
	            },
	            date: {},
	            string: {},
	            standardFormatters: {}
	        };

	        this.configs = {
	            '': this.defaultConfig
	        };

	        this._localizers = {
	            s /*string*/: function s(config, v, format) {
	                var formatted = void 0;
	                if (format && (formatted = _this._runCustomFormatters(config, typeString, format, v)) !== null) {
	                    return formatted;
	                }
	                return v.toLocaleString(config.locales);
	            },
	            n /*number*/: function n(config, v, format) {
	                if (format) {
	                    var fractionalDigits = parseInt(format);
	                    if (!isNaN(fractionalDigits)) {
	                        return v.toLocaleString(config.locales, Object.assign({}, config.number, { style: numberStyleDecimal, minimumFractionDigits: fractionalDigits, maximumFractionDigits: fractionalDigits }));
	                    }
	                    var formatted = void 0;
	                    if ((formatted = _this._runCustomFormatters(config, typeNumber, format, v)) !== null) {
	                        return formatted;
	                    }
	                }
	                v.toLocaleString(config.locales, Object.assign({}, config.number, { style: numberStyleDecimal }));
	            },
	            t /*date*/: function t(config, v, format) {
	                if (format) {
	                    switch (format.toUpperCase()) {
	                        case 'R':
	                            return v.toUTCString();
	                        case 'O':
	                            return v.toISOString();
	                    }
	                    var formatOptions = _this._getStandardFormatSettings(format);
	                    if (formatOptions) {
	                        return v.toLocaleString(config.locales, Object.assign({}, config.date, formatOptions));
	                    } else {
	                        var formatted = _this._runCustomFormatters(config, typeDate, format, v);
	                        if (formatted !== null) return formatted;
	                    }
	                }
	                return v.toLocaleString(config.locales, Object.assign({}, config.date));
	            },
	            c /*currency*/: function c(config, v, currency) {
	                return v.toLocaleString(config.locales, currency ? Object.assign({}, config.number, { style: numberStyleCurrency, currency: currency }) : Object.assign({}, config.number, { style: numberStyleCurrency }));
	            },
	            p /*percent*/: function p(config, v) {
	                return v.toLocaleString(config.locales, Object.assign({}, config.number, { style: numberStylePercent }));
	            }
	        };
	        this.i18n = this.i18n.bind(this);
	        this.i18nConfig = this.i18nConfig.bind(this);
	        this._localize = this._localize.bind(this);
	    }

	    _createClass(Tag, [{
	        key: 'i18nConfig',
	        value: function i18nConfig(_ref) {
	            var locales = _ref.locales;
	            var translations = _ref.translations;
	            var group = _ref.group;
	            var number = _ref.number;
	            var date = _ref.date;
	            var standardFormatters = _ref.standardFormatters;

	            var currentConfig = this.configs[group || ''] || this.defaultConfig;
	            this.configs[group || ''] = Object.assign({}, currentConfig, {
	                locales: locales || currentConfig.locales,
	                translations: translations || currentConfig.translations,
	                number: number || currentConfig.number,
	                date: date || currentConfig.date,
	                standardFormatters: standardFormatters || currentConfig.standardFormatters
	            });
	        }
	    }, {
	        key: 'i18n',
	        value: function i18n(group, config, literals) {
	            var _this2 = this;

	            var translationKey = this._buildKey(literals);
	            var configGroup = this.configs[config || ''] || this.configs[''];
	            var translations = configGroup['translations'];
	            var translationString = void 0;
	            var translationGroup = void 0;
	            if ((typeof group === 'undefined' ? 'undefined' : _typeof(group)) === typeString) {
	                translationGroup = group;
	            }
	            if (translationGroup) {
	                translationString = translations[translationGroup];
	                if (translationString instanceof Object) {
	                    translationString = translationString[translationKey];
	                }
	            }
	            if (!translationString) translationString = translations[translationKey] || translationKey;
	            var typeInfoForValues = literals.slice(1).map(this._extractTypeInfo);

	            for (var _len = arguments.length, values = Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {
	                values[_key - 3] = arguments[_key];
	            }

	            var localizedValues = values.map(function (v, i) {
	                return _this2._localize(configGroup, v, typeInfoForValues[i]);
	            });
	            return this._buildMessage.apply(this, [translationString].concat(_toConsumableArray(localizedValues)));
	        }
	    }, {
	        key: '_runCustomFormatters',
	        value: function _runCustomFormatters(config, type, format, value) {
	            var formatted = null;
	            if (config.standardFormatters) {
	                var formatters = config.standardFormatters[type];
	                if (formatters) {
	                    var formatter = formatters[format];
	                    if (formatter) {
	                        formatted = formatter(config.locales, config[type], value);
	                    }
	                }
	            }
	            return formatted;
	        }
	    }, {
	        key: '_getStandardFormatSettings',
	        value: function _getStandardFormatSettings(fromatString) {
	            switch (fromatString) {
	                case 'd':
	                    return {
	                        weekday: undefined,
	                        era: undefined,
	                        year: formatOptionNumeric,
	                        month: formatOptionNumeric,
	                        day: formatOptionNumeric,
	                        hour: undefined,
	                        minute: undefined,
	                        second: undefined,
	                        timeZoneName: undefined
	                    };
	                case 'D':
	                    return {
	                        weekday: formatOptionLong,
	                        era: undefined,
	                        year: formatOptionNumeric,
	                        month: formatOptionLong,
	                        day: formatOptionNumeric,
	                        hour: undefined,
	                        minute: undefined,
	                        second: undefined,
	                        timeZoneName: undefined
	                    };
	                case 'f':
	                    return {
	                        weekday: formatOptionLong,
	                        era: undefined,
	                        year: formatOptionNumeric,
	                        month: formatOptionLong,
	                        day: formatOptionNumeric,
	                        hour: formatOptionNumeric,
	                        minute: formatOption2Digit,
	                        second: undefined,
	                        timeZoneName: undefined
	                    };
	                case 'F':
	                    return {
	                        weekday: formatOptionLong,
	                        era: undefined,
	                        year: formatOptionNumeric,
	                        month: formatOptionLong,
	                        day: formatOptionNumeric,
	                        hour: formatOptionNumeric,
	                        minute: formatOption2Digit,
	                        second: formatOption2Digit,
	                        timeZoneName: undefined
	                    };
	                case 'g':
	                    return {
	                        weekday: undefined,
	                        era: undefined,
	                        year: formatOptionNumeric,
	                        month: formatOptionNumeric,
	                        day: formatOptionNumeric,
	                        hour: formatOptionNumeric,
	                        minute: formatOption2Digit,
	                        second: undefined,
	                        timeZoneName: undefined
	                    };
	                case 'G':
	                    return {
	                        weekday: undefined,
	                        era: undefined,
	                        year: formatOptionNumeric,
	                        month: formatOptionNumeric,
	                        day: formatOptionNumeric,
	                        hour: formatOptionNumeric,
	                        minute: formatOption2Digit,
	                        second: formatOption2Digit,
	                        timeZoneName: undefined
	                    };
	                case 'm':
	                case 'M':
	                    return {
	                        weekday: undefined,
	                        era: undefined,
	                        year: undefined,
	                        month: formatOptionLong,
	                        day: formatOptionNumeric,
	                        hour: undefined,
	                        minute: undefined,
	                        second: undefined,
	                        timeZoneName: undefined
	                    };
	                case 't':
	                    return {
	                        weekday: undefined,
	                        era: undefined,
	                        year: undefined,
	                        month: undefined,
	                        day: undefined,
	                        hour: formatOptionNumeric,
	                        minute: formatOption2Digit,
	                        second: undefined,
	                        timeZoneName: undefined
	                    };
	                case 'T':
	                    return {
	                        weekday: undefined,
	                        era: undefined,
	                        year: undefined,
	                        month: undefined,
	                        day: undefined,
	                        hour: formatOptionNumeric,
	                        minute: formatOption2Digit,
	                        second: formatOption2Digit,
	                        timeZoneName: undefined
	                    };
	                case 'y':
	                case 'Y':
	                    return {
	                        weekday: undefined,
	                        era: undefined,
	                        year: formatOptionNumeric,
	                        month: formatOptionLong,
	                        day: undefined,
	                        hour: undefined,
	                        minute: undefined,
	                        second: undefined,
	                        timeZoneName: undefined
	                    };
	                default:
	                    return null;
	            }
	        }
	    }, {
	        key: '_extractTypeInfo',
	        value: function _extractTypeInfo(literal) {
	            var match = typeInfoRegex.exec(literal);
	            if (match) {
	                return { type: match[1], options: match[3] };
	            } else {
	                return { type: 's', options: '' };
	            }
	        }
	    }, {
	        key: '_localize',
	        value: function _localize(config, value, _ref2) {
	            var type = _ref2.type;
	            var options = _ref2.options;

	            var localizer = this._localizers[type];
	            if (localizer) {
	                return localizer(config, value, options);
	            }
	            throw new Error('Type \'' + type + '\' is not supported. Supported types are: ' + Object.keys(this._localizers).join());
	        }

	        // e.g. this._buildKey(['', ' has ', ':c in the']) == '{0} has {1} in the bank'

	    }, {
	        key: '_buildKey',
	        value: function _buildKey(literals) {
	            var stripType = function stripType(s) {
	                return s.replace(typeInfoRegex, '');
	            };
	            var lastPartialKey = stripType(literals[literals.length - 1]);
	            var prependPartialKey = function prependPartialKey(memo, curr, i) {
	                return stripType(curr) + '${' + i + '}' + memo;
	            };

	            return literals.slice(0, -1).reduceRight(prependPartialKey, lastPartialKey).replace(/\r\n/g, '\n');
	        }

	        // e.g. this._formatStrings('{0} {1}!', 'hello', 'world') == 'hello world!'

	    }, {
	        key: '_buildMessage',
	        value: function _buildMessage(str) {
	            for (var _len2 = arguments.length, values = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
	                values[_key2 - 1] = arguments[_key2];
	            }

	            return str.replace(/\${(\d)}/g, function (_, index) {
	                return values[Number(index)];
	            });
	        }
	    }]);

	    return Tag;
	}();

	var i18ntag = new Tag();
	var i18nConfig = i18ntag.i18nConfig;


	var i18n = function i18n(literals) {
	    for (var _len3 = arguments.length, values = Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
	        values[_key3 - 1] = arguments[_key3];
	    }

	    if (typeof literals === 'string') {
	        if (values.length && typeof values[0] === 'string') {
	            return function (lit) {
	                for (var _len4 = arguments.length, val = Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
	                    val[_key4 - 1] = arguments[_key4];
	                }

	                return i18ntag.i18n.apply(i18ntag, [literals, values[0], lit].concat(val));
	            };
	        } else {
	            return function (lit) {
	                for (var _len5 = arguments.length, val = Array(_len5 > 1 ? _len5 - 1 : 0), _key5 = 1; _key5 < _len5; _key5++) {
	                    val[_key5 - 1] = arguments[_key5];
	                }

	                return i18ntag.i18n.apply(i18ntag, [literals, null, lit].concat(val));
	            };
	        }
	    } else {
	        return i18ntag.i18n.apply(i18ntag, [null, null, literals].concat(values));
	    }
	};

	var i18nGroup = function i18nGroup(group, config) {
	    return function (Target) {
	        return function (props) {
	            Target = new Target(props);
	            Target.i18n = function (literals) {
	                for (var _len6 = arguments.length, values = Array(_len6 > 1 ? _len6 - 1 : 0), _key6 = 1; _key6 < _len6; _key6++) {
	                    values[_key6 - 1] = arguments[_key6];
	                }

	                return i18n(group, config).apply(undefined, [literals].concat(values));
	            };
	            return Target;
	        };
	    };
	};

	if (typeof window !== 'undefined') {
	    window.i18n = i18n;
	    window.i18nConfig = i18nConfig;
	    window.i18nGroup = i18nGroup;
	}

	exports.default = i18n;
	exports.i18nConfig = i18nConfig;
	exports.i18nGroup = i18nGroup;

/***/ }
/******/ ])
});
;
//# sourceMappingURL=index.umd.js.map
