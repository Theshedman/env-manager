# @zigatech/env-manager

A CLI npm package designed to provide a simple command-line interface for your needs.

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
