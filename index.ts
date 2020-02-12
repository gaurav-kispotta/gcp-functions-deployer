import { WriteToYaml } from './src/WriteYamlTo';

export {
    WriteToYaml
}


const y = new WriteToYaml();
y.envToFile({ ytpr_api: 'adsfasf'}, '.google.functions.deploy.yml');