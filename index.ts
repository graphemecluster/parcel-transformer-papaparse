import { parse } from "papaparse";
import { Transformer } from "@parcel/plugin";

export default new Transformer({
	async loadConfig({ config }) {
		const result = await config.getConfig(
			[
				".papaparserc",
				".papaparserc.json",
				".papaparserc.toml",
				".papaparserc.js",
				".papaparserc.cjs",
				".config/papaparserc",
				".config/papaparserc.json",
				".config/papaparserc.toml",
				".config/papaparserc.js",
				".config/papaparserc.cjs",
				"papaparse.config.js",
				"papaparse.config.cjs",
			],
			{ packageKey: "papaparse", parse: true }
		);
		return result?.contents ?? {};
	},
	async transform({ asset, config }) {
		asset.setCode(
			`module.exports = JSON.parse(${JSON.stringify(
				JSON.stringify(
					parse(await asset.getCode(), {
						dynamicTyping: true,
						header: true,
						skipEmptyLines: true,
						...config,
					}).data
				)
			)})`
		);
		asset.type = "js";
		return [asset];
	},
});
