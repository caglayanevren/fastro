import merge from "lodash.merge";
import { site } from "~/config";

export interface SiteConfig {
    name: string;
    site?: string;
    base?: string;
    trailingSlash?: boolean;
    googleSiteVerificationId?: string;
}

const getSite = () => {
    const _default = {
        name: site.name,
        site: site.site,
        base: site.base,
        trailingSlash: site.trailingSlash,
        googleSiteVerificationId: site.googleSiteVerificationId,
    };

    return merge({}, _default, site ?? {}) as SiteConfig;
};

export const SITE = getSite();
