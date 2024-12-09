import { getCollection, type CollectionEntry } from "astro:content";
//import * as fs from "fs";
//import path from "path";
import { ogpngConfig } from "~/config";
import { ImageResponse } from "@vercel/og";

interface Props {
	params: { slug: string };
	props: { post: CollectionEntry<"oduller"> };
}
async function loadGoogleFont(font: string) {
	//, text: string
	const url = `https://fonts.googleapis.com/css2?family=${font}`; //&text=${encodeURIComponent(text)}
	const css = await (await fetch(url)).text();
	const resource = css.match(/src: url\((.+)\) format\('(opentype|truetype)'\)/);

	if (resource) {
		const response = await fetch(resource[1]);
		if (response.status == 200) {
			return await response.arrayBuffer();
		}
	}

	throw new Error("failed to load font data");
}
export async function GET({ props }: Props) {
	const { post } = props;

	// using custom font files
	//const OpenSans = fs.readFileSync(path.resolve("public/font/OpenSans-Regular.ttf"));
	//const Zilla300 = fs.readFileSync(path.resolve("public/font/ZillaSlab-Light.ttf"));
	//const Zilla600 = fs.readFileSync(path.resolve("public/font/ZillaSlab-Bold.ttf"));

	// post cover with Image is pretty tricky for dev and build phase
	//const postCover = fs.readFileSync(process.env.NODE_ENV === "development" ? path.resolve(post.data.thumbnail.src.replace(/\?.*/, "").replace("/@fs", "")) : path.resolve(post.data.thumbnail.src.replace("/", "dist/")));

	// Astro doesn't support tsx endpoints so usign React-element objects
	const html = {
		type: "div",
		props: {
			children: [
				{
					type: "div",
					props: {
						tw: "w-full h-full left-0 top-0 absolute",
						style: {
							background: `${ogpngConfig.imageAccentBg}`,
							clipPath: `polygon(0 0, 650 0, 400 100%, 0 100%)`,
						},
					},
				},
				{
					type: "div",
					props: {
						children: [
							/* {
								type: "div",
								props: {
									tw: `w-[${ogpngConfig.thumbnailWaH}] h-[${ogpngConfig.thumbnailWaH}] flex overflow-hidden`,
									children: [
										{
											type: "img",
											props: {
												src: postCover.buffer,
											},
										},
									],
								},
							}, */
							{
								type: "div",
								props: {
									tw: "pl-10 shrink flex",
									children: [
										{
											type: "div",
											props: {
												style: {
													fontSize: `${ogpngConfig.titleFontSize}`,
													fontFamily: "Zilla Slab Bold",
												},
												children: post.data.title,
											},
										},
									],
								},
							},
							{
								type: "div",
								props: {
									tw: `absolute right-[${ogpngConfig.categoryRightPad}] bottom-[${ogpngConfig.categoryBottomPad}] flex items-center`,
									children: [
										{
											type: "div",
											props: {
												tw: "text-4xl",
												children: "Finar Kurumsal",
												style: {
													fontFamily: "Zilla Slab Bold",
													color: ogpngConfig.finarColor,
												},
											},
										},
										{
											type: "div",
											props: {
												tw: "px-2 text-4xl",
												children: "|",
											},
										},
										{
											type: "div",
											props: {
												tw: "text-3xl",
												children: post.data.category,
											},
										},
									],
								},
							},
						],
						tw: `w-full h-full flex items-center justify-center relative px-${ogpngConfig.imagePadding}`,
						style: {
							fontFamily: "Zilla Slab",
						},
					},
				},
			],
			tw: "w-full h-full flex relative p-0",
			style: {
				background: `${ogpngConfig.imageBg}`,
			},
		},
	};

	return new ImageResponse(html as React.ReactElement, {
		width: ogpngConfig.width,
		height: ogpngConfig.height,
		fonts: [
			{
				name: "Open Sans",
				data: await loadGoogleFont("Open Sans"),
				style: "normal",
			},
			{
				name: "Open Sans",
				data: await loadGoogleFont("Zilla Slab"),
				style: "normal",
			},
		],
	});
}

// to generate an image for each blog posts in a collection
export async function getStaticPaths() {
	const blogPosts = await getCollection("oduller");
	return blogPosts.map((post) => ({
		params: { slug: post.slug },
		props: { post },
	}));
}
