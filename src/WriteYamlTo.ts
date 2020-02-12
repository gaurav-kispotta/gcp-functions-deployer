import * as yaml from 'write-yaml';

export class WriteToYaml {
    envToFile(data: any, fileName:string) {
        yaml.sync(fileName, data);
    }
}