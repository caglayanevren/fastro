//import * as fs from "fs";
//import path from "path";
import { ogpngConfig } from "~/config";
import { ImageResponse } from "@vercel/og";

const post = "Entegre Faaliyet Raporu";

export async function GET() {
	try {
		// using custom font files
		const OpenSans = await fetch(new URL("../../../public/font/OpenSans-Regular.ttf", import.meta.url));
		if (!OpenSans.ok) {
			throw new Error("Failed to fetch OpenSans font file");
		}
		const OpenSansData = await OpenSans.arrayBuffer();

		const Zilla300 = await fetch(new URL("../../../public/font/ZillaSlab-Light.ttf", import.meta.url));
		if (!Zilla300.ok) {
			throw new Error("Failed to fetch Zilla300 font file");
		}
		const Zilla300Data = await Zilla300.arrayBuffer();

		const Zilla600 = await fetch(new URL("../../../public/font/ZillaSlab-Bold.ttf", import.meta.url));
		if (!Zilla600.ok) {
			throw new Error("Failed to fetch Zilla600 font file");
		}
		const Zilla600Data = await Zilla600.arrayBuffer();
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
	} catch (e: any) {
		console.log(`${e.message}`);
		return new Response(`Failed to generate the image`, {
			status: 500,
		});
	}
}
