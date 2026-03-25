import "@servicenow/sdk/global";

declare global {
    namespace Now {
        namespace Internal {
            interface Keys extends KeysRegistry {
                explicit: {
                        "cs0": {
                            "table": "sys_script_client",
                            "id": "1e9c2022acd24f9eb0676a4dfea7ee8a"
                        },
                        "src_server_script_ts": {
                            "table": "sys_module",
                            "id": "135a442bec0f44fea63f874bbbef3446"
                        },
                        "br0": {
                            "table": "sys_script",
                            "id": "1fc267265cb141c3ad70b04451f8e8fd"
                        },
                        "package_json": {
                            "table": "sys_module",
                            "id": "89a178a7ab2f4326bc68497584444523"
                        }
                    };
                composite: [
                        {
                            "table": "sys_module",
                            "id": "5cf73b93f16144c49e080d60513cfb51",
                            "key": {
                                "module": "lodash.snakecase@4.1.1",
                                "file": "index.js"
                            }
                        },
                        {
                            "table": "sys_module",
                            "id": "09f5c205e20b42a3884dbfda4ccbc755",
                            "key": {
                                "module": "lodash.snakecase@4.1.1",
                                "file": "cyclonedx/bom.json"
                            }
                        },
                        {
                            "table": "sys_module",
                            "id": "0890a46cbe0344e283083b7cdbadfbb4",
                            "key": {
                                "module": "lodash.snakecase@4.1.1",
                                "file": "package.json"
                            }
                        }
                    ];
            }
        }
    }
}
