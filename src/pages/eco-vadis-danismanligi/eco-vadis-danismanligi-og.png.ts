import { ogpngConfig } from "~/config";
import { ImageResponse } from "@vercel/og";
import { OpenSansData, Zilla300Data, Zilla600Data } from "~/utils/utils";

const post = "EcoVadis Danışmanlığı";

export async function GET() {
	// Astro doesn't support tsx endpoints so usign React-element objects
	const html = {
		type: "div",
		props: {
			children: [
				{
					type: "div",
					props: {
						tw: "w-full h-full flex left-0 top-0 absolute",
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
									tw: "p-0 flex text-center",
									children: [
										{
											type: "div",
											props: {
												tw: "flex",
												style: {
													fontSize: "124px",
													fontFamily: "Zilla Slab Bold",
												},
												children: post,
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
