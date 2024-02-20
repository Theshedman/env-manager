# @zigatech/env-manager

A powerful and user-friendly CLI tool designed to streamline the management of environment variables for your projects. It allows you to easily generate, update, and manage .env files, ensuring that your project configurations are consistent across different development environments. With env, you can create .env files from templates, synchronize changes across multiple .env files, and securely manage sensitive information. Whether you are working on a small project or a large-scale application, env provides the tools you need to efficiently handle your environment variables.

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)
- [Author](#author)
- [More Information](#more-information)


## Installation

To install the package globally, run:

```bash
npm install -g @zigatech/env-manager
```

This will allow you to use the `env` command from anywhere on your system.

## Usage

After installation, you can run the following command to see the available options and usage:

```bash
env --help
```

To generate a sample env file from your main `.env` file, you can execute:

```bash
env sample
```

This will generate a file `.env.sample` with all the environment variables from the `.env` file but without their values. This is useful for sharing the environment variables with other developers without sharing the actual values. And it's safe to commit to your repository.

## Contributing

If you find any bugs or have a feature request, please open an issue on the [GitHub repository](https://github.com/theshedman/env-manager/issues).

## License

This project is licensed under the ISC License - see the [LICENSE](LICENSE) file for details.

## Author

Theshedman <shedrack3@gmail.com>

## More Information

For more information, please visit the [project homepage](https://github.com/theshedman/env-manager#readme).
