import fs from "fs";
import path from "path";
import { ogpngConfig } from "~/config";
import { ImageResponse } from "@vercel/og";

const post = "Faaliyet Raporu";

export async function GET() {
	// using custom font files
	const OpenSans = fs.readFileSync(
		path.resolve("public/font/OpenSans-Regular.ttf"),
	);
	const Zilla300 = fs.readFileSync(
		path.resolve("public/font/ZillaSlab-Light.ttf"),
	);
	const Zilla600 = fs.readFileSync(
		path.resolve("public/font/ZillaSlab-Bold.ttf"),
	);

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
													fontFamily:
														"Zilla Slab Bold",
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
													fontFamily:
														"Zilla Slab Bold",
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

	return new ImageResponse(html, {
		width: ogpngConfig.width,
		height: ogpngConfig.height,
		fonts: [
			{
				name: "Open Sans",
				data: OpenSans.buffer,
				style: "normal",
			},
			{
				name: "Zilla Slab",
				data: Zilla300.buffer,
				style: "normal",
			},
			{
				name: "Zilla Slab Bold",
				data: Zilla600.buffer,
				style: "normal",
			},
		],
	});
}
