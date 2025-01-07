import { getCollection, type CollectionEntry } from "astro:content";
import { ogpngConfig } from "~/config";
import { ImageResponse } from "@vercel/og";
import { OpenSansData, Zilla300Data, Zilla600Data } from "~/utils/utils";

interface Props {
	params: { slug: string };
	props: { vlog: CollectionEntry<"vlog"> };
}

export async function GET({ props }: Props) {
	const { vlog } = props;

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
												children: vlog.data.title,
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
												children: `VLOG - ${vlog.data.category}`,
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
				data: OpenSansData,
				style: "normal",
			},
			{
				name: "Zilla Slab",
				data: Zilla300Data,
				style: "normal",
			},
			{
				name: "Zilla Slab Bold",
				data: Zilla600Data,
				style: "normal",
			},
		],
	});
}

// to generate an image for each blog posts in a collection
export async function getStaticPaths() {
	const vlogs = await getCollection("vlog");
	return vlogs.map((vlog) => {
		return {
			params: {
				slug: vlog.id,
				slugtwo: vlog.id.split("/")[1],
			},
			props: { vlog },
		};
	});
}
