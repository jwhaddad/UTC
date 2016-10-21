"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var configuration_1 = require('./configuration');
var rest_service_1 = require('./rest.service');
var ConfigurationListComponent = (function () {
    function ConfigurationListComponent(restService) {
        this.restService = restService;
    }
    ConfigurationListComponent.prototype.ngOnInit = function () {
        this.getConfigurationList();
    };
    ConfigurationListComponent.prototype.getConfigurationList = function () {
        var _this = this;
        this.restService.getConfigurationList().then(function (configList) {
            _this.configurationList = configList;
        });
    };
    ConfigurationListComponent.prototype.onSelect = function (config) {
        this.selectedConfigOi = new configuration_1.Configuration({
            Id: config.Id,
            Description: "Test Description",
            TargetTemperature: 160,
            ThermometerCount: 1,
            ThermometerConfig: [
                {
                    Id: 11,
                    Name: 'Pit',
                    AlarmOn: false,
                    fk_id_configuration: 100,
                }
            ],
        });
        var tc = this.selectedConfigOi.Configuration$.ThermometerConfig.create();
        tc.AlarmOn = false;
        tc.Name = "TestName";
        console.log(JSON.stringify(this.selectedConfigOi, null, 2));
    };
    ConfigurationListComponent = __decorate([
        core_1.Component({
            selector: 'configuration-list',
            template: "\n  <div *ngIf=\"configurationList\">\n    <ul class=\"configurations\">\n        <li *ngFor=\"let config of configurationList.Configuration\" \n            [class.selected]=\"selectedConfigOi && selectedConfigOi.Configuration$.Id == config.Id\"\n            (click)=\"onSelect(config)\">\n        <span class=\"badge\">{{config.Id}}</span> {{config.Description}}\n        </li>\n    </ul>\n  </div>\n  <configuration-detail [configuration]=\"selectedConfigOi\"></configuration-detail>\n",
            styleUrls: ['app/configuration.css'],
            providers: [rest_service_1.RestService]
        }), 
        __metadata('design:paramtypes', [rest_service_1.RestService])
    ], ConfigurationListComponent);
    return ConfigurationListComponent;
}());
exports.ConfigurationListComponent = ConfigurationListComponent;
//# sourceMappingURL=configuration-list.component.js.map