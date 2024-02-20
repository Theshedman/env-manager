#!/usr/bin/env node

const {EnvManager} = require('..');
const {Command} = require('commander');
const {red, green, cyan} = require('colorette');

const program = new Command();


/**
 * Configures the basic information for the CLI program.
 * Sets the name, description, and version of the program.
 */
program
    .name('env')
    .summary('A CLI tool for managing .env files')
    // eslint-disable-next-line max-len
    .description('A CLI tool designed for easy management of environment variables. It enables the generation, update, and management of .env files to maintain consistent project configurations across various development environments. With env, users can create .env files from templates, synchronize changes, and securely manage sensitive information, catering to both small and large-scale projects.')
    .version('1.0.0');

/**
 * Configures the 'main' command for the CLI program.
 * This command is responsible for generating the main .env file.
 * It allows users to specify custom filenames for both the source (.env.sample)
 * and the destination (.env) files through command-line options.
 */
program
    .command('main')
    .description('main .env file generation')
    .option('-t, --to <filename>', 'Optional main .env file to write to')
    .option('-f, --from <filename>', 'Optional sample .env to read from')
    .showSuggestionAfterError(true)
    .showHelpAfterError()
    .action((opts) => {
    // Creates a new instance of EnvManager with the specified options.
      const envManager = new EnvManager(opts.to, opts.from);

      // Calls the method to generate the main .env file.
      envManager.generateMainEnv()
      // Catches and logs any errors that occur.
          .catch((error) => console.error(red(`Failed to generate main .env: ${error.message}`)));
    });


// Define a new command 'sample' for generating a sample .env file
program
    .command('sample')
    .description('sample .env file generation')
    .option('-t, --to <filename>', 'Optional sample .env file to write to')
    .option('-f, --from <filename>', 'Optional main .env file to read from')
    .showSuggestionAfterError(true)
    .showHelpAfterError()
    .action((opts) => {
    // Create a new instance of EnvManager with the provided options
      const envManager = new EnvManager(opts.from, opts.to);

      // Attempt to generate the sample .env file
      envManager.generateSampleEnv()
      // Catch and log any errors that occur during generation
          .catch((error) => console.error(red(`Failed to generate sample .env: ${error.message}`)));
    });

// Customizes CLI output for better readability.
program
    .configureOutput({
      writeOut: (str) => process.stdout.write(`${green(str)}`),
      writeErr: (str) => process.stdout.write(`${cyan(str)}`),
      // Output errors in red.
      outputError: (str, write) => write(red(str)),
    });


// Parses the command line arguments and executes the corresponding command
program.parse(process.argv);
