
/*
  Generated from LOD Configuration

*/

import * as zeidon from '../zeidon';
import { Observable } from 'rxjs';
import { UTC_DomainList } from './UTC-DomainList';
import { UTC_DomainFunctions } from './UTC-DomainFunctions';



// Configuration LOD.
export class Configuration extends zeidon.ObjectInstance {
    protected rootEntityName(): string { return "Configuration" };

    public getApplicationName(): String { return "UTC" };

    getPrototype(entityName: string): any {
        return ConfigurationEntityPrototypes[entityName];
    }

    public getLodDef() {
        return Configuration_LodDef;
    };

    public getDomain( name: string ): zeidon.Domain { 
        return UTC_DomainList[name];
    };

    public getDomainFunctions( name: string ): any { 
        return UTC_DomainFunctions[name];
    }


    get Configuration(): zeidon.EntityArray<Configuration_Configuration> {
        return this.roots as zeidon.EntityArray<Configuration_Configuration>;
    }

    get Configuration$(): Configuration_Configuration {
        return this.roots.selected() as Configuration_Configuration;
    }

    public static activate( qual?: any ): Observable<Configuration> {
        return zeidon.ObjectInstance.activateOi( new Configuration(), qual );
    }
}


export class Configuration_Configuration extends zeidon.EntityInstance {
    public get entityName(): string { return "Configuration" };

    get Id(): string { return this.getAttribute("Id") };
    set Id(value: string) { this.setAttribute("Id", value) };

    get Description(): string { return this.getAttribute("Description") };
    set Description(value: string) { this.setAttribute("Description", value) };

    get Notes(): string { return this.getAttribute("Notes") };
    set Notes(value: string) { this.setAttribute("Notes", value) };

    get TargetTemperature(): number { return this.getAttribute("TargetTemperature") };
    set TargetTemperature(value: number) { this.setAttribute("TargetTemperature", value) };

    get TemperatureUnit(): string { return this.getAttribute("TemperatureUnit") };
    set TemperatureUnit(value: string) { this.setAttribute("TemperatureUnit", value) };

    get RecordTemperatures(): boolean { return this.getAttribute("RecordTemperatures") };
    set RecordTemperatures(value: boolean) { this.setAttribute("RecordTemperatures", value) };

    get PidP(): number { return this.getAttribute("PidP") };
    set PidP(value: number) { this.setAttribute("PidP", value) };

    get PidI(): number { return this.getAttribute("PidI") };
    set PidI(value: number) { this.setAttribute("PidI", value) };

    get PidD(): number { return this.getAttribute("PidD") };
    set PidD(value: number) { this.setAttribute("PidD", value) };

    get MaxPWM(): number { return this.getAttribute("MaxPWM") };
    set MaxPWM(value: number) { this.setAttribute("MaxPWM", value) };

    get TweetOn(): boolean { return this.getAttribute("TweetOn") };
    set TweetOn(value: boolean) { this.setAttribute("TweetOn", value) };

    get PwmFrequency(): number { return this.getAttribute("PwmFrequency") };
    set PwmFrequency(value: number) { this.setAttribute("PwmFrequency", value) };

    get ThermometerConfig(): zeidon.EntityArray<Configuration_ThermometerConfig> {
        return this.getChildEntityArray("ThermometerConfig") as zeidon.EntityArray<Configuration_ThermometerConfig>;
    }

    get ThermometerConfig$(): Configuration_ThermometerConfig {
        return this.getChildEntityArray("ThermometerConfig").selected() as Configuration_ThermometerConfig;
    }
}

export class Configuration_ThermometerConfig extends zeidon.EntityInstance {
    public get entityName(): string { return "ThermometerConfig" };

    get Id(): string { return this.getAttribute("Id") };
    set Id(value: string) { this.setAttribute("Id", value) };

    get Name(): string { return this.getAttribute("Name") };
    set Name(value: string) { this.setAttribute("Name", value) };

    get AlarmLow(): number { return this.getAttribute("AlarmLow") };
    set AlarmLow(value: number) { this.setAttribute("AlarmLow", value) };

    get AlarmHigh(): number { return this.getAttribute("AlarmHigh") };
    set AlarmHigh(value: number) { this.setAttribute("AlarmHigh", value) };

    get AlarmOn(): boolean { return this.getAttribute("AlarmOn") };
    set AlarmOn(value: boolean) { this.setAttribute("AlarmOn", value) };

    get wTemperatureWithinAlarmThreshold(): boolean { return this.getAttribute("wTemperatureWithinAlarmThreshold") };
    set wTemperatureWithinAlarmThreshold(value: boolean) { this.setAttribute("wTemperatureWithinAlarmThreshold", value) };
}

const ConfigurationEntityPrototypes = {
    Configuration: Configuration_Configuration.prototype, 
    ThermometerConfig: Configuration_ThermometerConfig.prototype, 
}

