# Change Log

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/).

## [UNRELEASED]

### Fixed

- Fixed an async statement that would sometimes break during tests.

### Chores

- Updated dependencies.

## [1.2.0] - 2024-04-28

### Added

- Login requests that are turned down by potber-api due to the user being locked permanently are now being displayed properly.

## [1.1.1] - 2024-04-05

### Added

- Added reference to [https://mods-mpe.de](https://mods-mpe.de) to the about page.

## [1.1.0] - 2024-03-11

### Added

- Implemented client-side tests with `playwright`.
- Dependabot can now merge non-major version changes automatically.
- Added `mpe` as a known client.

### Chores

- chore(deps-dev): bump vite from 5.0.10 to 5.1.6
- chore(deps-dev): bump @sveltejs/adapter-auto from 3.0.0 to 3.1.1
- chore(deps-dev): bump svelte-fa from 3.0.4 to 4.0.2
- chore(deps-dev): bump @sveltejs/kit from 2.0.1 to 2.5.3
- chore(deps-dev): bump @sveltejs/adapter-node from 2.0.0 to 5.0.1

## [1.0.1] - 2023-12-21

### Fixed

- Fixed environment variables not being adressed properly.

### Added

- Provided a `staging` build at https://test-auth.potber.de.

## [1.0.0] - 2023-12-19

Initial release.
