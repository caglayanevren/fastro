/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

declare module "lodash.merge";

interface ImportMetaEnv {
	readonly UPLOADTHING_TOKEN: string;
	readonly PUBLIC_HR_SLACK_WEBHOOK_URL: string;
	readonly PUBLIC_CONTACT_SLACK_WEBHOOK_URL: string;
}

interface ImportMeta {
	readonly env: ImportMetaEnv;
}
