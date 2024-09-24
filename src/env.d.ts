/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

declare module "lodash.merge";

interface ImportMetaEnv {
	readonly UPLOADTHING_TOKEN: string;
	readonly HR_SLACK_WEBHOOK_URL: string;
	readonly CONTACT_SLACK_WEBHOOK_URL: string;
}

interface ImportMeta {
	readonly env: ImportMetaEnv;
}
