export const trim = (str = "", ch?: string) => {
	let start = 0,
		end = str.length || 0;
	while (start < end && str[start] === ch) ++start;
	while (end > start && str[end - 1] === ch) --end;
	return start > 0 || end < str.length ? str.substring(start, end) : str;
};

// using custom font files
const OpenSans = await fetch(new URL("/font/OpenSans-Regular.ttf", import.meta.env.SITE));
if (!OpenSans.ok) {
	throw new Error("Failed to fetch OpenSans font file");
}
export const OpenSansData = await OpenSans.arrayBuffer();

const Zilla300 = await fetch(new URL("/font/ZillaSlab-Light.ttf", import.meta.env.SITE));
if (!Zilla300.ok) {
	throw new Error("Failed to fetch Zilla300 font file");
}
export const Zilla300Data = await Zilla300.arrayBuffer();

const Zilla600 = await fetch(new URL("/font/ZillaSlab-Bold.ttf", import.meta.env.SITE));
if (!Zilla600.ok) {
	throw new Error("Failed to fetch Zilla600 font file");
}
export const Zilla600Data = await Zilla600.arrayBuffer();