export const Configuration_LodDef = {
    name: "Configuration",
    entities: {
        Configuration: {
            name:        "Configuration",
            erToken:     "905181331",
            create:      true,
            cardMax:     0,
            hasInit:     true,
            creatable:   true,
            includable:  false,
            deletable:   true,
            excludable:  false,
            updatable:   true,
            parentDelete: true,
            childEntities: {
                ThermometerConfig: {},
            },
            attributes: {
                Id: {
                    name:         "Id",
                    hidden:       false,
                    required:     true,
                    domainName:   "GeneratedKey",
                    persistent:   true,
                    key:          true,
                    update:       true,
                    foreignKey:   false,
                },
                Description: {
                    name:         "Description",
                    hidden:       false,
                    required:     true,
                    domainName:   "Text",
                    persistent:   true,
                    key:          false,
                    update:       true,
                    foreignKey:   false,
                },
                Notes: {
                    name:         "Notes",
                    hidden:       false,
                    required:     false,
                    domainName:   "Text",
                    persistent:   true,
                    key:          false,
                    update:       true,
                    foreignKey:   false,
                },
                TargetTemperature: {
                    name:         "TargetTemperature",
                    hidden:       false,
                    required:     true,
                    domainName:   "Integer",
                    persistent:   true,
                    key:          false,
                    update:       true,
                    foreignKey:   false,
                },
                TemperatureUnit: {
                    name:         "TemperatureUnit",
                    hidden:       false,
                    required:     true,
                    domainName:   "TemperatureUnit",
                    persistent:   true,
                    key:          false,
                    update:       true,
                    foreignKey:   false,
                    initialValue: "F",
                },
                RecordTemperatures: {
                    name:         "RecordTemperatures",
                    hidden:       false,
                    required:     false,
                    domainName:   "Boolean",
                    persistent:   true,
                    key:          false,
                    update:       true,
                    foreignKey:   false,
                },
                PidP: {
                    name:         "PidP",
                    hidden:       false,
                    required:     true,
                    domainName:   "Integer",
                    persistent:   true,
                    key:          false,
                    update:       true,
                    foreignKey:   false,
                    initialValue: "3",
                },
                PidI: {
                    name:         "PidI",
                    hidden:       false,
                    required:     true,
                    domainName:   "Double",
                    persistent:   true,
                    key:          false,
                    update:       true,
                    foreignKey:   false,
                    initialValue: "0.005",
                },
                PidD: {
                    name:         "PidD",
                    hidden:       false,
                    required:     true,
                    domainName:   "Double",
                    persistent:   true,
                    key:          false,
                    update:       true,
                    foreignKey:   false,
                    initialValue: "5.0",
                },
                MaxPWM: {
                    name:         "MaxPWM",
                    hidden:       false,
                    required:     false,
                    domainName:   "Integer",
                    persistent:   true,
                    key:          false,
                    update:       true,
                    foreignKey:   false,
                },
                TweetOn: {
                    name:         "TweetOn",
                    hidden:       false,
                    required:     false,
                    domainName:   "Boolean",
                    persistent:   true,
                    key:          false,
                    update:       true,
                    foreignKey:   false,
                },
                PwmFrequency: {
                    name:         "PwmFrequency",
                    hidden:       false,
                    required:     false,
                    domainName:   "Integer",
                    persistent:   true,
                    key:          false,
                    update:       true,
                    foreignKey:   false,
                },
                autoseq: {
                    name:         "autoseq",
                    hidden:       true,
                    required:     false,
                    domainName:   "Integer",
                    persistent:   true,
                    key:          false,
                    update:       false,
                    foreignKey:   false,
                },
            }
        },

        ThermometerConfig: {
            name:        "ThermometerConfig",
            erToken:     "905181361",
            isErRelLink: true,
            relToken:    "905181388",
            create:      true,
            cardMax:     10,
            hasInit:     true,
            creatable:   true,
            includable:  false,
            deletable:   true,
            excludable:  false,
            updatable:   true,
            parentDelete: true,
            childEntities: {
            },
            attributes: {
                Id: {
                    name:         "Id",
                    hidden:       false,
                    required:     true,
                    domainName:   "GeneratedKey",
                    persistent:   true,
                    key:          true,
                    update:       true,
                    foreignKey:   false,
                },
                Name: {
                    name:         "Name",
                    hidden:       false,
                    required:     true,
                    domainName:   "Text",
                    persistent:   true,
                    key:          false,
                    update:       true,
                    foreignKey:   false,
                },
                AlarmLow: {
                    name:         "AlarmLow",
                    hidden:       false,
                    required:     false,
                    domainName:   "Integer",
                    persistent:   true,
                    key:          false,
                    update:       true,
                    foreignKey:   false,
                },
                AlarmHigh: {
                    name:         "AlarmHigh",
                    hidden:       false,
                    required:     false,
                    domainName:   "Integer",
                    persistent:   true,
                    key:          false,
                    update:       true,
                    foreignKey:   false,
                },
                AlarmOn: {
                    name:         "AlarmOn",
                    hidden:       false,
                    required:     false,
                    domainName:   "Boolean",
                    persistent:   true,
                    key:          false,
                    update:       true,
                    foreignKey:   false,
                },
                wTemperatureWithinAlarmThreshold: {
                    name:         "wTemperatureWithinAlarmThreshold",
                    hidden:       false,
                    required:     false,
                    domainName:   "Boolean",
                    persistent:   false,
                    key:          false,
                    update:       true,
                    foreignKey:   false,
                    initialValue: "false",
                },
                autoseq: {
                    name:         "autoseq",
                    hidden:       true,
                    required:     false,
                    domainName:   "Integer",
                    persistent:   true,
                    key:          false,
                    update:       false,
                    foreignKey:   false,
                },
                fk_id_configuration: {
                    name:         "fk_id_configuration",
                    hidden:       true,
                    required:     true,
                    domainName:   "GeneratedKey",
                    persistent:   true,
                    key:          false,
                    update:       true,
                    foreignKey:   true,
                },
            }
        },

    }
}
