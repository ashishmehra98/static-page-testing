import antPestStudyData from "./pests/ant-pest-study";
import bedBugsPestStudyData from "./pests/bed-bugs-pest-study";
import beePestStudyData from "./pests/bee-pest-study";
import birdPestStudyData from "./pests/bird-pest-study";
import carpetBeetlePestStudyData from "./pests/carpet-beetle-pest-study";
import cockroachPestStudyData from "./pests/cockroach-pest-study";
import fliesPestStudyData from "./pests/fly-pest-study";
import mosquitoPestStudyData from "./pests/mosquito-pest-study";
import possumPestStudyData from "./pests/possum-pest-study";
import ratsMicePestStudyData from "./pests/rats-mice-pest-study";
import storedProductPestStudyData from "./pests/stored-product-pest-study";
import waspsPestStudyData from "./pests/wasps-pest-study";

export const pestPages: Record<string, Partial<PestStudyConfig>> = {
	"ant-pest-control-sydney": antPestStudyData,
	"bed-bug-pest-control": bedBugsPestStudyData,
	"bee-pest-control": beePestStudyData,
	"bird-pest-control": birdPestStudyData,
	"carpet-beetle-pest-control": carpetBeetlePestStudyData,
	"cockroach-pest-control": cockroachPestStudyData,
	"fly-pest-control": fliesPestStudyData,
	"mosquito-pest-control": mosquitoPestStudyData,
	"possum-pest-control": possumPestStudyData,
	"rats-mice-pest-control": ratsMicePestStudyData,
	"stored-product-pests-control": storedProductPestStudyData,
	"wasp-pest-control": waspsPestStudyData,
};
