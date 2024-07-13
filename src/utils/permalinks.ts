import { SITE } from "~/utils/config";

import { trim } from "~/utils/utils";

export const trimSlash = (s: string) => trim(trim(s, "/"));

const createPath = (...params: string[]) => {
	const paths = params
		.map((el) => trimSlash(el))
		.filter((el) => !!el)
		.join("/");
	return "/" + paths + (SITE.trailingSlash && paths ? "/" : "");
};

const BASE_PATHNAME = SITE.base || "/";

export const getPermalink = (slug = ""): string => {
	return definitivePermalink(createPath(slug));
};

export const getHomePermalink = (): string => getPermalink("/");

export const getAsset = (path: string): string =>
	"/" +
	[BASE_PATHNAME, path]
		.map((el) => trimSlash(el))
		.filter((el) => !!el)
		.join("/");

const definitivePermalink = (permalink: string): string => createPath(BASE_PATHNAME, permalink);
