# Synthesis Modpack

A private Minecraft modpack made for our own use.

The modpack is managed with [Packwiz](https://packwiz.infra.link/), which makes it easy to maintain and update the mod list.

## Exporting the Modpack

Make sure [Packwiz](https://packwiz.infra.link/) is installed and run the desired command from the modpack directory.

### Modrinth

To export the modpack in the Modrinth `.mrpack` format:

```bash
packwiz mr export
```

This will create a `.mrpack` file that can be imported into launchers supporting the Modrinth modpack format.

### CurseForge

To export the modpack in the CurseForge format:

```bash
packwiz cf export
```

This will create a `.zip` file that can be imported into launchers supporting the CurseForge modpack format.

### Packwiz Installer

The modpack can also be distributed directly using `packwiz-installer`. This allows players to install and update the modpack directly from the Packwiz repository without manually exporting a modpack file.

Run:

```bash
java -jar packwiz-installer-bootstrap.jar <PACKWIZ_INDEX_URL>
```

Replace `<PACKWIZ_INDEX_URL>` with the URL of the `pack.toml` file hosted online.

For example:

```bash
java -jar packwiz-installer-bootstrap.jar https://example.com/pack.toml
```

After installation, `packwiz-installer` can be run again to update the modpack to the latest version.

> **Note:** The `pack.toml` file must be accessible via a direct HTTP(S) URL for `packwiz-installer` to use it.

## Updating

After making changes to the modpack, export it again using the required format or run `packwiz-installer` to update an existing installation.

The repository itself remains the main source of truth for the modpack.
