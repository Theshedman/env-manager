const {red, green} = require('colorette');
const {copyFile, readFile, writeFile} = require('node:fs/promises');

const DEFAULT_MAIN_ENV_FILE = '.env';
const DEFAULT_SAMPLE_ENV_FILE = '.env.sample';

/**
  * Manages environment files by generating main and sample .env files.
  * @param {string} mainEnvFile - The main environment file name.
  * @param {string} sampleEnvFile - The sample environment file name.
  */
class EnvManager {
  /**
   * @param {string} mainEnvFile - The main environment file name.
   * @param {string} sampleEnvFile - The sample environment file name.
  */
  constructor(mainEnvFile, sampleEnvFile) {
    this.mainEnvFile = mainEnvFile || DEFAULT_MAIN_ENV_FILE;
    this.sampleEnvFile = sampleEnvFile || DEFAULT_SAMPLE_ENV_FILE;
  }

  /**
   * Generates the main environment file by copying from the sample.
   */
  async generateMainEnv() {
    try {
      await copyFile(this.sampleEnvFile, this.mainEnvFile);

      console.log(green(`Successfully created '${this.mainEnvFile}' from '${this.sampleEnvFile}'`));
    } catch (error) {
      console.error(red(`Failed to generate '${this.mainEnvFile}': ${error.message}`));
    }
  }

  /**
   * Generates the sample environment file by parsing the main environment file.
   */
  async generateSampleEnv() {
    try {
      const envContent = await this.#parseEnvFile(this.mainEnvFile);
      await writeFile(this.sampleEnvFile, envContent);

      console.log(green(`Successfully created '${this.sampleEnvFile}' from '${this.mainEnvFile}'`));
    } catch (error) {
      console.error(red(`Failed to generate '${this.sampleEnvFile}': '${error.message}`));
    }
  }

  /**
   * Parses the environment file and retains only the keys.
   * @param {string} envFile - The environment file to parse.
   * @return {Promise<string>} The parsed content of the environment file.
   */
  async #parseEnvFile(envFile) {
    const fileContent = await readFile(envFile, 'utf-8');

    return fileContent.split('\n')
        .map((line) => (line.includes('=') ? line.split('=')[0] + '=' : line))
        .join('\n');
  }
}

module.exports = {
  EnvManager,
};
